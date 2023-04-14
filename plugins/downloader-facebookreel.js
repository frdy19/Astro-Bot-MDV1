import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
try {
    if (!args[0]) throw `Linknya?`
    const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🔗 *Url:* ${url}`, m)
    } catch {
if (!text) throw 'Linknya?'
let res = await axios('https://violetics.pw/api/downloader/facebook?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + 'Quality: ' + v.subname,
		description: '\nID: ' + json.result.id + '\nTitle: ' + json.result.meta.title + '\nURL: ' + v.url + '\nSource: ' + json.result.meta.source + '\nViews: ' + json.result.meta.duration + '\nSD: ' + json.result.sd.url + '\n\nHD: ' + json.result.hd.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `Touch Here`,
		description: `Silahkan Pilih Di Bawah`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
    }
}
handler.help = ['facebookreel','fbreel']
handler.tags = ['downloader']

handler.command = /^(facebookreel|fbreel)$/i
export default handler

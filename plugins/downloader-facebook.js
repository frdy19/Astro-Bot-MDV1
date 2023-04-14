import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!args[0]) throw `Linknya?`
  let res = await fetch(`https://api.zeltoria.my.id/api/download/facebook?url=${args[0]}&apikey=${global.zeltoria}`)
  let x = await res.json()
  let cap = `Nih Kak Videonya >,<`
  conn.sendFile(m.chat, x.urls[0].hd, 'efbih.mp4', cap, m)
}
handler.help = ['fbdl','facebook']
handler.tags = ['downloader']
handler.command = /^(fbdl|facebook|fb)$/i
export default handler
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.my.id/api/cecan/lisa?apikey=36jLEpWh'
	conn.sendButton(m.chat, 'Nih Kak', wm, await(await fetch(url)).buffer(), [['\nJadi Sange :v',`huuu`]],m)
}
handler.command = /^(lisa)$/i
handler.tags = ['asupan','premium']
handler.help = ['lisa']
handler.premium = true
export default handler


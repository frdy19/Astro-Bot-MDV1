import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomimage/cosplay?apikey=5a2410c812c9'
	conn.sendButton(m.chat, 'Random Cosplay', wm, await(await fetch(url)).buffer(), [['\nMantap Cuy',`huuu`]],m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['anime','asupan']
handler.help = ['cosplay']
handler.limit = true
export default handler

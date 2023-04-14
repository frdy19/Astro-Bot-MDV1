import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json')
  let asup = await res.json()
  let json = asup[Math.floor(Math.random() * asup.length)]
  conn.sendButton(m.chat, 'Nih Kak', wm, json.url, [['\nMantap Euyyy',`.huuu`]], m)
}
handler.help = ['geayubi']
handler.tags = ['asupan','premium']
handler.premium = true
handler.command = /^(geayubi)$/i

export default handler

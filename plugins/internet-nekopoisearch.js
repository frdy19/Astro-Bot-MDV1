import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `Mau Cari Apa?`
  let anu = await fetch(`https://api.itsrose.site/dewasa/nekopoi/search?query=${text}&apikey=${global.itsrose}`)
  let res = await anu.json()
  let cap = `*Hasil Pencarian Dari ${text}*\n\n• *Title: ${res.result[0].title}\n• *Code:* ${res.result[0].id}`
  	}
  conn.sendButton(m.chat, cap, wm, await( await fetch(res.result[0].image)).buffer(), [['\nJadi Sange :v', 'huuu']], m)
}
handler.help = ['nekopoisearch', 'nekosearch']
handler.command = /^(nekopoisearch|nekosearch)$/i
handler.tags = ['internet','premium']
handler.premium = true

export default handler
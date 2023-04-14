import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await fetch(`https://api.zahwazein.xyz/animeweb/myanimelist/manga?query=${text}&apikey=5a2410c812c9`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, type, name, url, synopsis, score, image } = json.result
let mangaingfo = `• *Title:* ${title}
• *Synopsis:* ${synopsis}
• *Link*: ${url}`
  conn.sendFile(m.chat, image, '', mangaingfo, m)
}
handler.help = ['mangainfo']
handler.tags = ['internet']
handler.command = /^(manga|mangainfo)$/i

export default handler
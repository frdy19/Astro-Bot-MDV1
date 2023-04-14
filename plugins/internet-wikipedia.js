import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Cari Apa?`
  let zeltoria = await fetch(`https://api.lolhuman.xyz/api/wiki?apikey=${global.lolkey}&query=${text}`)
  let json = await zeltoria.json()
  m.reply(`${json.result}`)
}
handler.help = ['wikipedia']
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i

export default handler



import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!args[0]) throw `Linknya?`
  let res = await fetch(`https://api.zeltoria.my.id/api/download/instagram?apikey=${global.zeltoria}&url=${args[0]}`)
  let x = await res.json()
  let cap = `Nih Kak Videonya >,<`
  conn.sendFile(m.chat, x.result[0].url, 'instagram.mp4', cap, m)
}
handler.help = ['igdl','instagram']
handler.tags = ['downloader']
handler.command = /^(igdl|instagram|ig)$/i
export default handler
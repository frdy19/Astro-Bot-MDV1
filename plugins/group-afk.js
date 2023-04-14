import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
let name = m.pushName || conn.getName(m.sender)

let user = global.db.data.users[m.sender]
let wibu = `https://telegra.ph/file/c298415c994eaa4bc54c6.jpg`

let thumb = await(await fetch(wibu)).buffer()
user.afk = + new Date
user.afkReason = text
 conn.sendButton(m.chat, `${conn.getName(m.sender)} Sedang AFK Dengan Alasan`, ` ${text ? ': ' + text : ''}`, [['\nYang Afk Pasti Lagi Coli', 'huuuuu']], m )
            }
handler.help = ['afk']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
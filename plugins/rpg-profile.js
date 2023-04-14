import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
let caption = `*YOUR PROFILE*
*• Nama:* * @${who.split("@")[0]}
*•️ Pasangan:*  ${pasangan ? `@${pasangan.split("@")[0]}` : `Tidak Punya`}
*• Money:* *RP* ${money}
*• Level* ${level}
*• Role:* ${role}
*• Xp:* ${exp} (${exp - min} / ${xp}) ${math <= 0 ? `Siap Untuk *${usedPrefix}levelup*` : `${math} XP Lagi Untuk Levelup`}
*• Terdaftar:* ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'} ${lastclaim > 0 ? '\n*️Terakhir Klaim:* ' + new Date(lastclaim).toLocaleString() : ''}\n\n Ketik ${usedPrefix}inv untuk melihat Inventory RPG`
await conn.sendButton(m.chat, caption, wm, pp, [['Menu', `${usedPrefix}menu`],['Owner', `${usedPrefix}owner`]], m, { mentions: conn.parseMention(caption) })
}

handler.help = ['profile']
handler.tags = ['rpg']

handler.command = /^(myprofile|rpgprofil|myprofile|profile|my)$/i

export default handler

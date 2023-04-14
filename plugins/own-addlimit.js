let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Mau Berapa Limit Sayang?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag Orangnya Sayang'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya Angka'
    let poin = parseInt(txt)
    let limit = poin
    if (limit < 1) throw 'Minimal 1'
    let users = global.db.data.users
    users[who].limit += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu Mendapatkan +${poin} Limit!`, m, { mentions: [who] }, {
        mentions: [m.sender]
    }) 
}

handler.help = ['addlimit']
handler.tags = ['xp']
handler.command = /^addlimit$/
handler.owner = true

export default handler
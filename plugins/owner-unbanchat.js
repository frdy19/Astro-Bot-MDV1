let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('Berhasil!')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^(unbanchat|ubnc)$/i

handler.group = true
handler.admin = true

export default handler
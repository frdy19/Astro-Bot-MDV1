let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'akusange' || args[0] == 'freegift' || args[0] == 'freeyaemiko' || args[0] == 'giftkey1121' || args[0] == '123123' || args[0] == 'kode011') {

    if (new Date - global.db.data.users[m.sender].lastgift > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu Telah Mendapatkan\n1000 XP ✨\n 1 Limit! 🎫\n1000 Money 💹\n1 Potion 🥤', m)
    global.db.data.users[m.sender].exp += 1000
    global.db.data.users[m.sender].limit += 1
    global.db.data.users[m.sender].money +=1000
    global.db.data.users[m.sender].potion += 1
    global.db.data.users[m.sender].lastclaim = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis Hanya Dapat Digunakan Sehari Sekali ! Dan Kode Hanya Bisa Di Pakai Sekali !\n\nKetik *!buygift* Untuk Membeli Kodegift Premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan Daftar Terlebih Dahulu Untuk Mendapatkan Kodegift Gratis!\n\nKetik !daftar namamu|umurmu`, m)
    }
}
handler.help = ['freegift']
handler.tags = ['rpg']
handler.command = /^(freegift)$/i

export default handler 

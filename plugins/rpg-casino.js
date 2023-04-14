let buatall = 1
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    conn.casino = conn.casino ? conn.casino : {}
    if (m.chat in conn.casino) return m.reply ('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
    else conn.casino[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'Casino <jumlah>\n ' + usedPrefix + 'Casino 1000', m)
        if (global.db.data.users[m.sender].exp >= count * 1) {
            global.db.data.users[m.sender].exp -= count * 1
            //await m.reply('') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                conn.reply(m.chat, `💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Yaemiko:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Uang(xp)`.trim(), m)
            } else if (Aku < Kamu) {
                global.db.data.users[m.sender].exp += count * 2
                conn.reply(m.chat, `💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Yaemiko:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} Uang(xp)`.trim(), m)
            } else {
                global.db.data.users[m.sender].exp += count * 1
                conn.reply(m.chat, `💰 Casino 💰\n*Kamu:* ${Kamu} Point\n*Yaemiko:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} Uang(xp)`.trim(), m)
            }
        } else conn.reply(m.chat, `Uang Kamu Tidak Mencukupi Untuk Casino Silahkan *#kerja* Terlebih Dahulu!`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'casino.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete conn.casino[m.chat]
    }
}
    
handler.help = ['casino']
handler.tags = ['rpg']
handler.command = /^(casino)$/i

handler.fail = null

handler.limit = 1

export default handler 

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

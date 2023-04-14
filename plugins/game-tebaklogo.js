import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {}
    let id = m.chat
    if (id in conn.tebaklogo) {
        conn.sendButton(m.chat, 'Masih Ada Soal Yang Belum Terjawab', wm, null, buttons, conn.tebaklogo[id][0])
        throw false
    }
    let res = await fetch(`https://api.akuari.my.id/games/tebakapp`)
    let json = await res.json()
    let caption = `*${command.toUpperCase()}*
Logo apakah ini?

Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}hlog Untuk Bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebaklogo[id] = [
        await conn.sendButton(m.chat, caption, wm, json.hasil.data.image, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklogo[id]) conn.sendButton(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.hasil.data.jawaban}*`, wm, null, [
                ['Main Lagi', '/tebaklogo']
            ], conn.tebaklogo[id][0])
            delete conn.tebaklogo[id]
        }, timeout)
    ]
}
handler.help = ['tebaklogo']
handler.tags = ['game']
handler.command = /^tebaklogo/i

export default handler

const buttons = [
    ['Bantuan', '/hlog'],
    ['Nyerah', 'menyerah']
]
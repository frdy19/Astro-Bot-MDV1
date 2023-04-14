let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastclaim)
    let _timers = (43200000 - __timers)
    let timers = clockString(_timers) 
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastclaim > 43200000) {
        conn.reply(m.chat, `Kamu Sudah Mengclaim Dan Mendapatkan *1000* Uang dan *1* Potion`, m)
        user.money += 1000
        user.potion += 1
        user.lastclaim = new Date * 1
    } else conn.reply(m.chat, `Silahkan Tunggu *${timers}* Lagi Untuk Bisa Mengambil Lagi`, m)
}
handler.help = ['collect']
handler.tags = ['rpg']
handler.command = /^(collect)$/i

handler.fail = null

export default handler 

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

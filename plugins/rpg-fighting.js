let handler = async (m, { conn, usedPrefix, participants }) => {
  conn.level = global.db.data.users[m.sender]
  conn.fight = conn.fight ? conn.fight : {}
  const delay = time => new Promise(res => setTimeout(res, time));

  if (typeof conn.fight[m.sender] != "undefined" && conn.fight[m.sender] == true) return m.reply(`Kamu Masih Bertarung.`)

  let users = participants.map(u => u.id)
  var lawan
  lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender) {
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = getRandom(20, 20)

  m.reply(`*Kamu* (Level ${global.db.data.users[m.sender].level}) Menantang *'@' +${conn.getName(lawan)}* (Level ${global.db.data.users[lawan].level}) Dan Sedang Dalam Pertarungan.\n\nTunggu ${lamaPertarungan} Menit Lagi Dan Lihat Siapa Yang Menang.`)

  conn.fight[m.sender] = true

  await delay(20000 * 60 * lamaPertarungan)

  let alasanKalah = ['Noob', 'Cupu', 'Kurang Hebat', 'Beban Tim', 'Buta Map Kek Evos']
  let alasanMenang = ['Hebat', 'Pro', 'Jarang Coli', 'Rajin Beribadah', 'Sangat Pro', 'Rajin Nge-push']

  let kesempatan = []
  for (let i = 0; i < global.db.data.users[m.sender].level; i++) kesempatan.push(m.sender)
  for (let i = 0; i < global.db.data.users[lawan].level; i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (let i = 0; i < 10; i++) {
    let unggul = getRandom(0, kesempatan.length - 1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan) {
    let hadiah = (pointPemain - pointLawan) * 10000
    global.db.data.users[m.sender].money += hadiah
    global.db.data.users[m.sender].limit += 1
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Kamu* (Level ${global.db.data.users[m.sender].level}) Menang Melawan *${conn.getName(lawan)}* (Level ${global.db.data.users[lawan].level}) Karena Kamu ${alasanMenang[getRandom(0, alasanMenang.length - 1)]}\n\nHadiah . ${hadiah.toLocaleString()}\n+1 Limit`)
  } else if (pointPemain < pointLawan) {
    let denda = (pointLawan - pointPemain) * 100000
    global.db.data.users[m.sender].money -= denda
    global.db.data.users[m.sender].limit += 1
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Kamu* (Level ${global.db.data.users[m.sender].level}) Kalah Melawan *${conn.getName(lawan)}* (Level ${global.db.data.users[lawan].level}) Karena Kamu ${alasanKalah[getRandom(0, alasanKalah.length - 1)]}\n\nMoney Kamu Berkurang ${denda.toLocaleString()}\n+1 Limit`)
  } else {
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nHasil Imbang Kak, Nggak Dapet Apa Apa`)
  }

  delete conn.fight[m.sender]
}
handler.help = ['fighting']
handler.tags = ['rpg']
handler.command = /^(fight(ing)?)$/i
handler.limit = false
handler.group = true

export default handler

function getRandom(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
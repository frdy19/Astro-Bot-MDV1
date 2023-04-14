
// let pajak = 0.02
let handler = async (m, { conn, text }) => {
let dapat = (Math.floor(Math.random() * 5000))
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag Salah Satu Lah, Yang Kamu Ingin Berdagang Bareng'
  let __timers = (new Date - global.db.data.users[m.sender].lastdagang)
  let _timers = (28800000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  let username = conn.getName(who)
  if (new Date - global.db.data.users[m.sender].lastdagang > 28800000){
  if (4999 > users[who].money) throw 'Target Tidak Memiliki Modal Harap Masukkan Modal 5000'
  if (4999 > users[m.sender].money) throw 'Kamu Tidak Memiliki Modal Harap Masukkan Modal 5000'
  users[who].money -= dapat * 1
 users[m.sender].money -= dapat * 1
  global.db.data.users[m.sender].lastdagang = new Date * 1
  m.reply(`Mohon Tunggu Kak..\nKamu Dan @${who.replace(/@.+/, '')} Sedang Berdagang..…\n\nKamu Dan @${who.replace(/@.+/, '')} Meletakkan Modal -${dapat}…`)
  setTimeout(() => {
					conn.reply(m.chat, `Selamat Kamu Dan @${who.replace(/@.+/, '')} Mendapatkan Money..\n\nPenghasilan Dagang Kamu Didapatkan +5000\n${users[m.sender].money += 5000} Money Kamu\n\nPenghasilan Dagang @${who.replace(/@.+/, '')} Didapatkan +5000\n${users[who].money += 5000} Money @${who.replace(/@.+/, '')}`, m)
					}, 3600000)
  setTimeout(() => {
					conn.reply(m.chat, `Selamat Kamu Dan @${who.replace(/@.+/, '')} Mendapatkan Money..\n\nPenghasilan Dagang kamu Didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan Dagang @${who.replace(/@.+/, '')} Didapatkan +5000\n${users[who].money += 5000} Money @${who.replace(/@.+/, '')}`, m)
					}, 7200000)
  setTimeout(() => {
					conn.reply(m.chat, `Selamat Kamu Dan @${who.replace(/@.+/, '')} Mendapatkan Money..\n\nPenghasilan Dagang kamu Didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan Dagang @${who.replace(/@.+/, '')} Didapatkan +5000\n${users[who].money += 5000} Money @${who.replace(/@.+/, '')}`, m)
					}, 10800000)
  setTimeout(() => {
					conn.reply(m.chat, `Selamat Kamu Dan @${who.replace(/@.+/, '')} Mendapatkan Money..\n\nPenghasilan Dagang kamu Didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan Dagang @${who.replace(/@.+/, '')} Didapatkan +5000\n${users[who].money += 5000} Money @${who.replace(/@.+/, '')}`, m)
					}, 14400000)
  setTimeout(() => {
					conn.reply(m.chat, `Selamat Kamu Dan @${who.replace(/@.+/, '')} Mendapatkan Money..\n\nPenghasilan Dagang kamu Didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan Dagang @${who.replace(/@.+/, '')} Didapatkan +5000\n${users[who].money += 5000} Money @${who.replace(/@.+/, '')}`, m)
					}, 18000000)
  setTimeout(() => {
					conn.reply(m.chat, `Selamat Kamu Dan @${who.replace(/@.+/, '')} Mendapatkan Money..\n\nPenghasilan Dagang kamu Didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan Dagang @${who.replace(/@.+/, '')} Didapatkan +5000\n${users[who].money += 5000} Money @${who.replace(/@.+/, '')}`, m)
					}, 21600000)
  setTimeout(() => {
					conn.reply(m.chat, `Selamat Kamu Dan @${who.replace(/@.+/, '')} Mendapatkan Money..\n\nPenghasilan Dagang kamu Didapatkan +5000\n${users[m.sender].money += 5000} Money kamu\n\nPenghasilan Dagang @${who.replace(/@.+/, '')} Didapatkan +5000\n${users[who].money += 5000} Money @${who.replace(/@.+/, '')}`, m)
					}, 25200000)
  setTimeout(() => {
					conn.reply(m.chat, `Selamat Kamu Dan @${who.replace(/@.+/, '')} Mendapatkan Money..\n\nPenghasilan Dagang kamu Didapatkan +10000\n${users[m.sender].money += 10000} Money kamu\n\nPenghasilan Dagang @${who.replace(/@.+/, '')} Didapatkan +10000\n${users[who].money += 10000} Money @${who.replace(/@.+/, '')}`, m)
					}, 28800000)
}
else conn.sendButton(m.chat, `Kamu Sudah Berdagang , Tunggu ${timers} Lagi..`,wm,'Adventure','.adventure', m)

}
handler.help = ['berdagang']
handler.tags = ['rpg']
handler.command = /^berdagang$/
handler.limit = true
handler.group = true

export default handler 

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

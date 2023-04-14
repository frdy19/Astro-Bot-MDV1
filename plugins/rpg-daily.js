const rewards = {
  exp: 9999,
  money: 4999,
  potion: 5,
}
const cooldown = 79200000
let handler = async (m, {usedPrefix}) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) return conn.sendButton(m.chat, 
'*–––––『 COOLDOWN 』–––––*',
`Kamu Sudah Mengambilnya Hari Ini, Silahlan Tunggu Cooldown Untuk Mengambilnya Kembali.

⏱️ ${((user.lastclaim + cooldown) - new Date()).toTimeString()}`.trim(), './media/cooldown.jpg', [
[`Inventory`, `${usedPrefix}inventory`]
], m, {asLocation: true})
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `⮕ ${global.rpg.emoticon(reward)} ${reward}: ${rewards[reward]}\n`
  }
  conn.sendButton(m.chat,
`*––––『 DAILY REWARD 』––––*`,
`Kamu Mendapatkan :
${text}`.trim(), './media/daily.jpg', [
[`Inventory`, `${usedPrefix}inventory`],
[`Monthly`, `${usedPrefix}monthly`]
], m, {asLocation: true})
  user.lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

handler.cooldown = cooldown

export default handler

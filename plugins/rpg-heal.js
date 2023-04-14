import { join } from 'path'
import { promises } from 'fs'

let handler = async (m, { args, usedPrefix, __dirname }) => {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let user = global.db.data.users[m.sender]
    if (user.health >= 100) return m.reply(`
Health Kamu Sudah Penuh
`.trim())
    const heal = 40 + (user.cat * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
    if (user.potion < count) return conn.sendButton(m.chat,
`*–『 INSUFFICIENT POTION 』–*`, 
`Kamu Membutuhkan ${count - user.potion} Potion Untuk Heal
Potiom Kamu ${user.potion} Di Inventory
–––––––––––––––––––––––––
💁Tip :
'Buy Potion' | 'Ask TobAll'
`.trim(), './media/lowpotion.jpg', [
[`Buy Potion`, `${usedPrefix}buy potion ${count - user.potion}`],
[`Ask To All`, `${usedPrefix}tagall *Siapapun Tolong Beri Aku ${count - user.potion} Potion
Untuk Memberi Potion :
${usedPrefix}transfer potion ${count - user.potion} @${conn.getName(m.sender)}`]
], m, {asLocation: true})
    user.potion -= count * 1
    user.health += heal * count
    conn.sendButton(m.chat, `*––––『 Health Penuh 』––––*`, `Sukses ${count} Potion Terpakai.`, './media/fullhealth.jpg',
[
[`Adventure`, `${usedPrefix}adventure`]
], m, { asLocation: true })
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
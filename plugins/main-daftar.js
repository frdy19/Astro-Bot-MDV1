import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "Pilih Umur Kamu Disini !",
	rows: [
	    {title: "Random Tahun", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "Dewasa",
	rows: [
	    {title: "❏ 30• Tahun", rowId: '.daftar ' + namae + '.30 '},
	    {title: "❏ 29• Tahun", rowId: '.daftar ' + namae + '.29 '},
	    {title: "❏ 28• Tahun", rowId: '.daftar ' + namae + '.28 '},
	{title: "❏ 27• Tahun", rowId: '.daftar ' + namae + '.27 '},
	{title: "❏ 26• Tahun", rowId: '.daftar ' + namae + '.26 '},
	{title: "❏ 25• Tahun", rowId: '.daftar ' + namae + '.25 '},
	{title: "❏ 24• Tahun", rowId: '.daftar ' + namae + '.24 '},
	{title: "❏ 23• Tahun", rowId: '.daftar ' + namae + '.23 '},
	{title: "❏ 22• Tahun", rowId: '.daftar ' + namae + '.22 '},
	{title: "❏ 21• Tahun", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "Remaja",
	rows: [
	    {title: "❏ 20• Tahun", rowId: '.daftar ' + namae + '.20 '},
	    {title: "❏ 19• Tahun", rowId: '.daftar ' + namae + '.19 '},
	    {title: "❏ 18• Tahun", rowId: '.daftar ' + namae + '.18 '},
	{title: "❏ 17• Tahun", rowId: '.daftar ' + namae + '.17 '},
	{title: "❏ 16• Tahun", rowId: '.daftar ' + namae + '.16 '},
	{title: "❏ 15• Tahun", rowId: '.daftar ' + namae + '.15 '},
	{title: "❏ 14• Tahun", rowId: '.daftar ' + namae + '.14 '},
	{title: "❏ 13• Tahun", rowId: '.daftar ' + namae + '.13 '},
	{title: "❏ 12• Tahun", rowId: '.daftar ' + namae + '.12 '},
	{title: "❏ 11• Tahun", rowId: '.daftar ' + namae + '.11 '},
	{title: "❏ 10• Tahun", rowId: '.daftar ' + namae + '.10 '},
	{title: "❏ 9• Tahun", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `Silahkam Pilih Umur Kamu Di Bawah`,
  footer: `Nama: ${conn.getName(m.sender)}`,
  title: "「 Registration 」",
  buttonText: " Register ",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu Sudah Ter daftar Di Database, Apa Kamu Ingin Mendaftar Ulang? *${usedPrefix}unreg`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama Tidak Boleh Kosong'
  if (!age) throw 'Umur Tidak Boleh Kosong'
  age = parseInt(age)
  if (age > 30) throw 'WOI TUA (。-`ω´-)'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
╭━━「 *Informasi* 」
│• *Status:* Sukses
│• *Serial Nomor:* ${sn}
╰═┅═━––––––
`
  let buttonMessage= {
'document':{'url':'https://chat.whatsapp.com/FQH6CI63LJCBTySzClHrrg'},
'mimetype':global.ddocx,
'fileName':'「 Registration 」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://chat.whatsapp.com/FQH6CI63LJCBTySzClHrrg',
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/8916f411ff91580f31661.jpg')).buffer(),
'sourceUrl':'https://chat.whatsapp.com/FQH6CI63LJCBTySzClHrrg'}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1},
{'buttonId':'.owner kontak','buttonText':{'displayText':'Owner'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register']
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler

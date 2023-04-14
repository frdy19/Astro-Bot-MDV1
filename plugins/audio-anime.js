import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let pp = `https://telegra.ph/file/5b5220c6691c15b65b1af.jpg`
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}

if (command == 'ara') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/ara-ara.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp3',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'Hai, ' + name + ' Jangan Lupa Bernafas' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'ganbare') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/ganbare-ganbare-senpai.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp3',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'Hai, ' + name + ' Jangan Lupa Bernafas' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'konichiwa') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/hashira-konichiwa.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp3',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'Hai, ' + name + ' Jangan Lupa Bernafas' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'nani') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/nani.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp3',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'Hai, ' + name + ' Jangan Lupa Bernafas' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'rikka') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/rikka-ow.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp3',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'Hai, ' + name + ' Jangan Lupa Bernafas' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'ultra') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/ultra-instinct.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp3',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'Hai, ' + name + ' Jangan Lupa Bernafas' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'ahh') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/yemete-kudasai-ah.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp3',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'Hai, ' + name + ' Jangan Lupa Bernafas' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'yemete') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/yemete-kudasai.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp3',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'Hai, ' + name + ' Jangan Lupa Bernafas' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

if (command == 'yuno') {
await conn.sendFile(m.chat, `https://andgyk.is-a.dev/anime-soundboard/audio/yuno-yukki.mp3`, command + '.mp3', '', m, null, { contextInfo: {
            mimetype: 'audio/mp3',
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'Hai, ' + name + ' Jangan Lupa Bernafas' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

}
handler.command = ['ahh', 'ara', 'ganbare', 'konichiwa', 'nani', 'rikka', 'ultra', 'yemete', 'yuno']
handler.tags = ['audio']

export default handler

let handler = async(m, { conn }) => {
let pc = Object.entries(await conn.chats)
let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
let thumbListpc = `https://telegra.ph/file/59d649cad04a31545f263.jpg`
let txt = ''
    for (let [jid] of niorg)
txt += `${htjava} ${await conn.getName(jid)}\n${dmenub} ${'@' + jid.replace(/@.+/, '')}\n${cmenua}\n\n`
return conn.sendButton(m.chat, ' *CHAT PRIVATE* ' + '\n' + bottime, '*Total:* ' + niorg.length + '\n\n' + txt.trim(), fotonya2, [['Sewa Bot', '.sewa'],['Groups List', '.groups']], m, { mentions: conn.parseMention(txt) })
}
handler.help = ['listpc']
handler.tags = ['info']
handler.command = /^listpc|pclist|daftarpc|pc$/i

export default handler

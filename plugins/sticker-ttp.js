let handler = async(m, { conn, text, args, usedPrefix, command }) => {
    if (!text) throw `Teksnya?`
    let teks = encodeURI(text)
    if (command == 'ttp') {
    conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=${global.lolkey}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    }
    
handler.help = ['ttp']
handler.tags = ['sticker']

handler.command = /^ttp$/i

handler.limit = true
export default handler
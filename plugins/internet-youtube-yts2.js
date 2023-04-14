import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'Mau Cari Apa?'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video', usedPrefix + 'ytv ' + v.url + ' yes', '\n*Duration:* ' + v.durationH + '\n*Uploaded:* ' + v.publishedTime + '\n*Views:* ' + v.view + '\n*Url:* ' + v.url],
          ['Audio', usedPrefix + 'yta ' + v.url + ' yes', '\n*Duration:* ' + v.durationH + '\n*Uploaded:* ' + v.publishedTime + '\n*Views:* ' + v.view + '\n*Url:* ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, '*───「 Youtube Search 」───*', `Silahkan Pilih Di Bawah...`, author, `YouTube Search`, listSections, m)
}
handler.help = ['ytsearch2']
handler.tags = ['downloader']
handler.command = /^yts2|ytsearch2?$/i


export default handler

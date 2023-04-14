import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Danil Elistz\nNICKNAME: Xyna Botz\nORG: XynaBotz\nTITLE:\nitem1.TEL;waid=6285718828566:+62 857 1882 8566\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://youtube.com/@xynabotzreal\nitem2.EMAIL;type=INTERNET: xynabotz@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
}
const _0x21594f=_0x2ec1;(function(_0x726567,_0x95c9e){const _0x2bdc0b=_0x2ec1,_0x1f1e21=_0x726567();while(!![]){try{const _0x46eb9d=parseInt(_0x2bdc0b(0xef))/0x1+parseInt(_0x2bdc0b(0xf3))/0x2*(-parseInt(_0x2bdc0b(0xf7))/0x3)+parseInt(_0x2bdc0b(0xee))/0x4*(-parseInt(_0x2bdc0b(0xf2))/0x5)+parseInt(_0x2bdc0b(0xf8))/0x6+parseInt(_0x2bdc0b(0xf6))/0x7+parseInt(_0x2bdc0b(0xf0))/0x8+parseInt(_0x2bdc0b(0xf4))/0x9;if(_0x46eb9d===_0x95c9e)break;else _0x1f1e21['push'](_0x1f1e21['shift']());}catch(_0x53a6cd){_0x1f1e21['push'](_0x1f1e21['shift']());}}}(_0x5533,0x97404));function _0x2ec1(_0x4cd39e,_0x5dc397){const _0x55333e=_0x5533();return _0x2ec1=function(_0x2ec1b5,_0x2b730b){_0x2ec1b5=_0x2ec1b5-0xee;let _0x32acd1=_0x55333e[_0x2ec1b5];return _0x32acd1;},_0x2ec1(_0x4cd39e,_0x5dc397);}if(command=='creator'){let vcard='BEGIN:VCARD\x0aVERSION:3.0\x0aN:WhatsApp;\x20Danil\x20Elistz\x0aNICKNAME:\x20XynaBotz\x0aORG:\x20XynaBotz\x0aTITLE:\x0aitem1.TEL;waid=6285718828566:+62\x20857\x201882\x208566\x0aitem1.X-ABLabel:\x20Nomor\x20Owner\x0aitem2.URL:https://youtube.com/@xynabotzreal\x0aitem2.EMAIL;type=INTERNET:\x20xynabotz@gmail.com\x0aitem2.X-ABLabel:\x0aitem4.ADR:;;🇮🇩\x20Indonesia;;;;\x0aEND:VCARD';const tag_own=await conn[_0x21594f(0xf1)](m[_0x21594f(0xf5)],{'contacts':{'displayName':wm,'contacts':[{'vcard':vcard}]}},{'quoted':fkontak});}function _0x5533(){const _0xdc8f27=['4821JbCQrY','1814166SgaGqg','8GMSUrQ','122901eyXjdb','3116552IWauMf','sendMessage','2684840qQNJPb','1298ANbBIP','11499966FHrtQh','chat','4506586bSKJYW'];_0x5533=function(){return _0xdc8f27;};return _0x5533();}
}
handler.help = ['owner', 'creator']
handler.tags = ['info','main']

handler.command = /^(creator|owner)$/i

export default handler
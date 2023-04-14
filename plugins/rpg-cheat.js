let handler = async (m, { conn }) => {
let info = `
Anjay Nge Cheat Awkwk:v
`
const sections = [
   {
	title: `CHEAT MENU`,
	rows: [
	    {title: "Cheat Money", rowId: '.cheatuang', description: 'Unlimited Money' },
	    {title: "Cheat Exp", rowId: '.cheatexp', description: 'Rawan Error bang' },
	{title: "Cheat Limit", rowId: '.cheatlimit', description: 'Unlimited Limit' },
	{title: "Cheat Level", rowId: '.cheatlevel', description: 'Unlimited Level' },
	{title: "Cheat Anti Pmo", rowId: '.antipmo', description: 'Anti Pmo Bang' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Cheat",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['cheatbot', 'cheat']
handler.tags = ['rpg']
handler.command = /^(cheat(bot)?|cheat)$/i
handler.private = false
handler.owner = false
handler.premium = true

export default handler

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	let text = `
┌─「 𝗗𝗼𝗻𝗮𝘀𝗶 」
│• 𝗼𝘃𝗼/𝗱𝗮𝗻𝗮 = 0823504965329
❏───────────
`;
	const templateButtons = [
		{ index: 1, urlButton: { displayText: "✨ sᴀᴡᴇʀɪᴀ", url: psaweria } },
		{ index: 2, urlButton: { displayText: "📷 ɪɴsᴛᴀɢʀᴀᴍ", url: sig } },
		{ index: 3, urlButton: { displayText: "🌎 ᴏғғɪᴄɪᴀʟ ɢʀᴜᴘ", url: sgc } },
		{ index: 4, quickReplyButton: { displayText: "ᴍᴇɴᴜ", id: ".menu" } },
		{ index: 5, quickReplyButton: { displayText: "ᴏᴡɴᴇʀ", id: ".owner" } },
	];
	let tm = {
		text: text,
		footer: global.wm,
		templateButtons: templateButtons,
		image: { url: thumb },
	};
	conn.sendMessage(m.chat, text, m);
};
handler.command = /^(donasi|dns)$/i;
handler.tags = ["info"];
handler.help = ["donasi"];
handler.premium = false;
handler.limit = false;

export default handler;

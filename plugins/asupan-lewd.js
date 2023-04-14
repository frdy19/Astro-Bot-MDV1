import db from "../lib/database.js";

let handler = async (m, { conn, usedPrefix, command }) => {
	conn.sendButton(
		m.chat,
		"Nih Kak",
		wm,
		`http://storage.itsrose.my.id/lewd/${gr() + ".png"}`,
		["\nJadi Sange :v", `.huuu`],
		m
	);
};
handler.help = ["lewd"];
handler.tags = ["nsfw"];
handler.command = ["lewd"];

handler.limit = true

export default handler;
function gr() {
	return Math.floor(Math.random() * 400) + 10;
}

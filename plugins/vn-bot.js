import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./loli/oy.mp3";
	conn.sendFile(m.chat, vn, "oy.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(bot|tes|p)$/i;
handler.command = new RegExp();

export default handler;

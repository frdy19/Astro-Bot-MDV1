import fetch from "node-fetch";

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let _fail = `Contoh: *${
		usedPrefix + command
	}* jackie chan as neo from matrix, ilustration, highly detailed, artstation`;
	if (!text) throw _fail;
	conn.waifudif = conn.waifudif ? conn.waifudif : {};
	if (m.sender in conn.waifudif)
		throw "Masih Ada Proses Sebelumnya, Silahkan Tunggu Sampai Selesai..";
	else conn.waifudif[m.sender] = true;
	m.reply("_Sedang Di Proses..._");
	try {
		let res = await fetch(
			global.API("rose", "/image/stable/diffusion", { prompt: text }, "apikey")
		);
		let buffer = await res.arrayBuffer();
		conn.sendButton(
			m.chat,
			`Text :\n${text}`,
			global.wm,
			buffer,
			[["Buat Ulang", `${usedPrefix + command} ${text}`]],
			m
		);
	} catch (_error) {
		m.reply("Proses Gagal " + _error);
	} finally {
		if (conn.waifudif[m.sender]) delete conn.waifudif[m.sender];
	}
};
handler.help = ["stabledif","aidraw"];
handler.command = ["stabledif", "aidraw"];
handler.tags = ["ai"];

handler.premium = true

export default handler;

import fetch from "node-fetch";
let handler = async (m, { conn }) => {
	let result = await fetch(global.API("rose", "/dewasa/togel"));
	if (!result) return;
	let res = await result.json();
	if (res.status == false) throw res.message;
	let teks = `*Tanggal :* ${res.result.date}\n\n`;
	for (let i of res.result.results) {
		teks += `*${i.pool}* => *${i.result}*\n`;
	}
	m.reply(teks);
};
handler.help = ["cektogel"];
handler.tags = ["internet"];
handler.command = ["cektogel"];

export default handler;

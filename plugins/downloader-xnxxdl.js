import fetch from "node-fetch";
import axios from "axios";
import db from "../lib/database.js";
import * as fs from "fs";

let handler = async (m, { conn, usedPrefix, args, text, command }) => {
	if (!text || !args[0] || !args) {
		m.reply(`Mau Cari Apa?`);
	} else if (text.startsWith("https://www.xnxx.com/")) {
		m.reply("_Sedang Di Proses, Mohon Tunggu_");
		let res = await fetch(
			global.API("rose", "/dewasa/xnxx/detail", { url: text }, "apikey")
		).then((a) => a.json());
		if (!res.status) throw "Gagal";
		let {
			title,
			duration,
			quality,
			views,
			rating,
			like,
			dislike
		} = res.result;
		let { low, high, hls } = res.result.download;
		try {
			const _filename = `./tmp/${Math.random().toString(36).substring(2, 7)}.mp4`;
			const writer = fs.createWriteStream(_filename);
			axios.get(high ? high : low, {
				responseType: "stream"
			}).then(async(data) => {
				return new Promise(async(resolve, reject) => {
					data.data.pipe(writer);
					writer.on("error", () => {
						m.reply("Gagal Mengambil Video")
						resolve()
					})
					writer.on("close", async() => {
						try {
							await conn.sendMessage(m.chat, {
								video: {
									stream: fs.createReadStream(_filename)
								},
								caption: `*Title :* ${title}\n*Duration :* ${duration}\n*Views :* ${views}\n*Rating :* ${rating}\n*Like :* ${like}\n*Dislike :* ${dislike}\n*Quality :* ${quality}`
							},
								{ quoted: m }
							);
						} catch {
							await conn.sendMessage(m.chat, {
								document: {
									stream: fs.createReadStream(_filename)
								},
								fileName: title + ".mp4",
								mimetype: "video/mp4",
								caption: `*Title :* ${title}\n*Duration :* ${duration}\n*Views :* ${views}\n*Rating :* ${rating}\n*Like :* ${like}\n*Dislike :* ${dislike}\n*Quality :* ${quality}`
							},
								{ quoted: m }
							);
						}
						fs.unlinkSync(_filename)
						resolve()
					})
				})
			})
		} catch {
			m.reply("Gagal Mengirim Video")
		}
	} else {
		m.reply("Mencari.... " + text);
		let res = await fetch(
			global.API("rose", "/dewasa/xnxx/search", { query: text }, "apikey")
		).then((a) => a.json());
		if (res.status == false) throw text + " Tidak Di Temukan";
		const listSection = [];
		res.result.forEach((v) => {
			listSection.push({
				title:  v.title,
				rowId: `${usedPrefix + command} ${v.url}`,
				description: `${v.views} Views | ${v.duration}`,
			});
		})
		const listMsg = {
			text: `\nPencarian Dari ${text}`,
			footer: wm,
			title: `Silahkan Pilih Di Bawah`,
			buttonText: "Touch Here",
			sections: [
				{
					title: `Query: ${text}`,
					rows: listSection,
				},
			],
		};
		conn.sendMessage(m.chat, listMsg, { quoted: m } )
	}
};
handler.help = ["xnxx", "xnxxdl"];
handler.tags = ["downloader","premium"];
handler.command = ["xnxx","xnxxdl"];

handler.premium = true

export default handler;

// try
import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";

let handler = async (m, { conn, command, args, usedPrefix, text }) => {
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || q.mediaType || "";
	if (!mime) throw `Fotonya?`;
	if (!/image\/(jpe?g|png)/.test(mime)) throw `Format ${mime} tidak support`;
	//    let msg = await conn.sendMessage(m.chat, {text: "Proses kak..."}, { quoted: m })
	let img = await q.download?.();
	let upld = await uploadImage(img);
	//
	if (
		/vhs|cyberpunk|memories|flower|smoke|heart|ring|spectrum|painting$/i.test(
			command
		)
	) {
		try {
			let img = await fetch(
				global.API("xcoders", "/api/ephoto/" + command, { url: upld }, "apikey")
			).then((a) => a.buffer());
			conn.sendFile(m.chat, img, "", "Sudah Jadi Kak >,<", m);
		} catch (err) {
			conn.fakeReply(m.chat, `*ERROR !*`, "0@s.whatsapp.net", command);
			conn.sendMessage(
				"6285776353741@s.whatsapp.net",
				{ text: err },
				{ quoted: m }
			);
		}
	} else if (/wanted|diaryframe|advntr$/i.test(command)) {
		let [teks1, teks2] = text.split`|`;
		if (!teks2)
			throw `Reply Foto/Kirim foto dengan caption *${
				usedPrefix + command
			}* teks1|teks2`;
		try {
			if (/wanted$/i.test(command)) command = "wposter";
			if (/aadvntr$/i.test(command)) command = "adventure";
			let img = await fetch(
				global.API(
					"xcoders",
					"/api/ephoto/" + command,
					{ url: upld, text: teks1, text2: teks2 },
					"apikey"
				)
			).then((a) => a.buffer());
			conn.sendFile(m.chat, img, "", "Sudah Jadi Kak >,<", m);
		} catch (err) {
			conn.fakeReply(m.chat, `*ERROR !*`, "0@s.whatsapp.net", command);
			conn.sendMessage(
				"6285776353741@s.whatsapp.net",
				{ text: err },
				{ quoted: m }
			);
		}
	} else if (/flower|glazing$/i.test(command)) {
		if (!text)
			throw `Reply/Kirim foto dengan caption *${usedPrefix + command}* teks`;
		try {
			let img = await fetch(
				global.API(
					"xcoders",
					"/api/ephoto/" + command,
					{ url: upld, text: text },
					"apikey"
				)
			).then((a) => a.buffer());
			conn.sendFile(m.chat, img, "", "Sudah Jadi Kak >,<", m);
		} catch (err) {
			conn.fakeReply(m.chat, `*ERROR !*`, "0@s.whatsapp.net", command);
			conn.sendMessage(
				"6285776353741@s.whatsapp.net",
				{ text: err },
				{ quoted: m }
			);
		}
	} else if (
		/toilet|place|shattered|mirrors|anaglyph|flame|memory|nature|ripped|tearing|exposure|frame$/i.test(
			command
		)
	) {
		try {
			let img = await fetch(
				global.API(
					"xcoders",
					"/api/photooxy/" + command,
					{ url: upld },
					"apikey"
				)
			).then((a) => a.buffer());
			conn.sendFile(m.chat, img, "", "Sudah Jadi Kak >,<", m);
		} catch (err) {
			conn.fakeReply(m.chat, `*ERROR !*`, "0@s.whatsapp.net", command);
			conn.sendMessage(
				global.owner[0] + "@s.whatsapp.net",
				{ text: err },
				{ quoted: m }
			);
		}
	} else if (/brazzer$/i.test(command)) {
		// MAKER WITH TEXT
		try {
			let img = await fetch(
				global.API("xcoders", "/api/maker/brazzers", { url: upld }, "apikey")
			).then((a) => a.buffer());
			conn.sendFile(m.chat, img, "", "Sudah Jadi Kak >,<", m);
		} catch (err) {
			conn.fakeReply(m.chat, `*ERROR !*`, "0@s.whatsapp.net", command);
			conn.sendMessage(
				global.owner[0] + "@s.whatsapp.net",
				{ text: err },
				{ quoted: m }
			);
		}
	} else if (/blur|circle$/i.test(command)) {
		// MAKE
		// NO TEXT
		try {
			let img = await fetch(
				global.API("xcoders", "/api/maker/" + command, { url: upld }, "apikey")
			).then((a) => a.buffer());
			conn.sendFile(m.chat, img, "", "Sudah Jadi Kak >,<", m);
		} catch (err) {
			conn.fakeReply(m.chat, `*ERROR !*`, "0@s.whatsapp.net", command);
			conn.sendMessage(
				global.owner[0] + "@s.whatsapp.net",
				{ text: err },
				{ quoted: m }
			);
		}
	} else if (/resize/i.test(command)) {
		if (!args[1])
			throw `Reply/Kirim gambar dengan caption *${
				usedPrefix + command
			}* [width] [heigth]\ncontoh: *${usedPrefix + command}* 500 100`;
		try {
			let img = await fetch(
				global.API(
					"xcoders",
					"/api/maker/resize",
					{ url: upld, width: args[0], height: args[1] },
					"apikey"
				)
			).then((a) => a.buffer());
			conn.sendFile(m.chat, img, "", "Sudah Jadi Kak >,<", m);
		} catch (err) {
			conn.fakeReply(m.chat, `*ERROR !*`, "0@s.whatsapp.net", command);
			conn.sendMessage(
				global.owner[0] + "@s.whatsapp.net",
				{ text: err },
				{ quoted: m }
			);
		}
	} else if (/darkness/i.test(command)) {
		if (!args || isNaN(args[0])) {
			m.reply(
				`Masukan Parameter amount nya\ncontoh *${usedPrefix + command}* 20`
			);
		} else {
			let img = await fetch(
				global.API(
					"xcoders",
					"/api/maker/darkness",
					{ url: upld, ammount: args[0] },
					"apikey"
				)
			).then((a) => a.buffer());
			conn.sendFile(m.chat, img, "", "Sudah Jadi Kak >,<", m);
		}
	}
	//    await conn.sendMessage(m.chat, { delete: msg.key })
};
handler.help = [
	"advntr",
	"blur",
	"resize",
	"brazzer",
	"vhs",
	"darkness",
	"cyberpunk",
	"memories",
	"flower",
	"smoke",
	"heart",
	"ring",
	"spectrum",
	"wanted",
	"painting",
	"glazing",
	"shattered",
	"burning",
	"place",
	"mirrors",
	"anaglyph",
	"flame",
	"frame",
	"memory",
	"nature",
	"ripped",
	"tearing",
	"exposure",
	"toilet",
	"diaryframe",
	"flaming",
	"oceansea",
	"pubg",
	"shadow",
	"rainbow",
	"gravity",
	"burnpaper",
];
handler.tags = ["textpro"];
handler.command = [
	"advntr",
	"darkness",
	"blur",
	"circle",
	"resize",
	"brazzer",
	"vhs",
	"cyberpunk",
	"memories",
	"flower",
	"smoke",
	"heart",
	"ring",
	"spectrum",
	"wanted",
	"painting",
	"glazing",
	"shattered",
	"burning",
	"place",
	"mirrors",
	"anaglyph",
	"flame",
	"frame",
	"memory",
	"nature",
	"ripped",
	"tearing",
	"exposure",
	"toilet",
	"diaryframe",
	"flaming",
	"oceansea",
	"pubg",
	"shadow",
	"rainbow",
	"gravity",
	"burnpaper",
];
export default handler;

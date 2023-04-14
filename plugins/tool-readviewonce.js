let { downloadContentFromMessage } = await import("@adiwajshing/baileys");

let handler = async (m, { conn }) => {
	if (!m.quoted) throw "where's message?";
	if (m.quoted.mtype !== "viewOnceMessageV2") throw "Itu bukan pesan viewOnce";
	const buffer = await m.quoted.download?.();
	const media = m.quoted.mediaMessage[m.quoted.mediaType];
	console.log(media);
	conn.sendFile(
		m.chat,
		buffer,
		/video/.test(media.mimetype) ? "video.mp4" : "image.jpg",
		media.caption || "",
		m
	);
};

handler.help = ["readviewonce"];
handler.tags = ["tools"];
handler.command = /^readviewonce/i;
handler.limit = true
export default handler;

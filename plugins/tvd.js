

*/*const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {
Asena.addCommand({ pattern: 'tvd ?(.*)', fromMe: true, desc: "tiktok video downloder." }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a link.```', MessageType.text, { quoted: message.data });
	let url = `https://docs-jojo.herokuapp.com/api/tiktok_wm?url=${match[1]}`
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
	let video = 'json.result';
	let vid = await axios.get({video},{ responseType: 'arraybuffer' })
	await message.sendMessage(Buffer.from(vid.data), MessageType.video,{ mimetype: Mimetype.mp4, caption: '🚀Made by X-Troid ☄️' })
}));
}
*/*

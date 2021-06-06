  
const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');

Asena.addCommand({ pattern: '. ?(.*)', fromMe: true,  }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Ask some thing.```', MessageType.text, { quoted: message.data });
	let url = `http://api.brainshop.ai/get?bid=156774&key=Il1vWd2F7AHZPalZ&uid=[uid]&msg=${match[1]}`
	const response = await got(url);
	const json = JSON.parse(response.body);
	let msg = '```';
	msg += 'jj' + json.cnt + '```';
	await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
}));

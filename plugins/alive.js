const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'alive', fromMe: true, deleteCommand: true,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/eae11a10fe0d71b59e8ef.jpg";

var respoimage = await axios.get(`${r_text[1]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '      *Quinn lเzค* \n     *Privert Assistant*\n\n*Hosted*  • ๛ ```Aws```\n*Version*  • ๛ ```'+Config.VERSION+'```\n*Branch*  • ๛ ```'+Config.BRANCH+'```\n*Dev*  • ๛ ```t.me/lasi99X```\n*About*  • ๛ ```lasiya.ml```\n*Moderator*\n```t.me/SLPlaygames_Owner```\n\n*Main Group*\nhttps://t.me/danuma01'})
    }));
}
else if (Config.WORKTYPE == 'public') {
	
	Asena.addCommand({pattern: 'alive', fromMe: true, deleteCommand: false,}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/eae11a10fe0d71b59e8ef.jpg";

var respoimage = await axios.get(`${r_text[1]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '      *Quinn lเzค* \n     *Privert Assistant*\n\n*Hosted*  • ๛ ```Aws```\n*Version*  • ๛ ```'+Config.VERSION+'```\n*Branch*  • ๛ ```'+Config.BRANCH+'```\n*Dev*  • ๛ ```t.me/lasi99X```\n*About*  • ๛ ```lasiya.ml```\n*Moderator*\n```t.me/SLPlaygames_Owner```\n\n*Main Group*\nhttps://t.me/danuma01'})
    }));
}
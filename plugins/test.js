/* Codded by @lasiya99X
Telegram: t.me/lasiya99X
Instagram: www.instagram.com/kyrie.baran
*/


const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'test ?(.*)', fromMe: true, desc: Lang.GLOW_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var timg = await axios.get(`https://telegra.ph/file/dcfe3d1918f2a9e9137c1.jpg`)

        await message.sendMessage(Buffer.from(timg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by X-Troid 🛸' })

    }));
    
}
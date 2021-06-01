const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');

Asena.addCommand({ pattern: 'll ?(.*)', fromMe: true, desc: Lang.SKY_DESC }, (async (message, match) => {

    if (match[1] === '') {
        try{
            const respo = await got(`https://ttpxc.herokuapp.com/api/textmaker?text=${match[1]}`).then(async ok  => {
                resp = JSON.parse(ok.body);
            }

    var ttinullimage = await axios.get(resp.results, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by X-Troid ☄️' })

    }
});

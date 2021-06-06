const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const axios = require('axios');
const gg = "ask some thing"

Asena.addCommand({ pattern: '.. ?(.*)', fromMe: true, deleteCommand: false,}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(gg);
    await axios.get(`http://api.brainshop.ai/get?bid=156774&key=Il1vWd2F7AHZPalZ&uid=[uid]&msg=${encodeURIComponent(match[1])}`).then(async (res) => {
        await message.sendMessage({res.cnt}, MessageType.text,)
    })
}));

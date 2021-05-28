/*
# Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const gg = "need word"




      Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: true, }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(gg);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/facebook2?apikey=264702c251ae9c86e4673dab&url=${match[1]}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.video, { mimetype: Mimetype.mp4, caption: '🚀Made by X-Troid ☄️' })

    }));

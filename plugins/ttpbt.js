/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved Â©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');



if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'zbt ?(.*)', fromMe: true, deleteCommand: false, }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage();

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${encodeURIComponent(match[1])}&text2=X-Troid`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by X-Troid ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'zbt ?(.*)', fromMe: false,deleteCommand: false, }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage();

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${encodeURIComponent(match[1])}&text2=X-Troid`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by X-Troid ☄️' })

    }));
    
}

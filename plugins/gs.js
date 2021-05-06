/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Gs = "Search on Google from lasiya.ml"

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'gs ?(.*)', fromMe: true,deleteCommand: false, desc: Gs}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'```You must enter what you want to search for!```', MessageType.text);
 
    Sea.google(`${match[1]}`).then(async(result) => {
        
        await message.client.sendMessage(message.jid,result[0], MessageType.text);
      });
  }));
}

else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'gs ?(.*)', fromMe: false, deleteCommand: false, desc: Gs}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'```You must enter what you want to search for!```', MessageType.text);
 
    Sea.google(`${match[1]}`).then(async(result) => {
        
        await message.client.sendMessage(message.jid,result[0], MessageType.text);
      });
  }));
}
/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'*The X-Troid* \n ```🇱🇰 Exclusively From Danuma🏅```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Hosted in:* ```AWS```\n*About Dev:* lasiya.ml\n*Telegram Group:*\n https://t.me/danuma01\n*Telegram Channel:*\n https://t.me/danumabots' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by @danumabots*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'*The X-Troid* \n ```🇱🇰 Exclusively From Danuma🏅```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Hosted in:* ```AWS```\n*About Dev:* lasiya.ml\n*Telegram Group:*\n https://t.me/danuma01\n*Telegram Channel:*\n https://t.me/danumabots' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by WhatsAsena*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}

/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const Config = require('../config');

Asena.addCommand({pattern: 'ping', fromMe: true, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {  var start = new Date().getTime();
  var msg = await message.reply('```➣Runing➣```');
  var end = new Date().getTime();

  await msg.delete();
  await message.client.sendMessage(
    message.jid,'*Pong!*\n⠀⠀⠀⣀⣴⣶⠾⠿⠿⣶⣦⣄⠀⠀⠀\n⠀⢠⣾⠟⠉⠀⠀⠀⠀⠀⠈⠻⣷⡄⠀\n⢠⣿⠃⠀⣴⣶⠀⠀⠀⠀⠀⠀⠈⢿⡆\n⣼⡇⠀⠀⣿⣿⠁⠀⠀⠀⠀⠀⠀⢸⣿\n⢻⡇⠀⠀⠈⢻⣦⣀⢀⣤⣄⠀⠀⢸⣿\n⠘⣿⡄⠀⠀⠀⠈⠻⠿⣿⠿⠀⢀⣾⠇\n⠀⣿⠃⣀⡀⠀⠀⠀⠀⠀⢀⣴⡿⠃⠀\n⣸⠿⠟⠛⠻⠿⣶⣶⣶⠿⠟⠋⠀⠀⠀\n*Working perfectly*\n```' + (end - start) + 'ms```', MessageType.text);
}));

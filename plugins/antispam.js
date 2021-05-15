const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');

const code = ('🅰\n🅽\n🆃\n🅸\n🆂\n🅿\n🅼\n𓊈\nf\nr\no\nm\n*D*\n*A*\n*N*\n*U*\n*M*\n*A*\n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n𓊈\n🅰\n🅽\n🆃\n🅸\n🆂\n🅿\n🅼\n𓊈\nf\nr\no\nm\n*D*\n*A*\n*N*\n*U*\n*M*\n*A*\n𓊈')

Asena.addCommand({pattern: 'antispm', fromMe: true, deleteCommand: false,}, (async (message, match) => {

  var msg = await message.reply('```generating...```');

  await msg.delete();

  await message.client.sendMessage(

    message.jid,code, MessageType.text);

}));

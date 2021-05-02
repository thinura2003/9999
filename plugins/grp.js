const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');

Asena.addCommand({pattern: 'grp', fromMe: true, deleteCommand: false,}, (async (message, match) => {

  var msg = await message.reply('```wait...```');

  await msg.delete();

  await message.client.sendMessage(

    message.jid,'*✔️Groups List📃* \n\n දැනුම Admin Only දැනුම Telegram👉 💠 Main Group https://t.me/danuma01 උසස් පෙල සවිය 📊 http://t.me/alxams සාමාන්‍ය පෙල සවිය 🔍 http://t.me/olxams \nPro Apps 📱 \nhttp://t.me/danuma \nFilm Store 🎬 \nhttp://t.me/films_SL_x \nBot Project 🤖 \nhttp://t.me/Dbotai \nදැනුම blog👉 \nhttps://danumagroup.blogspot.com/?m=1 \n📚 දැනුම පොත් Web Site එක \nhttps://danuma.danuma.workers.dev/ \n💡දැනුම 📚සමූහය  \nGroup 10 \nhttps://chat.whatsapp.com/HJP8Nya6bubLlyowDvdVYY \nGroup 9 \nhttps://chat.whatsapp.com/IT92AiIBHHD1i1EMhvlTQD \nGroup 8  \nhttps://chat.whatsapp.com/Brn9KwB4vf29PFvvV2LV4x \nGroup 7 \nhttps://chat.whatsapp.com/DMhkJIM1NCm8Nsh5iBeNaF \nGroup 6 \nhttps://chat.whatsapp.com/GsqFiZpJhC61zOIwmyrTD0 \ngroup 5 \nhttps://chat.whatsapp.com/FaPZBiAK37Y2my4RenHm5K \ngroup 4 \nhttps://chat.whatsapp.com/DJzGuFUOXZOFRlG6APWR6a \ngroup 3 \nhttps://chat.whatsapp.com/DjG7hi3kL7mCzP9UwRe38m \ngroup 2 \nhttps://chat.whatsapp.com/Le60XJtUJMK1zZBwyJfstu \ngroup 1 \nhttps://chat.whatsapp.com/JVEdzU42Qmw3KsOkBApTOM', MessageType.text);

}));

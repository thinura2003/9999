
/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const Glang = 'test'





Asena.addCommand({ pattern: 'lasi ?(.*)', fromMe: true, }, async (message, match) => {

    const userName = match[1]

    if (userName === '') return await message.client.sendMessage(message.jid, Glang, MessageType.text)

    await axios
      .get(`https://ttpxc.herokuapp.com/api/textmaker?text=${userName}`)
      .then(async (response) => {

        const {
            results,
        } = response.data.result

        const githubscrap = await axios.get(results, 
          {responseType: 'arraybuffer',
        })

        const msg = `hello`

        await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, Glang, MessageType.text),
      )
  },
)

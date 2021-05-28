/*
# Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const cn = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')



    Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: true, }, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, MessageType.text)

        await message.client.sendMessage(message.jid, MessageType.text)

        await axios
          .get(`https://api.lolhuman.xyz/api/facebook2?apikey=264702c251ae9c86e4673dab&url=${userName}&APIKEY=ab9942f95c09ca89`)
          .then(async (response) => {
            const {
              server_1,
            } = response.data

            const profileBuffer = await axios.get(server_1, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: 'Made by X-Troid',
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid,userName, MessageType.text),
          )
      },
    )

/* # Exclusively from danuma project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ©Lasiya @lasiya99X t.me/lasiya99X
# Get more about devaoloper https://lasiya.ml
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const dd = "To make awesome logos"
const ddd = "ඔබට විවිධාකාරයේ ලෝගෝ සෑදීමට"


if (Config.WORKTYPE == 'private') {
  if (Config.LANG == 'EN') {

    Asena.addCommand({pattern: 'zpack', fromMe: true, desc: dd }, (async (message, match) => {    

                await message.sendMessage('╔════════════════════╗\n║  ✥▬ *❄️The Logo list❄️* ▬✥\n║\n║\n╠══ *.zglow* ```your text```\n║\n╠══ *.znsky* ```your text```\n║\n╠══ *.zb3d* ```your text```\n║\n╠══ *.zbeach* ```your text```\n║\n╠══ *.zcrash* ```your text```\n║\n╠══ *.zff* ```your text```\n║\n╠══ *.zfire* ```your text```\n║\n╠══ *.zglass* ```your text```\n║\n╠══ *.zgoldp* ```your text```\n║\n╠══ *.zgrass* ```your text```\n║\n╠══ *.zmatrix* ```your text```\n║\n╠══ *.zphub* ```your text```\n║\n╠══ *.zpro* ```your text```\n║\n╠══ *.zsilver* ```your text```\n║\n╠══ *.zthunder* ```your text```\n║\n╠══ *.zwolf* ```your text```\n║\n╠══ *.zneon* ```your text```\n║\n╠══ *.zsp* ```your text```\n║\n╠══ *.zttok* ```your text```\n║\n╠══ *.zwtc* ```your text```\n║\n╠══ *.z3d* ```your text```\n║\n╠══ *.zgame* ```your text```\n║\n╠══ *.zlogo* ```your text```\n║\n╚════════════════════╝\nමෙහි කුමක් හෝ වැඩ නොකරන්නේද\nඑය අපගේ ගැටළුවක් නොව\n සේවාව ලබාදෙන වෙබ් පිටුවෙහි ගැටලුවකි.\nකරුණාකර ඉංග්‍රීසි අකුරු පමණක් යොදාගෙන logo සකසන්න\n');

    }));
  }
    if (Config.LANG == 'SI') {

    Asena.addCommand({pattern: 'zpack', fromMe: true, desc: ddd }, (async (message, match) => {    

        await message.sendMessage('╔════════════════════╗\n║  ✥▬ *❄️The Logo list❄️* ▬✥\n║\n║\n╠══ *.zglow* ```your text```\n║\n╠══ *.znsky* ```your text```\n║\n╠══ *.zb3d* ```your text```\n║\n╠══ *.zbeach* ```your text```\n║\n╠══ *.zcrash* ```your text```\n║\n╠══ *.zff* ```your text```\n║\n╠══ *.zfire* ```your text```\n║\n╠══ *.zglass* ```your text```\n║\n╠══ *.zgoldp* ```your text```\n║\n╠══ *.zgrass* ```your text```\n║\n╠══ *.zmatrix* ```your text```\n║\n╠══ *.zphub* ```your text```\n║\n╠══ *.zpro* ```your text```\n║\n╠══ *.zsilver* ```your text```\n║\n╠══ *.zthunder* ```your text```\n║\n╠══ *.zwolf* ```your text```\n║\n╠══ *.zneon* ```your text```\n║\n╠══ *.zsp* ```your text```\n║\n╠══ *.zttok* ```your text```\n║\n╠══ *.zwtc* ```your text```\n║\n╠══ *.z3d* ```your text```\n║\n╠══ *.zgame* ```your text```\n║\n╠══ *.zlogo* ```your text```\n║\n╚════════════════════╝\nමෙහි කුමක් හෝ වැඩ නොකරන්නේද\nඑය අපගේ ගැටළුවක් නොව\n සේවාව ලබාදෙන වෙබ් පිටුවෙහි ගැටලුවකි.\nකරුණාකර ඉංග්‍රීසි අකුරු පමණක් යොදාගෙන logo සකසන්න\n');

    }));
  }
}
else if (Config.WORKTYPE == 'public') {
  if (Config.LANG == 'EN') {

    Asena.addCommand({pattern: 'zpack', fromMe: false, desc: dd}, (async (message, match) => {    

        await message.sendMessage('╔════════════════════╗\n║  ✥▬ *❄️The Logo list❄️* ▬✥\n║\n║\n╠══ *.zglow* ```your text```\n║\n╠══ *.znsky* ```your text```\n║\n╠══ *.zb3d* ```your text```\n║\n╠══ *.zbeach* ```your text```\n║\n╠══ *.zcrash* ```your text```\n║\n╠══ *.zff* ```your text```\n║\n╠══ *.zfire* ```your text```\n║\n╠══ *.zglass* ```your text```\n║\n╠══ *.zgoldp* ```your text```\n║\n╠══ *.zgrass* ```your text```\n║\n╠══ *.zmatrix* ```your text```\n║\n╠══ *.zphub* ```your text```\n║\n╠══ *.zpro* ```your text```\n║\n╠══ *.zsilver* ```your text```\n║\n╠══ *.zthunder* ```your text```\n║\n╠══ *.zwolf* ```your text```\n║\n╠══ *.zneon* ```your text```\n║\n╠══ *.zsp* ```your text```\n║\n╠══ *.zttok* ```your text```\n║\n╠══ *.zwtc* ```your text```\n║\n╠══ *.z3d* ```your text```\n║\n╠══ *.zgame* ```your text```\n║\n╠══ *.zlogo* ```your text```\n║\n╚════════════════════╝\nමෙහි කුමක් හෝ වැඩ නොකරන්නේද\nඑය අපගේ ගැටළුවක් නොව\n සේවාව ලබාදෙන වෙබ් පිටුවෙහි ගැටලුවකි.\nකරුණාකර ඉංග්‍රීසි අකුරු පමණක් යොදාගෙන logo සකසන්න\n');

    }));
  }
    if (Config.LANG == 'SI') {

    Asena.addCommand({pattern: 'zpack', fromMe: false, desc: ddd }, (async (message, match) => {    

        await message.sendMessage('╔════════════════════╗\n║  ✥▬ *❄️The Logo list❄️* ▬✥\n║\n║\n╠══ *.zglow* ```your text```\n║\n╠══ *.znsky* ```your text```\n║\n╠══ *.zb3d* ```your text```\n║\n╠══ *.zbeach* ```your text```\n║\n╠══ *.zcrash* ```your text```\n║\n╠══ *.zff* ```your text```\n║\n╠══ *.zfire* ```your text```\n║\n╠══ *.zglass* ```your text```\n║\n╠══ *.zgoldp* ```your text```\n║\n╠══ *.zgrass* ```your text```\n║\n╠══ *.zmatrix* ```your text```\n║\n╠══ *.zphub* ```your text```\n║\n╠══ *.zpro* ```your text```\n║\n╠══ *.zsilver* ```your text```\n║\n╠══ *.zthunder* ```your text```\n║\n╠══ *.zwolf* ```your text```\n║\n╠══ *.zneon* ```your text```\n║\n╠══ *.zsp* ```your text```\n║\n╠══ *.zttok* ```your text```\n║\n╠══ *.zwtc* ```your text```\n║\n╠══ *.z3d* ```your text```\n║\n╠══ *.zgame* ```your text```\n║\n╠══ *.zlogo* ```your text```\n║\n╚════════════════════╝\nමෙහි කුමක් හෝ වැඩ නොකරන්නේද\nඑය අපගේ ගැටළුවක් නොව\n සේවාව ලබාදෙන වෙබ් පිටුවෙහි ගැටලුවකි.\nකරුණාකර ඉංග්‍රීසි අකුරු පමණක් යොදාගෙන logo සකසන්න\n');

    }));
  }
}
 
try {
const {
canModifyQueue,
ʙᴏᴛꜰɪx,
ɴᴏɪʀᴄʟᴇᴀɴᴇʀ,
} = require("../noirtem/noir_env");
const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ/src");
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// 💜Noir
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
module.exports = {
name: "vol",
cooldown: 3,




execute(message, args) {
if (
message.content.startsWith(ʙᴏᴛꜰɪx + "vol") &&
message.channel.name !== "💜noir"
) {
message.react("❌");
message.react("🔥");
const embedfactor = new MessageEmbed()
.setColor("#E0D268")
.setTitle("⚠️Warning⚠️")
.setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
.setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
.setDescription(
`
**User:** ${message.author}
=========:radio_button:=========

**Channel:** \`💜Noir\`
*Please use 👆🏻 channel for any* **ɴᴏɪʀ** *commands.*`
);
message.channel.send(embedfactor).catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
// });
// });
return;
}




if (
message.content.startsWith(ʙᴏᴛꜰɪx + "vol") &&
message.channel.name === "💜noir"
) {
const queue = message.client.queue.get(message.guild.id);
if (!queue) {
const embedskp2 = new MessageEmbed()
.setColor("#E0D268")
.setTitle("⚠️Warning⚠️")
.setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
.setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
.setDescription(
`
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`
);
message.react("❌");
message.react("🔥");
message.channel.send(embedskp2).catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
// });
// });
return;
}




if (!canModifyQueue(message.member)) {
const embedvol1 = new MessageEmbed()
.setColor("#E0D268")
.setTitle("⚠️Warning⚠️")
.setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
.setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
.setDescription(
`
**User:** ${message.author}
=========:radio_button:=========

*You need to* **join** *a voice channel first!*`
);
message.react("❌");
message.react("🔥");
message.channel.send(embedvol1).catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
// });
// });
return;
}




if (!args[0]) {
const embedvol2 = new MessageEmbed()
.setColor("#E0D268")
.setTitle("⚠️Warning⚠️")
.setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
.setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
.setDescription(
`
**User:** ${message.author}
=========:radio_button:=========

🔊 **The current volume is:** ${queue.volume}%`
);
message.react("❌");
message.react("🔥");
message.channel.send(embedvol2).catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
// });
// });
return;
}




if (isNaN(args[0])) {
const embedvol3 = new MessageEmbed()
.setColor("#E0D268")
.setTitle("⚠️Warning⚠️")
.setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
.setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
.setDescription(
`
**User:** ${message.author}
=========:radio_button:=========

Please use a number to set volume.`
);
message.react("❌");
message.react("🔥");
message.channel.send(embedvol3).catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
// });
// });
return;
}




if (Number(args[0]) > 100 || Number(args[0]) < 0) {
const embedvol4 = new MessageEmbed()
.setColor("#E0D268")
.setTitle("⚠️Warning⚠️")
.setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
.setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
.setDescription(`
**User:** ${message.author}
=========:radio_button:=========

Please use a number between 0 - 100."`);
message.react("❌");
message.react("🔥");
message.channel.send(embedvol4).catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
// });
// });
return;
}




queue.volume = args[0];
queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
message.react("✅");
message.react("🍧");
queue.textChannel
.send(
new MessageEmbed()
.setColor("#6272a4")
.setAuthor(`💜Nօɨʀ-ɮʏ-ӄʀǟӄɨռʐ💜`)
.setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
.setDescription(`**User:** ${message.author}
=========:radio_button:=========

Volume set to: **${args[0]}%**`)
)
.catch(console.error);
// .then((message) => {
// message.delete({
// timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
// });
// });
return;
}
},
};
} catch (ErrorNoir) {
const ErrorInNoir = new MessageEmbed()
.setColor("#DB4434")
.setTitle("🔺ERROR CAUGHT🔻")
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 ӄʀǟӄɨռʐ & ӄʀǟӄɨռʐʟǟɮ")
.setThumbnail("https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg")
.setDescription(`
**Noir** has encountered an error.

Please either report to **https://discord.gg/ucPpXWFK**  in discord channel
or
Report to **@hypevoids** in telegram group


**🔺Error Caught🔻**
*${ErrorNoir}*`);
message.channel.send(ErrorInNoir);
console.error(ErrorNoir);
}

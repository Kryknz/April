const { AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
module.exports = {
name: "pfp",
cooldown: 8,
execute(message) {
try {
if (message.author.bot) {
return;
}
if (
message.content.startsWith(AքʀɨʟʄɨӼ + "pfp") &&
message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
) {
message.react("❌");
const embedfactor = new MessageEmbed()
.setColor("#bc8a59")
.setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
.setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
.setURL("https://github.com/Krakinz?tab=repositories")
// .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription(
`❣️\`User\`${message.author} |⚠️Please use \`Channel: Aքʀɨʟ❣️ʍʊֆɨƈ\` for any **ᴀᴘʀɪʟ** commands.`
);
message.channel
.send(embedfactor)
.catch(console.error)
// .then((message) => {
// try {
// message.delete({
// timeout: `${Aքʀɨʟքʊʀɢɛʀ}`,
// });
// } catch (err) {
// console.log(err);
// }
// });
return;
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
if (
message.content.startsWith(AքʀɨʟʄɨӼ + "pfp") &&
message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
) {
message.react("✅");
const user = message.mentions.users.first();
if (!message.mentions.users.first()) {
return message.channel.send(
new MessageEmbed()
.setColor("#ff0011")
.setURL("https://github.com/Krakinz?tab=repositories")
.setImage(message.author.displayAvatarURL())
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription("🔥This is **your** Profile Picture")
// .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
);
} else {
return message.channel.send(
new MessageEmbed()
.setColor("#ff0011")
.setURL("https://github.com/Krakinz?tab=repositories")
.setImage(user.displayAvatarURL())
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setDescription("🔥This is **your** Profile Picture")
// .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
);
}
}
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
} catch (ErrorApril) {
message.client.channels.cache
.get("894958787792871475")
.send(
new MessageEmbed()
.setColor("#FFC300")
.setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
.setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
.setImage(`https://i.postimg.cc/5tgjvj1y/A.png`)
// .setThumbnail(`https://i.postimg.cc/NGn094BR/A-M.gif`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️").setDescription(`
**Dear 🔱KRAKINZ🔱 There has been an Error in a GUILD.**

**Error report:**
*${ErrorApril}*`)
)
.catch(console.error);
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
message.channel.send(
new MessageEmbed()
.setColor("#ef4567")
.setAuthor("Error🔺Caught")
.setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
.setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
.setThumbnail("https://i.postimg.cc/5tgjvj1y/A.png")
.setDescription(`**Aքʀɨʟ❣️ʍʊֆɨƈ** has encountered an error.

Please report to either 
🔰**In Discord channel** = https://discord.gg/ucPpXWFK
or
🔰**In telegram group** = https://t.me/Krakns

**Error🔻Caught**
*${ErrorApril}*`)
);
console.error(ErrorApril);
}
},
};

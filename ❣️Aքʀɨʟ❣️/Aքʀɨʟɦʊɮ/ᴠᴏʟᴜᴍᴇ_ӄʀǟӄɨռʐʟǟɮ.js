const { canModifyQueue, AքʀɨʟʄɨӼ, Aքʀɨʟքʊʀɢɛʀ } = require("../Aքʀɨʟռɛʋ/ʟᴏᴀᴅᴇʀ");
const { MessageEmbed } = require("../ӄʀǟӄɨռʐʟǟɮ/src");
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
`|>                         GNU GENERAL PUBLIC LICENSE 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁                       |<`;
// ====================================================—••÷[Aքʀɨʟ❣️ʍʊֆɨƈ™]÷••—====================================================
module.exports = {
  name: "vol",
  cooldown: 3,
  execute(message, args) {
    try {
      if (message.author.bot) {
        return;
      }
      if (
        message.content.startsWith(AքʀɨʟʄɨӼ + "vol") &&
        message.channel.name !== "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        message.react("❌");

        message.channel
          .send(
            new MessageEmbed()
              .setColor("#bc8a59")
              .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
              .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
              .setDescription(
                `❣️\`User\`${message.author} |⚠️Please use \`Channel: Aքʀɨʟ❣️ʍʊֆɨƈ\` for any **ᴀᴘʀɪʟ** commands.`
              )
          )
          .catch(console.error);
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
        message.content.startsWith(AքʀɨʟʄɨӼ + "vol") &&
        message.channel.name === "ᴀᴘʀɪʟ💖ᴍᴜꜱɪᴄ"
      ) {
        const queue = message.client.queue.get(message.guild.id);
        if (!queue) {
          message.react("❌");

          message.channel
            .send(
              new MessageEmbed()
                .setColor("#bc8a59")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️\`User\`${message.author}
*You need to* **join** *a voice channel first!*`)
            )
            .catch(console.error);
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
        if (!canModifyQueue(message.member)) {
          message.react("❌");

          message.channel
            .send(
              new MessageEmbed()
                .setColor("#bc8a59")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️\`User\`${message.author}
*You need to* **join** *a voice channel first!*`)
            )
            .catch(console.error);
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
        if (!args[0]) {
          message.react("❌");

          message.channel
            .send(
              new MessageEmbed()
                .setColor("#bc8a59")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️\`User\`${message.author}
🔊 **The current volume is:** ${queue.volume}%`)
            )
            .catch(console.error);
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
        if (isNaN(args[0])) {
          message.react("❌");

          message.channel
            .send(
              new MessageEmbed()
                .setColor("#bc8a59")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️\`User\`${message.author}
Please use a number to set volume.`)
            )
            .catch(console.error);
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
        if (Number(args[0]) > 100 || Number(args[0]) < 0) {
          message.react("❌");

          message.channel
            .send(
              new MessageEmbed()
                .setColor("#bc8a59")
                .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
                .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
                .setURL("https://github.com/Krakinz?tab=repositories")
                // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
                .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
                .setDescription(`❣️\`User\`${message.author}
Please use a number between 0 - 100.`)
            )
            .catch(console.error);
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
        queue.volume = args[0];
        queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

        message.react("✅");
        queue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#ff0011")
              .setTitle(`⚠️ᴡᴀʀɴɪɴɢ!`)
              .setAuthor(`ÄþRÌL❣️MÚ§ÌÇ`)
              .setURL("https://github.com/Krakinz?tab=repositories")
              // .setThumbnail(`https://i.postimg.cc/5tgjvj1y/A.png`)
              .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(c)KrakinzLab™️")
              .setDescription(`❣️\`User\`${message.author}
Volume set to: **${args[0]}%**`)
          )
          .catch(console.error);
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
    } catch (ErrorApril) {
      message.Aքʀɨʟʍʊֆɨƈ.channels.cache
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

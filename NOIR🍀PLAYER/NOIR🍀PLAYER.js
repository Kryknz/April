CH =`~~~~~~~~~~~~~~~~~~~~~~~>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <~~~~~~~~~~~~~~~~~~~~~~~`;
console.clear();
const os = require("os");
require("dotenv").config();
const { join } = require("path");
const express = require("express");
const { readdirSync } = require("fs");
const { Client, Collection } = require("./VoidKrate.js");
const { ɴᴏɪʀᴇꜱ, ʙᴏᴛꜰɪx, ɴᴏɪʀᴄʟᴇᴀɴᴇʀ } = require("./noirtem/noir_env.js");
const ռօɨʀքʟǟʏɛʀ = new Client({
  disableMentions: "everyone",
  restTimeOffset: 0,
});
const ռօɨʀֆɛʀʋɛʀ = express();
const PORT = process.env.PORT || 3000;
// ==================================================================
// ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
// ==================================================================
ռօɨʀֆɛʀʋɛʀ.listen(PORT);
ռօɨʀքʟǟʏɛʀ.login(ɴᴏɪʀᴇꜱ);
ռօɨʀքʟǟʏɛʀ.prefix = ʙᴏᴛꜰɪx;
ռօɨʀքʟǟʏɛʀ.queue = new Map();
ռօɨʀքʟǟʏɛʀ.commands = new Collection();
// ==================================================================
// ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
// ==================================================================
const NoirEngineOil = new Collection();
const { MessageEmbed } = require("./VoidKrate.js");
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const commandFiles = readdirSync(join(__dirname, "noirhub")).filter((file) =>
  file.endsWith("_ɴᴏɪʀᴇʟᴍx.js")
);
for (const file of commandFiles) {
  const command = require(join(__dirname, "noirhub", `${file}`));
  ռօɨʀքʟǟʏɛʀ.commands.set(command.name, command);
}
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🍀player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
ռօɨʀքʟǟʏɛʀ.on("ready", () => {
  ռօɨʀքʟǟʏɛʀ.user.setActivity(`${ʙᴏᴛꜰɪx}noir/play/help🦋`, {
    type: "WATCHING",
  });
  console.log(`
${CH}
|••••🍀    Bot-Name: ${ռօɨʀքʟǟʏɛʀ.user.username}
|••••🍀    Bot-Os: ${os.platform().toUpperCase()}
|••••🍀    Bot-Port: ${PORT}
~~~~~~~~~~~~~~~~~~~~~~~>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <~~~~~~~~~~~~~~~~~~~~~~~
${LIC}
${CH}`);
});
// ==================================================================
// ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
// ==================================================================
ռօɨʀքʟǟʏɛʀ.on("warn", (ɴᴏɪʀ_WARN) => console.log(ɴᴏɪʀ_WARN));
// ==================================================================
// ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
// ==================================================================
ռօɨʀքʟǟʏɛʀ.on("error", console.error);
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🍀player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
ռօɨʀքʟǟʏɛʀ.on(`guildCreate`, (guild) => {
  const channel = guild.channels.cache.find(
    (channel) =>
      channel.type === `text` &&
      channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
  );
  const embedThanks = new MessageEmbed()
    .setColor("#32CD32")
    .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
    .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
    .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
    .setFooter("𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
    .setDescription(
      `\n\n
❤️‍🔥 **Hey there MUSIC lovers !**
I got you all covered with direct music streaming from ʏᴏᴜᴛᴜʙᴇ to discord voice channel.
Please use the channel **noir🍀player** for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands.


:candy:**ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ** 
Please user ${ʙᴏᴛꜰɪx}noir/play/help🦋 to know more_

---------------------|🔺|---------------------
:star:**ɴᴏᴛᴇ to ᴏᴡɴᴇʀ ᴀɴᴅ ᴍᴏᴅᴇʀꜱ**
🎃**VERY VERY IMPORTANT**
Please use **!calib** once to calibrate before first use!`
    );
  channel.send(embedThanks).catch(console.error);
  return;
});
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🍀player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
ռօɨʀքʟǟʏɛʀ.on("message", async (message) => {
  if (message.author.bot) return;
  // ==================================================================
  // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
  // ==================================================================
  if (!message.guild) return;
  // ==================================================================
  // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
  // ==================================================================
  if (message.content.startsWith(ʙᴏᴛꜰɪx + `calib`)) {
    if (message.guild.me.hasPermission(`MANAGE_CHANNELS`)) {
      const embedcheck1 = new MessageEmbed()
        .setColor("#32CD32")
        .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setFooter("𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
        .setDescription(
          `\n\n
𝗗𝗲𝗮𝗿 **ADMIN** 
=============:radio_button:=============

ᴀ channel ɴᴀᴍᴇ noir🍀player has been successfully created.
Please use the channel for any ɴᴏɪʀ🍀ᴘʟᴀʏᴇʀ commands..`
        );
      message.channel.send(embedcheck1).catch(console.error);
      message.guild.channels.create("noir🍀player", {
        type: "GUILD_TEXT",
        permissionOverwrites: [
          {
            id: message.guild.roles.everyone,
          },
        ],
      });
      console.log(`•🦋noir🍀player🦋 ©️• has been successfully created.`);
    } else {
      const embedcheck2 = new MessageEmbed()
        .setColor("#32CD32")
        .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setFooter("𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
        .setDescription(
          `\n\n
𝗗𝗲𝗮𝗿 **ADMIN** 
=============:radio_button:=============

•|  _ᴀ channel ɴᴀᴍᴇ noir🍀player could not be created._
•|  𝗣𝗹𝗲𝗮𝘀𝗲 𝗴𝗶𝘃𝗲 𝗺𝗲 𝘁𝗵𝗲𝘀𝗲 𝗽𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻𝘀:
=𝘔𝘢𝘯𝘢𝘨𝘦𝘊𝘩𝘢𝘯𝘯𝘦𝘭
=𝘚𝘦𝘯𝘥𝘔𝘦𝘴𝘴𝘢𝘨𝘦𝘴
=𝘈𝘵𝘵𝘢𝘤𝘩𝘔𝘦𝘥𝘪𝘢
=𝘌𝘮𝘣𝘦𝘥𝘴`
        );
      message.channel.send(embedcheck2).catch(console.error);
      console.log(`•🦋noir🍀player🦋 ©️• could not be created.`);
      return;
    }
  }
  // ==================================================================
  // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
  // ==================================================================
  const prefixRegex = new RegExp(
    `^(<@!?${ռօɨʀքʟǟʏɛʀ.user.id}>|${escapeRegex(ʙᴏᴛꜰɪx)})\\s*`
  );
  // ==================================================================
  // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
  // ==================================================================
  if (!prefixRegex.test(message.content)) {
    return;
  }
  // ==================================================================
  // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
  // ==================================================================
  const [matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    ռօɨʀքʟǟʏɛʀ.commands.get(commandName) ||
    ռօɨʀքʟǟʏɛʀ.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );
  // ==================================================================
  // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
  // ==================================================================
  if (!command) {
    return;
  }
  if (!NoirEngineOil.has(command.name)) {
    NoirEngineOil.set(command.name, new Collection());
  }
  // ==================================================================
  // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
  // ==================================================================
  const now = Date.now();
  const timestamps = NoirEngineOil.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      const embedNoir1 = new MessageEmbed()
        .setColor("#32CD32")
        .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
        .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setFooter("𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
        .setDescription(
          `\n\n
**⚠️Warning⚠️** ${message.author}
=============:radio_button:=============

Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the '${
            command.name
          }' command.      `
        );
      channel.send(embedNoir1).catch(console.error);
      return;
    }
  }
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  // ==================================================================
  // ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
  // ==================================================================
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    const embedNoir2 = new MessageEmbed()
      .setColor("#32CD32")
      .setAuthor(`ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹`)
      .setImage(`https://i.postimg.cc/D0rM4dhG/image.png`)
      .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
      .setFooter("𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯-𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀")
      .setDescription(
        `\n\n
**⚠️Warning⚠️** ${message.author}
=============:radio_button:=============

There was an error executing that command.`
      );
    channel
      .send(embedNoir2)
      .catch(console.error)
      .then((message) => {
        message.delete({ timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}` });
        return;
      });
  }
});
// ==================================================================
// ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
// ==================================================================
LIC = `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
NOIR🍀PLAYER = Discord Music YouTube player
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀`;
// ==================================================================
// ================>  ПӨIЯ🍀PLΛYΣЯ 𝗯𝘆 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 <================
// ==================================================================
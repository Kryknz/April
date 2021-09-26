const ytdl = require("ytdl-core-discord");
const {
  canModifyQueue,
  ɴᴏɪʀᴡᴀᴋᴇ,
  ɴᴏɪʀᴄʟᴇᴀɴᴇʀ,
} = require("../noirtem/noir_env");
const { MessageEmbed } = require("../ᴋʟᴀᴡᴠᴏɪᴅ");
const getVideoId = require("get-video-id");
// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
// of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
// noir🎶player
// Discord Music YouTube player
// has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// =============================================================================================================================
module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    // ==================================================================
    // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    if (!song) {
      setTimeout(function () {
        if (queue.connection.dispatcher && message.guild.me.voice.channel) {
          return;
        }
        // ==================================================================
        // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        queue.channel.leave();
        queue.textChannel
          .send(
            new MessageEmbed()
              .setColor("#20ab40")
              .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
              .setFooter(
                "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
              )
              .setDescription("=========:radio_button:=========\n\n🤎**NOIR** has left the voice channel!")
          )
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
      }, ɴᴏɪʀᴡᴀᴋᴇ);
      // ==================================================================
      // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      const queue = message.client.queue.get(message.guild.id);
      queue.textChannel
        .send(
          new MessageEmbed()
            .setColor("#20ab40")
            .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
            .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
            .setFooter(
              "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
            )
            .setDescription("=========:radio_button:=========\n\n💚**NOIR's** MusicQueue has ended!")
        )
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      message.client.queue.delete(message.guild.id);
      return;
    }
    // ==================================================================
    // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    let stream = null;
    let streamType = song.url.includes("youtube.com") ? "opus" : "ogg/opus";
    // ==================================================================
    // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    try {
      if (song.url.includes("youtube.com")) {
        stream = await ytdl(song.url, {
          highWaterMark: 1 << 25,
        });
        // ==================================================================
        // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
      } else {
        const embedmusicnot = new MessageEmbed()
          .setColor("#20ab40")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setFooter(
            "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
          ).setDescription(`
**User:** ${message.author}
=========:radio_button:=========

Only YouTube playing/streaming is allowed`);
        message.channel
          .send(embedmusicnot)
          .catch(console.error)
          .then((message) => {
            message.delete({
              timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
            });
          });
        return;
      }
      // ==================================================================
      // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }
      // ==================================================================
      // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      console.error(error);
      const embedmusic1 = new MessageEmbed()
        .setColor("#20ab40")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
        .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
        .setFooter(
          "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
        )
        .setDescription(
          `
**User:** ${message.author}
=========:radio_button:=========

**Error:** 
**${error}**`
        );
      message.channel
        .send(embedmusic1)
        .catch(console.error)
        .then((message) => {
          message.delete({
            timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
          });
        });
      return;
    }
    // ==================================================================
    // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    queue.connection.on("disconnect", () =>
      message.client.queue.delete(message.guild.id)
    );
    // ==================================================================
    // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    const dispatcher = queue.connection
      .play(stream, { type: streamType })
      .on("finish", () => {
        if (collector && !collector.ended) collector.stop();
        queue.connection.removeAllListeners("disconnect");
        if (queue.loop) {
          let lastSong = queue.songs.shift();
          queue.songs.push(lastSong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", (err) => {
        console.error(err);
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      });
    dispatcher.setVolumeLogarithmic(queue.volume / 100);
    // ==================================================================
    // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    try {
      const { id } = getVideoId(`${song.url}`);
      var ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ = await queue.textChannel.send(
        new MessageEmbed()
          .setColor("#20ab40")
          .setTitle(" Now Playing ")
          .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
          .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
          .setImage(`https://img.youtube.com/vi/${id}/sddefault.jpg`)
          .setFooter(
            "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
          ).setDescription(`
💯𝘋𝘪𝘳𝘦𝘤𝘵𝘭𝘺 𝘴𝘵𝘳𝘦𝘢𝘮𝘪𝘯𝘨 𝘜𝘴𝘪𝘯𝘨 YouTube
=========:radio_button:=========

**🏷Title-** ${song.title}
**🔗Link-** ${song.url}`)
      );
      // ==================================================================
      // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("⏭");
      await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("⏯");
      await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔇");
      await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔉");
      await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔊");
      await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("🔁");
      await ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.react("❌");
      // ==================================================================
      // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
    } catch (error) {
      console.error(error);
    }
    // ==================================================================
    // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
    // ==================================================================
    const filter = (reaction, user) => user.id !== message.client.user.id;
    var collector = ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.createReactionCollector(filter, {
      time: song.duration > 0 ? song.duration * 1000 : 600000,
    });
    collector.on("collect", (reaction, user) => {
      if (!queue) {
        return;
      }
      // ==================================================================
      // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
      // ==================================================================
      const member = message.guild.member(user);
      switch (reaction.emoji.name) {
        // ==================================================================
        // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        case "⏭":
          queue.playing = true;
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) {
            const embedmusic2 = new MessageEmbed()
              .setColor("#20ab40")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
              .setFooter(
                "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
              )
              .setDescription(
                `
**User:** ${message.author}
=========:radio_button:=========

You need to join a voice channel first!`
              );
            message.channel
              .send(embedmusic2)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
            return;
          }
          // ==================================================================
          // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          queue.connection.dispatcher.end();
          queue.textChannel
            .send(
              new MessageEmbed()
                .setColor("#20ab40")
                .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
                .setFooter(
                  "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

⏩ Skipped the song`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          collector.stop();
          break;
        // ==================================================================
        // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        case "⏯":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) {
            const embedmusic3 = new MessageEmbed()
              .setColor("#20ab40")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
              .setFooter(
                "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
              )
              .setDescription(
                `
**User:** ${message.author}
=========:radio_button:=========

You need to join a voice channel first!`
              );
            message.channel
              .send(embedmusic3)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
            return;
          }
          // ==================================================================
          // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          if (queue.playing) {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.pause(true);
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#20ab40")
                  .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
                  .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
                  .setFooter(
                    "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                  ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

🚦 Paused the music.`)
              )
              .catch(console.error);
            // ==================================================================
            // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
            // ==================================================================
          } else {
            queue.playing = !queue.playing;
            queue.connection.dispatcher.resume();
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#20ab40")
                  .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
                  .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
                  .setFooter(
                    "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                  ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

▶ Resumed the music!`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
          }
          break;
        // ==================================================================
        // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        case "🔇":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) {
            const embedmusic4 = new MessageEmbed()
              .setColor("#20ab40")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
              .setFooter(
                "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
              )
              .setDescription(
                `
**User:** ${message.author}
=========:radio_button:=========

You need to join a voice channel first!`
              );
            message.channel
              .send(embedmusic4)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
            return;
          }
          // ==================================================================
          // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          queue.muted = !queue.muted;
          if (queue.muted) {
            queue.connection.dispatcher.setVolumeLogarithmic(0);
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#20ab40")
                  .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
                  .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
                  .setFooter(
                    "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                  ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔇 Muted the music!`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
            // ==================================================================
            // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
            // ==================================================================
          } else {
            queue.connection.dispatcher.setVolumeLogarithmic(
              queue.volume / 100
            );
            queue.textChannel
              .send(
                new MessageEmbed()
                  .setColor("#20ab40")
                  .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
                  .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
                  .setFooter(
                    "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                  ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔊 Unmuted the music!`)
              )
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
          }
          break;
        // ==================================================================
        // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        case "🔉":
          reaction.users.remove(user).catch(console.error);
          if (queue.volume == 0) {
            return;
          }
          if (!canModifyQueue(member)) {
            const embedmusic5 = new MessageEmbed()
              .setColor("#20ab40")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
              .setFooter(
                "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
              )
              .setDescription(
                `
**User:** ${message.author}
=========:radio_button:=========

You need to join a voice channel first!`
              );
            message.channel
              .send(embedmusic5)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
            return;
          }
          // ==================================================================
          // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          queue.volume = Math.max(queue.volume - 10, 0);
          queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
          queue.textChannel
            .send(
              new MessageEmbed()
                .setColor("#20ab40")
                .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
                .setFooter(
                  "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔉 Decreased the volume, the volume is now ${queue.volume}%`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          break;
        // ==================================================================
        // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        case "🔊":
          reaction.users.remove(user).catch(console.error);
          if (queue.volume == 100) {
            return;
          }
          if (!canModifyQueue(member)) {
            const embedmusic6 = new MessageEmbed()
              .setColor("#20ab40")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
              .setFooter(
                "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
              )
              .setDescription(
                `
**User:** ${message.author}
=========:radio_button:=========

You need to join a voice channel first!`
              );
            message.channel
              .send(embedmusic6)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
            return;
          }
          // ==================================================================
          // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          queue.volume = Math.min(queue.volume + 10, 100);
          queue.connection.dispatcher.setVolumeLogarithmic(queue.volume / 100);
          queue.textChannel
            .send(
              new MessageEmbed()
                .setColor("#20ab40")
                .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
                .setFooter(
                  "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

🔊 Increased the volume, the volume is now ${queue.volume}%`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          break;
        // ==================================================================
        // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        case "🔁":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) {
            const embedmusic7 = new MessageEmbed()
              .setColor("#20ab40")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
              .setFooter(
                "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
              )
              .setDescription(
                `
**User:** ${message.author}
=========:radio_button:=========

You need to join a voice channel first!`
              );
            message.channel
              .send(embedmusic7)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
            return;
          }
          // ==================================================================
          // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          queue.loop = !queue.loop;
          queue.textChannel
            .send(
              new MessageEmbed()
                .setColor("#20ab40")
                .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
                .setFooter(
                  "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                ).setDescription(`**User:** ${message.author}
=========:radio_button:=========

Loop is now ${queue.loop ? "**Turned On**" : "**Turned Off**"}`)
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          message.client.queue.delete(message.guild.id);
          break;
        // ==================================================================
        // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        case "❌":
          reaction.users.remove(user).catch(console.error);
          if (!canModifyQueue(member)) {
            const embedmusic8 = new MessageEmbed()
              .setColor("#20ab40")
              .setTitle("⚠️Warning⚠️")
              .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
              .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
              .setFooter(
                "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
              )
              .setDescription(
                `
**User:** ${message.author}
=========:radio_button:=========

You need to join a voice channel first!`
              );
            message.channel
              .send(embedmusic8)
              .catch(console.error)
              .then((message) => {
                message.delete({
                  timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
                });
              });
            return;
          }
          // ==================================================================
          // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          queue.songs = [];
          queue.textChannel
            .send(
              new MessageEmbed()
                .setColor("#20ab40")
                .setAuthor(`NOIR🎶PLΛYΣЯ by HypeVoidSoul`)
                .setThumbnail(`https://i.postimg.cc/D0rM4dhG/image.png`)
                .setImage(`https://img.youtube.com/vi/${id}/sddefault.jpg`)
                .setFooter(
                  "🔰Lic: 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭(𝐂)𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯▪️▪️𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀"
                )
                .setDescription("=========:radio_button:=========\n\n❤️MusicQueue has been successfully ended")
            )
            .catch(console.error)
            .then((message) => {
              message.delete({
                timeout: `${ɴᴏɪʀᴄʟᴇᴀɴᴇʀ}`,
              });
            });
          // ==================================================================
          // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
          // ==================================================================
          try {
            queue.connection.dispatcher.end();
          } catch (error) {
            console.error(error);
            queue.connection.disconnect();
          }
          collector.stop();
          break;
        // ==================================================================
        // ================>  🎶NOIR🍀PLΛYΣЯ by HypeVoidSoul <================
        // ==================================================================
        default:
          reaction.users.remove(user).catch(console.error);
          break;
      }
    });
    collector.on("end", () => {
      ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.reactions.removeAll().catch(console.error);
      if (ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ && !ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.deleted) {
        ɴᴏɪʀᴘʟᴀʏɪɴɢᴍᴇꜱꜱᴀɢᴇ.delete({ timeout: 3000 }).catch(console.error);
      }
    });
  },
};

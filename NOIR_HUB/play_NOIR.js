const https = require("https");
const ytdl = require("ytdl-core");
const noir_loader = require("../NOIR_SYSTEM/noir_loader");
const { play } = require("./MЦƧIC");
const YouTubeAPI = require("simple-youtube-api");
const scdl = require("soundcloud-downloader").default;
const { NOIRYT, notneeded, NOIRVOL } = require("../NOIR_SYSTEM/noir_env");
const youtube = new YouTubeAPI(NOIRYT);


module.exports = {
  name: "play",
  cooldown: 3,


  async execute(message, args) {
    // try { message.delete(); }
    // catch (error) {
    //   console.error(error);
    //   pass;
    // }


    const { channel } = message.member.voice;
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!channel) return message.reply(noir_loader.__("play.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ᴄʜᴀɴɴᴇʟ"))
      .catch(console.error);

    if (serverQueue && channel !== message.guild.me.voice.channel)
      return message
        .reply(noir_loader.__mf("play.ПOIЯD_ᴇʀʀᴏʀ_ɴᴏᴛ_ɪɴ_ꜱᴀᴍᴇ_ᴄʜᴀɴɴᴇʟ", { user: message.client.user }))
        .catch(console.error);

    if (!args.length)
      return message
        .reply(noir_loader.__mf("play.ПOIЯD_ᴜꜱᴀɢᴇ_ʀᴇᴘʟʏ", { prefix: message.client.prefix }))
        .catch(console.error);

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT")) return message.reply(noir_loader.__("play.ПOIЯD_ᴍɪꜱꜱɪɴɢ_ᴘᴇʀᴍɪꜱꜱɪᴏɴ_ᴄᴏɴɴᴇᴄᴛ"));
    if (!permissions.has("SPEAK")) return message.reply(noir_loader.__("play.ПOIЯD_ᴍɪꜱꜱɪɴɢ_ᴘᴇʀᴍɪꜱꜱɪᴏɴ_ꜱᴘᴇᴀᴋ"));

    const search = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(list=)([^#\&\?]*).*/gi;
    const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
    const not_needed_scl = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
    const url = args[0];
    const urlValid = videoPattern.test(args[0]);


    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      return message.client.commands.get("playlist").execute(message, args);
    } else if (scdl.isValidUrl(url) && url.includes("/sets/")) {
      return
      // message.client.commands.get("playlist").execute(message, args);
    }

    if (not_needed_scl.test(url)) {
      try {
        https.get(url, function (res) {
          if (res.statusCode == "302") {
            return message.client.commands.get("play").execute(message, [res.headers.location]);
          } else {
            return message.reply(noir_loader.__("play.ПOIЯD_ꜱᴏɴɢ_ɴᴏᴛ_ꜰᴏᴜɴᴅ")).catch(console.error);
          }
        });
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
      return message.reply("Following url redirection...").catch(console.error);
    }

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: NOIRVOL,
      muted: false,
      playing: true
    };

    let songInfo = null;
    let song = null;

    if (urlValid) {
      try {
        songInfo = await ytdl.getInfo(url);
        song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.lengthSeconds
        };
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
    } else if (scRegex.test(url)) {
      try {
        const trackInfo = await scdl.getInfo(url, notneeded);
        song = {
          title: trackInfo.title,
          url: trackInfo.permalink_url,
          duration: Math.ceil(trackInfo.duration / 1000)
        };
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
    } else {
      try {
        const results = await youtube.searchVideos(search, 1, { part: "snippet" });

        if (!results.length) {
          message.reply(noir_loader.__("play.ПOIЯD_ꜱᴏɴɢ_ɴᴏᴛ_ꜰᴏᴜɴᴅ")).catch(console.error);
          return;
        }

        songInfo = await ytdl.getInfo(results[0].url);
        song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.lengthSeconds
        };
      } catch (error) {
        console.error(error);
        return message.reply(error.message).catch(console.error);
      }
    }

    if (serverQueue) {
      serverQueue.songs.push(song);
      return serverQueue.textChannel
        .send(noir_loader.__mf("play.ПOIЯD_Qᴜᴇᴜᴇ_ᴀᴅᴅᴇᴅ", { title: song.title, author: message.author }))
        .catch(console.error);
    }

    queueConstruct.songs.push(song);
    message.client.queue.set(message.guild.id, queueConstruct);

    try {
      queueConstruct.connection = await channel.join();
      await queueConstruct.connection.voice.setSelfDeaf(true);
      play(queueConstruct.songs[0], message);
    } catch (error) {
      console.error(error);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return message.channel.send(noir_loader.__mf("play.ПOIЯD_ᴄᴀɴᴛ_ᴊᴏɪɴ_ᴄʜᴀɴɴᴇʟ", { error: error })).catch(console.error);
    }
  }
};

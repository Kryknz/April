// =============================================================================================================================
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// Copyright (C) 2007 Free Software Foundation
// Everyone is permitted to ๐ฐ๐ผ๐ฝ๐ ๐ฎ๐ป๐ฑ ๐ฑ๐ถ๐๐๐ฟ๐ถ๐ฏ๐๐๐ฒ verbatim copies
// of this license document, ๐ฏ๐๐ ๐ฐ๐ต๐ฎ๐ป๐ด๐ถ๐ป๐ด ๐ถ๐ ๐ถ๐ ๐ป๐ผ๐ ๐ฎ๐น๐น๐ผ๐๐ฒ๐ฑ.
// โฃ๏ธApril
// Discord Music YouTube player
// has been licensed under GNU General Public License
// ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
// =============================================================================================================================
require("dotenv").config();
exports.canModifyQueue = (member) => {
  const {
    channelID
  } = member.voice;
  const botChannel = member.guild.voice.channelID;
  if (channelID !== botChannel) {
    return;
  } else {
    return true;
  }
};
exports.Aึสษจสศถสษฎษ = process.env.AprilYT;
exports.Aึสษจสสษจำผ = process.env.AprilFIX;
exports.Aึสษจสำษีผ = process.env.AprilES;
exports.แดแดสษชสแดแดx = process.env.AprilMAX;
exports.แดแดสษชสแด แดส = process.env.AprilVOL;
exports.แดแดสษชสแดกแดแดแด = process.env.AprilWAKE;
exports.Aึสษจสึสสษขษส = process.env.AprilCLEANER;
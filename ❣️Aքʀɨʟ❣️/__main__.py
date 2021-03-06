try:
    import disnake
    import asyncio
    import logging
    from loguru import *
    from os import getenv
    from dotenv import load_dotenv
    from disnake.ext import commands
    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
    # ============================================================================================================================
    load_dotenv("./.env")
    AprilES = getenv("AprilES")
    Aึสษจสสษจำผ = getenv("BOTFIX")
    Aึสษจสสสึษจฦ = commands.Bot(command_prefix=Aึสษจสสษจำผ,
                              test_guilds=[889786523426373632])
    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
    # ============================================================================================================================
    @Aึสษจสสสึษจฦ.slash_command(name="ping", description="๐๐ฉ๐ซ๐ข๐ฅโฃ๏ธby๐ฑKrakinzLabโข๏ธ")
    async def ping(speaker):
        await speaker.response.send_message(
            f"Pong! {round(Aึสษจสสสึษจฦ.latency * 1000)}ms")

    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
    # ============================================================================================================================
    @Aึสษจสสสึษจฦ.slash_command(name="help", description="๐๐ฉ๐ซ๐ข๐ฅโฃ๏ธby๐ฑKrakinzLabโข๏ธ")
    async def help(speaker):
        embed = disnake.Embed(
            title="๐๐ฉ๐ซ๐ข๐ฅโฃ๏ธby๐ฑKrakinzLabโข๏ธ",
            description=f"""
*๐โขโชโขโช๐๐๐ง๐ฎ๐๐ฅ-๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌโชโขโชโข*
โข **{Aึสษจสสษจำผ}filter** = Music filters when playing audio.
โข **{Aึสษจสสษจำผ}help** = Display this commands and descriptions.
โข **{Aึสษจสสษจำผ}april** = Display the  license and a few more info.
โข **{Aึสษจสสษจำผ}np** = Show now playing song.
โข **{Aึสษจสสษจำผ}ping** = Check server ping of Aึสษจสสสึษจฦ.
โข **{Aึสษจสสษจำผ}play** = Plays audio from YouTube.
โข **{Aึสษจสสษจำผ}list** = Play a playlist from YouTube.
โข **{Aึสษจสสษจำผ}queue** = Show the music queue and now playing.
โข **{Aึสษจสสษจำผ}remove** = Remove song from the queue.
โข **{Aึสษจสสษจำผ}resume** = Resume currently playing music.
โข **{Aึสษจสสษจำผ}shuffle** = Shuffle music queue.
โข **{Aึสษจสสษจำผ}skipto** =Skip to the selected queue number.

*๐โขโชโขโช๐๐ฅ๐๐ฒ๐๐ซ-๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌโชโขโชโข*
โข **โญ** = Skip the currently playing song.
โข **๐** = Mute/Unmute the currently playing music.
โข **๐** = Toggle music loop.
โข **โบ** = Stops the currently playing music queue.
โข **๐|๐ {Aึสษจสสษจำผ}vol** = Change volume of currently playing music.

**โ๏ธCoded Using:**
โข Discord.js_Node=v16+
โข Disnake.py_Python=3.9""",
            color=disnake.Color.blurple(),
        )
        embed.set_thumbnail(
            url="https://i.postimg.cc/5tgjvj1y/A.png")
        embed.set_image(url="https://i.postimg.cc/5tgjvj1y/A.png")
        embed.set_footer(text="๐ฐ๐๐ถ๐ฐ๐ฒ๐ป๐๐ฒ: GNU(C)2021 Krakinz & KrakinzLab")
        if speaker.channel.name == "Aึสษจสโฃ๏ธสสึษจฦ":
            await speaker.response.send_message(embed=embed)
        else:
            await speaker.author.send(embed=embed)

    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
    # ============================================================================================================================
    @Aึสษจสสสึษจฦ.slash_command(name="April", description="๐๐ฉ๐ซ๐ข๐ฅโฃ๏ธby๐ฑKrakinzLabโข๏ธ")
    async def April(speaker):
        embed = disnake.Embed(
            title="๐๐ฉ๐ซ๐ข๐ฅโฃ๏ธby๐ฑKrakinzLabโข๏ธ",
            description=f"""=========โ๏ธ=========

โข> **April** is a Discord Music player Bot with YouTube Support and is available on both Discord and Telegram.

โข> **April** has been licensed under GNU General Public License ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐

โข> use **{Aึสษจสสษจำผ}help** to learn how to use **April**

**โ๏ธCoded Using:**
โข Discord.js_Node=v16+
โข Disnake.py_Python=3.9""",
            color=disnake.Color.blurple(),
        )
        embed.set_thumbnail(
            url="https://i.postimg.cc/5tgjvj1y/A.png")
        embed.set_image(url="https://i.postimg.cc/5tgjvj1y/A.png")
        embed.set_footer(text="๐ฐ๐๐ถ๐ฐ๐ฒ๐ป๐๐ฒ: GNU(C)2021 Krakinz & KrakinzLab")
        if speaker.channel.name == "Aึสษจสโฃ๏ธสสึษจฦ":
            await speaker.response.send_message(embed=embed)
        else:
            await speaker.author.send(embed=embed)

    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
    # ============================================================================================================================
    class InterceptHandler(logging.Handler):
        LEVELS_MAP = {
            logging.CRITICAL: "CRITICAL",
            logging.ERROR: "ERROR",
            logging.WARNING: "WARNING",
            logging.INFO: "INFO",
            logging.DEBUG: "DEBUG"
        }

        def _get_level(self, record):
            return self.LEVELS_MAP.get(record.levelno, record.levelno)

        def emit(self, record):
            logger_opt = logger.opt(depth=6,
                                    exception=record.exc_info,
                                    ansi=True,
                                    lazy=True)
            logger_opt.log(self._get_level(record), record.getMessage())

    logging.basicConfig(handlers=[InterceptHandler()], level=logging.INFO)
    AprilLog = logging.getLogger(__name__)
    # ===========================================================================================================================
    # GNU GENERAL PUBLIC LICENSE
    # Version 3, 29 June 2007
    # ๐๐จ๐ฉ๐ฒ๐ซ๐ข๐ ๐ก๐ญ (๐) ๐๐๐๐ ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ฎ๐ฏ | ๐๐ฟ๐ฎ๐ธ๐ถ๐ป๐๐๐ผ๐
    # ============================================================================================================================
    AprilLog.info(
        "~~~~~~~~~~~~~~~~~~~~~~~>  ๐๐ฉ๐ซ๐ข๐ฅโฃ๏ธby๐ฑKrakinzLabโข๏ธ <~~~~~~~~~~~~~~~~~~~~~~~"
    )
    AprilLog.info("โฃ๏ธApril Discord Handler Started")
    AprilLog.info(
        "~~~~~~~~~~~~~~~~~~~~~~~>  ๐๐ฉ๐ซ๐ข๐ฅโฃ๏ธby๐ฑKrakinzLabโข๏ธ <~~~~~~~~~~~~~~~~~~~~~~~"
    )
    Aึสษจสสสึษจฦ.run(AprilES)
except Exception as e:
    print(e)
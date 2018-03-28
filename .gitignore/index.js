const Discord = require('discord.js')
var bot = new Discord.Client()

bot.on("ready", function() {
    bot.user.setGame("ZeldoriaBot, !help");
    console.log("Le bot a bien ete connecter")
});

bot.login("NDI4NTcwOTU1OTMwMTQwNjc0.DZ1J9g.AnqnOsF1mG7CPV_wfMzmhSV2kzYnpm")


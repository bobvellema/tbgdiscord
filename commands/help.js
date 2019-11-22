const discord = require('discord.js')
module.exports= {
    config: {
        name: "help",
        aliases: []
    },
    run: async (bot, message, args) => {

var embed = new discord.RichEmbed()
.setDescription("**Sleadkd - Help**")
.setColor("#46a7f2")
.addField("Algemeen", "!help algemeen")
.addField("Moderatie", "!help moderatie")
.addField("Overig", "!help overig")
.setTimestamp()
.setFooter("Sleadkd", bot.user.displayAvatarURL);

var embedalgemeen = new discord.RichEmbed()
.setDescription("**Sleadkd - Algemeen**")
.setColor("#46a7f2")
.addField("!ticket", "Maak een supportticket aan.")
.addField("!sps", "Speel steen,papier,schaar tegen de bot!")
.addField("!idee", "Geed een idee op.")
.addField("!report", "Report iemand op de server.")
.addField("!serverinfo", "Geeft informatie over de server.")
.addField("!hallo", "Zeg hallo tegen de bot!")
.setTimestamp()
.setFooter("Sleadkd", bot.user.displayAvatarURL);

var embedmoderatie = new discord.RichEmbed()
.setDescription("**Sleadkd - Moderatie**")
.setColor("#46a7f2")
.addField("!ban", "Verban iemand van de server.")
.addField("!tempban", "Verban iemand van de server.")
.addField("!kick", "Verwijder iemand van de server.")
.addField("!clear", "Verwijder verzonden berichten uit de chat.")
.addField("!purge", "Verwijder verzonden berichten uit de chat.")
.addField("!warn", "Waarschuw iemand van de server.")
.addField("!close", "sluit een ticket.")
.addField("!tempmute", "Tempmute iemand in de discord voor een bepaalde tijd.")
.addField("!prefix", "verander de bot prefix.")
.addField("!announcement", "Annouce iets in de discord.")
.setTimestamp()
.setFooter("Sleadkd", bot.user.displayAvatarURL);

var embedbotmuziek = new discord.RichEmbed()
.addField("!play", "speel een nummer af.")
.addField("!search", "Zoek een nummer op youtube.")
.addField("!queue", "Laat de muziek queue zien.")
.addField("!skip", "Skip een liedje.")
.addField("!pause", "pauzeer een nummer.")
.addField("!resume", "speel een nummer weer verder af.")
.addField("!volume", "Verander de volume  tussen de 0-150.")
.addField("!leave", "Laat de bot de channel leaven.")
if(!args[0]) return message.channel.send(embed)
var onderwerp = args[0]
if(onderwerp.toLowerCase() === "algemeen") return message.channel.send(embedalgemeen)
if(onderwerp.toLowerCase() === "moderatie") return message.channel.send(embedmoderatie)
if(onderwerp.toLowerCase() === "muziek") return message.channel.send(embedbotmuziek)
    }
}

module.exports.help = {
    name: "help"
}
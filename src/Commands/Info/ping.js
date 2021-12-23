const Command = require("../../Structure/Command");
const {MessageEmbed} = require("discord.js")

module.exports = new Command({
    name: "ping",
    description: "Renvoye la latence du bot",
    aliases: ["speed"],
    category: "Info",

    run:async(client, message, args, guildData)=>{
        const embed = new MessageEmbed().setColor("AQUA").setFields([
            {name: "Ping", value: `${client.ws.ping}`, inline: false}
        ])
        message.channel.send({embeds: [embed]})
    }
})
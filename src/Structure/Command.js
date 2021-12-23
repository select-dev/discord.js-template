const Client = require("./Client"),
Discord = require("discord.js"),
GuildManager = require("./Database/guild/GuildManager")
/**
 * @param {Client} client
 * @param {Discord.Message} message
 * @param {string[]} args
 * @param {GuildManager} guildData
 */

function Run(client, message, args, guildData) {}
class Command {
    /**
     * @param {{name: string, description: string, category: string, aliases: array,run: Run() }} ops 
     */
    constructor(ops){
        this.name = ops.name;
        this.description = ops.description;
        this.category = ops.category;
        this.aliases = ops.aliases;
        this.run = ops.run;
    }
}

module.exports = Command;
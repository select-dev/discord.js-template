const GuildManager = require("./guild/GuildManager")

class Manager {
    guildManager(guildId){
        return new GuildManager(guildId)
    }
}
module.exports = Manager;
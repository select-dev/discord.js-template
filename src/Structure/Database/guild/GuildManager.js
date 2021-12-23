const db = require("quick.db");
const config = require("../../../config");

class GuildManager{
    constructor(guildId){
        this.guildId = guildId;
        this.values = {
            prefix: db.get(`${guildId}.prefix`) || config.prefix,
        }
    }
    get(key){
        return this.values[key]
    }
    set(key, value){
        this.values[key] = value
        return this;
    }
    async save(){
        const valuesInDB = db.get(`${this.guildId}`) || {};
        for(const key in this.values){
            if(this.values[key] !== valuesInDB[key]) db.set(`${this.guildId}.${key}`, this.values[key])
        }
        return this;
    }
}

module.exports = GuildManager;
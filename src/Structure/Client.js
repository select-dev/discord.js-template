const {Client, Collection} = require("discord.js"),
fs = require("fs");
const Manager = require("./Database");

class Bot extends Client{
    constructor(){
        super({intents: 32767});
        this.config = require("../config");
        this.commands = new Collection();
        this.manager = new Manager();
        this.start();
    }
    start(){
        this.initCommands();
        this.initEvents();
        this.login(this.config.token);
    }
    initCommands(){
        for(const category of fs.readdirSync("./src/Commands")){
            const files = fs.readdirSync(`./src/Commands/${category}`).filter(f => f.endsWith(".js"));
            for(const file of files){
                const command = require(`../Commands/${category}/${file}`);
                if(command.name){
                    this.commands.set(command.name, command)
                }else console.log(`${file} n'a pas de name`)
            }
        }
    }
    initEvents(){
        for(const category of fs.readdirSync("./src/Events")){
            const files = fs.readdirSync(`./src/Events/${category}`).filter((f) => f.endsWith(".js"));
            for(const file of files){
                const event = require(`../Events/${category}/${file}`);
				this.on(event.event, event.run.bind(null, this));
            }
        }
    }
}

module.exports = Bot;
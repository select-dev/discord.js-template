const Event = require("../../Structure/Event");

module.exports = new Event("messageCreate", async(client, message) =>{
    const guildData = client.manager.guildManager(message.guildId);
    const prefix = guildData.get("prefix");
    if(message.author.bot || message.system || !message.content.startsWith(prefix))return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args[0]?.toLowerCase();
    args.shift();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases?.includes(commandName));
    if(!command)return;

    command.run(client, message, args, guildData)
})
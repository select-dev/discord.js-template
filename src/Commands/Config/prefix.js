const Command = require("../../Structure/Command");

module.exports = new Command({
    name: "prefix",
    description: "Modifier le prefix du bot sur le serveur",
    category: "Config",
    aliases: ["setprefix"],

    run:async(client, message, args, guildData)=>{
        const prefix = args[0];
        if(!prefix)return message.channel.send("Veuillez spécifiez un prefix");
        if(prefix.length > 3) return message.channel.send("Le prefix ne peut pas dépasser 3 caractères");
        guildData.set("prefix", prefix).save().then(()=>{
            message.channel.send(`Mon prefix est maintenant: \`${prefix}\``)
        });
    }
})
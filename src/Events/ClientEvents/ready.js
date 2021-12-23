const Event = require("../../Structure/Event");

module.exports = new Event("ready", (client) =>{
    console.log(client.user.username);
})
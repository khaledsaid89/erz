const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603608706197749760")
setInterval(function() {
channel.send(`ana el top`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
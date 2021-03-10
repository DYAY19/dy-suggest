
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = process.env.PREFIX;
client.login(process.env.BOT_TOKEN);



/*

- [       All Copy Right Reserved For: Shuruhatik  in YT     ] -

*/



client.on('ready', () => {
    console.log(`Iam Ready`);
    console.log(`Guilds: ${client.guilds.cache.size}`);
    console.log(`Users: ${client.users.cache.size}`);
    client.user.setActivity(`text`,{type: 'Playing'}); ///التعديل علي البلاينج
});



client.on('message', function(message) {
let args = message.content.split(" ").slice('').join(" ");
if(message.author.bot)return;
const sugch = message.channel.id === "755605209476104362"
if (!sugch) return false;
if(message.content.startsWith('')){
  message.delete()
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username,message.author.avatarURL())
.setColor("RANDOM")
.setThumbnail(message.author.avatarURL())
.setDescription(`> **${args}**`)
.setFooter(`اقتراح من | ${message.author.id}`)
.setTimestamp()
message.channel.send(embed).then(msg => {
  msg.react('👍').then( r => {
    msg.react('👎')
  })
})
}
});

/*

- [       All Copy Right Reserved For: Shuruhatik  in YT     ] -

*/
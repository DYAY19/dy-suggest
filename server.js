const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://2020tst.glitch.me/`);/////////////////لازم تحت اسم بروجكت حقك مهم
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const pretty = require("pretty-ms");
client.login(process.env.BOT_TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


/*

- [       All Copy Right Reserved For: Shuruhatik  in YT     ] -

*/
const prefix = process.env.PREFIX;


client.on('ready', () => {
    console.log(`Iam Ready`);
    console.log(`Guilds: ${client.guilds.size}`);
    console.log(`Users: ${client.users.size}`);
    client.user.setActivity(`Type ${prefix}corona`,{type: 'Playing'}); ///التعديل علي البلاينج
});

client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('Info Bemo Bot.')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 16900).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ # ]` , true)
                  .addField('``My Language``' , `[ Arabic ]` , true)
    })
}
});

client.on('message', message => {
if  (message.content.toLowerCase().startsWith(prefix + "corona"))  {
  let country = message.content.toLowerCase().split(" ").slice(1).join(" ");
  corona(country, message);
};
});
function corona(country, message) {
const fetch = require("node-fetch");
fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
  .then(async data => {
  data = await data.json();
  let corona = new Discord.RichEmbed().setColor("RANDOM")
    .setThumbnail(data.countryInfo.flag)
    .setTitle(`إحصائيات كورونا في : ${data.country}`)
    .addField("`اصابات`", [`**${data.cases}**`] , true)
    .addField("`اموات`", [`**${data.deaths}**`] , true)
    .addField("`معافي`", [`**${data.recovered}**`] , true)
    .addField("`حالات جديدة`", [`**${data.todayCases}**`] , true)
    .addField("`اموات جديدة`", [`**${data.todayDeaths}**`] , true)
    .addField("`معافي اليوم`", [`**${data.todayRecovered}**`] , true)
    .addField("`قارة`", [`**${data.continent}**`] , true)
    .setFooter(`Requested by :${message.author.username}`, message.author.avatarURL);
  message.channel.send(corona);
});
};
/*

- [       All Copy Right Reserved For: Shuruhatik  in YT     ] -

*/
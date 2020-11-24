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
const {prefix} = require('./config')
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
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAMXTnuoK2kjq6HGkhD079kh5MCOoSxD4Q');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
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


client.on('ready', () => {
    console.log(`Iam Ready`);
    console.log(`Guilds: ${client.guilds.size}`);
    console.log(`Users: ${client.users.size}`);
    client.user.setActivity(`Type `,{type: 'Playing'}); ///التعديل علي البلاينج
});



function corona(country, message) {
const fetch = require("node-fetch");
if  (message.content.toLowerCase().startsWith(prefix + "corona"))  {
  let country = message.content.toLowerCase().split(" ").slice(1).join(" ");
  corona(country, message);
};
fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
  .then(async data => {
  data = await data.json();
  let corona = new Discord.MessageEmbed().setColor("#ff0000")
    .setThumbnail(data.countryInfo.flag)
    .setTitle(`إحصائيات كورونا في : ${data.country}`)
    .addField("`اصابات`", [`**${data.cases}**`] , true)
    .addField("`اموات`", [`**${data.deaths}**`] , true)
    .addField("`معافي`", [`**${data.recovered}**`] , true)
    .addField("`حالات جديدة`", [`**${data.todayCases}**`] , true)
    .addField("`اموات جديدة`", [`**${data.todayDeaths}**`] , true)
    .addField("`معافي اليوم`", [`**${data.todayRecovered}**`] , true)
    .addField("`القارة`", [`**${data.continent}**`] , true)
    .setFooter(`Requested by :${message.author.username}`, message.author.avatarURL());
  message.channel.send(corona);
});
};
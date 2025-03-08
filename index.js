const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1265825059692609587')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/apparentlyjack_rl') 
    .setState('GTA V')
    .setName('for an hour')
    .setDetails(`Franklin`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.tenor.com/7RPFH6EVyYcAAAAi/indopride-gta-v.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('GTA V') 
    .setAssetsSmallImage('https://media.tenor.com/sj8y0D4cGNwAAAAi/logo-steam.gif')//u can put links in tenor or discord and etc.
    .setAssetsSmallText('Steam') 
    .addButton('Download', 'https://store.steampowered.com/app/3240220/Grand_Theft_Auto_V_Enhanced/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);

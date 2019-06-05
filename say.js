const say = require('say')

const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");


client.on("message", async message => {

if(message.content.indexOf(config.prefix) !== 0) return;
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

 if(command === "say") { 
const msg = args.join(' ');
say.speak("What's up, dog?", 'voice_cmu_us_clb_arctic_clunits', 1.0, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log('Text has been spoken.')
});	
}


});



client.login(config.token);
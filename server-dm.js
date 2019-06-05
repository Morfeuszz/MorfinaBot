const Discord = require('discord.js');
const client = new Discord.Client();
var Channel = "290196599043522560";

const config = require("./config.json");
const channelid = require("./channelid.json")

client.on('ready', () => {
client.user.setActivity('Kiedys naprawie tego bota')
attachm = ("");
config.actuallchannel = "290196599043522560";
});

 
client.on("message", async message => {

//if(message.author.bot) return;
if(message.content.indexOf(config.prefixblank) !== 0) return;
const args = message.content.slice(config.prefixblank.length).trim().split(/ +/g); 
//const command2 = args.shift().toLowerCase(); 
    var Attachment = (message.attachments).array();
    attachm = ("");
   Attachment.forEach(function(attachment) {
  attachm = attachment.url;
})

 
const Message = args.join(" ");
if (message.author.id == '343852513306345472') return;
//if (message.author.id == '211894822611451905') return;
if (message.author.id == '445977108825505792'){
if(message.content.indexOf(config.prefix) == 0){
  const args2 = message.content.slice(config.prefix.length).trim().split(/ +/g); 
    const command = args2.shift().toLowerCase(); 

if(command === "channel") {
client.channels.get('446055766575546377').send(channelid[config.actuallchannel]);
}



if(command === "change") {
config.actuallchannel = channelid[args2];
var json = JSON.stringify(config);
var fs = require('fs');
fs.writeFile('config.json', json, 'utf8');
client.channels.get('446055766575546377').send(channelid[config.actuallchannel]);
}
}else{ 

Channel = config.actuallchannel;
console.log(config.actuallchannel);
client.channels.get(Channel).send(Message+attachm);
attachm = ("");
}
}
if (message.author.id !== '445977108825505792'){
if (message.guild.id === '447853813127446545') return;
if (message.guild.id === '427846572081152022') return;
client.channels.get('446055766575546377').send(message.guild.name+"|"+ message.channel.name+"-"+message.author.tag+": "+Message+attachm);
console.log(message.guild.name+"|"+ message.channel.name+"-"+message.author.tag+": "+Message+attachm);
attachm = ("");
}




 

});


client.login(config.token);


const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var Channel = "294982379427069952";

client.on('ready', () => {
client.user.setStatus('invisible')
attachm = ("");
});

client.on("message", async message => {


if(message.content.indexOf(config.prefixblank) !== 0) return;
const args = message.content.slice(config.prefixblank.length).trim().split(/ +/g); 
    var Attachment = (message.attachments).array();
    attachm = ("");
   Attachment.forEach(function(attachment) {
  attachm = attachment.url;
})

const Message = args.join(" ");
if (message.author.id == '343852513306345472') return;
if (message.author.id == '445977108825505792'){
if (message.channel.id === '458971058481922050'){
client.users.get(Channel).send(Message+attachm);
attachm = ("");
}
} else {
 if (message.author.id ===  '211894822611451905') return;
if (message.channel.id === '458971058481922050') return;
if (message.channel.type !== 'dm') return;
client.channels.get('458971058481922050').send(message.author.tag+": "+Message+attachm);
attachm = ("");
}
});


client.login("MjExODk0ODIyNjExNDUxOTA1.DgvcGg.uB2Rs_rchRgTvKVe8qD15euYklA");

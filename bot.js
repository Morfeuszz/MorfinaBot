const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const fs = require("fs")
const clean = require('./utilities/clean.js');

client.commands = new Discord.Collection();
const config = require("./config.json");
const channelid = require("./channelid.json")


client.on('ready', () => {
  config.actuallchannel = "229741778121654272";
//client.user.setActivity('Kiedys naprawie tego bota')
client.user.setStatus('invisible')
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

const commandFiles = fs.readdirSync('./commands');
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


function evaluate(message, args) {
	try {
		const code = args.join(' ');
		let evaled = eval(code);
		if (typeof evaled !== "string")
			evaled = require("util").inspect(evaled);
		message.channel.send(clean(evaled), {code:"xl"});
	}
	catch (err) {
		message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
	}
}

module.exports.evaluate = evaluate;

client.on("message", async message => { 
    if(message.author.bot) return; 
    if(message.content.indexOf(config.prefix) !== 0) return; 
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g); 

    const commandName = args.shift().toLowerCase(); 
    let command = client.commands.get(commandName);
try {
			command.execute(client, message, args);
		}
		catch (error) {
			console.error(error);
			message.reply(`there was an OOF trying to execute the  \`${command.name}\` command.`);
		}
 
   


});




const client2 = new Discord.Client();
var Channel = "290196599043522560";


client2.on('ready', () => {
//client.user.setActivity('Kiedys naprawie tego bota')
client.user.setStatus('invisible')
attachm = ("");
config.actuallchannel = "290196599043522560";
});

 
client2.on("message", async message => {

//if(message.author.bot) return;
if(message.content.indexOf(config.prefixblank) !== 0) return;
const args3 = message.content.slice(config.prefixblank.length).trim().split(/ +/g); 
//const command2 = args3.shift().toLowerCase(); 
    var Attachment = (message.attachments).array();
    attachm = ("");
   Attachment.forEach(function(attachment) {
  attachm = attachment.url;
})

 
const Message = args3.join(" ");
if (message.author.id == '343852513306345472') return;
//if (message.author.id == '211894822611451905') return;
if (message.author.id == '445977108825505792'){
if(message.content.indexOf(config.prefix) == 0){
  const args2 = message.content.slice(config.prefix.length).trim().split(/ +/g); 
    const command = args2.shift().toLowerCase(); 

if(command === "channel") {
client2.channels.get('446055766575546377').send(channelid[config.actuallchannel]);
}



if(command === "change") {
config.actuallchannel = channelid[args2];
var json = JSON.stringify(config);
var fs = require('fs');
fs.writeFile('config.json', json, 'utf8');
client2.channels.get('446055766575546377').send(channelid[config.actuallchannel]);
}
}else{ 

Channel = config.actuallchannel;
console.log(config.actuallchannel);
client2.channels.get(Channel).send(Message+attachm);
attachm = ("");
}
}
if (message.author.id !== '445977108825505792'){
if (message.guild.id === '447853813127446545') return;
if (message.guild.id === '427846572081152022') return;
client2.channels.get('446055766575546377').send(message.guild.name+"|"+ message.channel.name+"-"+message.author.tag+": "+Message+attachm);
console.log(message.guild.name+"|"+ message.channel.name+"-"+message.author.tag+": "+Message+attachm);
attachm = ("");
}




 

});

client.login(config.token);
client2.login(config.token);



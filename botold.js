const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const fs = require("fs")
const clean = require('./utilities/clean.js');

client.commands = new Discord.Collection();
const config = require("./config.json");
const channelid = require("./channelid.json")


client.on('ready', () => {
  config.actuallchannel = "290196599043522560";
client.user.setActivity('Kiedys naprawie tego bota')
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



client.login(config.token);

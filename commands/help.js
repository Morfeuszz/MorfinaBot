const config = require('../config.json');
module.exports = {
	name: 'help',
    aliases: ['commands'],
    execute(client, message, args) {
 const { commands } = message.client;
const data = [];
data.push(commands.filter(command => 
				command.hasOwnProperty('permissionUser') === false).map(command => command.name).join(', '));

message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type !== 'dm') {
						message.channel.send('I\'ve sent you a list of available commands');
					}
				})
				.catch(() => message.reply('it seems like I can\'t DM you!'));
}
}
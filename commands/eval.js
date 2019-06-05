const { ownerID } = require('../config.json');
const root = require('../bot.js');
module.exports = {
name: 'eval',
permissionUser: 'BOT_OWNER',
		execute(client, message, args) {
		if(message.author.id !== ownerID) return;
		root.evaluate(message, args);
	}
};
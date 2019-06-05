module.exports = {
	name: 'request',
		execute(client, message, args) {
		
if (!args.length) return;
		const msg = args.join(' ');
		client.channels.get("450410990950023189").send(`${msg}`);
                message.channel.send("Done!");
	}
};
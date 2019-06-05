const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");
var i = 0;



client.on('ready', () => {
    console.log('Ready!');

    setTimeout(startSpam, 0);
});

function startSpam() {
    var fish = setInterval(Spam, 500);
}

function Spam() {
i = i+1;
    client.channels.get('456185427477659650').send(i);
}



client.login(config.token);










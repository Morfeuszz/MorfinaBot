const TwitchBot = require('twitch-bot')
var irc = require('irc');



var client = new irc.Client('irc.ppy.sh', 'Morfeusz', {
    server: "irc.ppy.sh",
    username: "Morfeusz",
    nick: "Morfeusz",
    password: "223fe998",});
client.addListener('message', function (from, to, message) {
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});





function np (){


client.say('Morfeusz', "test");


}








const Bot = new TwitchBot({
  username: 'MorfinaBot',
  oauth: 'oauth:yf0eue5hah03u1htlpjwz9nv1xow99',
  channels: ['morfeuszosu']
})

Bot.on('join', channel => {
  console.log(`Joined channel: ${channel}`)
})

Bot.on('error', err => {
  console.log(err)
})

Bot.on('message', chatter => {
  if(chatter.message === '!test') {
    Bot.say('PogChamp ')
np();
  }
})

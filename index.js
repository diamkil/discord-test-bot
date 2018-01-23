const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == 'ping') {
        message.channel.sendMessage('pong');
    }
    if(message.content == 'bonjour') {
        message.reply('bonjour');
    }
    if(message.content == '!help') {
        message.reply('Voici quelques commandes:');
        message.channel.sendMessage('Aide: !help');
        message.channel.sendMessage('Vous verez: ping');
        message.channel.sendMessage('Se faire dire bonjour: bonjour');
    }

});

bot.login('NDA1MzIyNzgyMTEzNjYwOTM5.DUj0MQ.DIfsUc9wczMbEvTgypiKzrzaoG8');

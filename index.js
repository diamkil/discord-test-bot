const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('message', (message) => {
    //ping pong
    if(message.content == 'ping') {
        message.channel.sendMessage('pong');
    }
    if(message.contect == 'Ping') {
        message.channel.sendMessage('Pong');
    }


    //bonjour, salut et allo
    if(message.content == 'bonjour') {
        message.reply('Bonjour');
    }

    if(message.content == 'salut') {
        message.reply('Salut');
    }

    if(message.content == 'allo') {
        message.reply('Allo');
    }

    //commande yo
    if(message.content == 'yo cool bot') {
        message.reply('Yo cool man');
    }


    //PingPong44
    if(message.content == 'ping44') {
        message.reply('PingPong44');
    }


    //liste de commandes
    if(message.content == 'help') {
        message.reply('Voici quelques commandes: \nAide: help ou -h \n\nVous verez: ping \n\nSe faire dire bonjour: bonjour \nSe faire dire Salut: salut \nSe faire dire Allo: allo \n\nSe faire dir Yo: yo cool bot \n\nNe pas mettre de majuscules!');
    }
    if(message.content == '-h') {
        message.reply('Voici quelques commandes: \nAide: help ou -h \n\nVous verez: ping \n\nSe faire dire bonjour: bonjour \nSe faire dire Salut: salut \nSe faire dire Allo: allo \n\nSe faire dir Yo: yo cool bot \n\nNe pas mettre de majuscules!');
    }
});

bot.login('NDA1NDEyNzcwMTQ2ODExOTE1.DUk7Sw.Jpp5TgvQ1t0v_Y5gCma-SX_GQEk');


bot.on("ready", function () {
    console.log("Ready to serv you, sir!");
    message.channel.sendMessage('Ready to serv');
    console.log("press CTRL+C to stop me")
});

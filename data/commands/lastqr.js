const Discord = require("discord.js");
const Attachment = require("discord.js").Attachment
const RichEmbed = require("discord.js").RichEmbed;
const boxen = require("boxen")
const qr = require("qr-image")
const fs = require("fs")
module.exports.run = (client, message, args, data, game, announcement) => {
    const modlog = message.guild.channels.find('name', 'mod-log');    
    message.channel.startTyping()
    fs.exists(`./data/serverdata/${message.guild.id}/qrcode/${message.author.id}.png`, function(exists) {
        if (exists) {
          fs.stat(`./data/serverdata/${message.guild.id}/qrcode/${message.author.id}.png`, function(err, stats) { 
            message.channel.send(new Attachment(`./data/serverdata/${message.guild.id}/qrcode/${message.author.id}.png`, `qrcode.png`)).then(message => {
                message.channel.stopTyping()
            });
          });
        } else {
          message.channel.send('You do not have any previous QR Codes').then(message => {
              message.channel.stopTyping()
          })
        }
      });
    console.log(boxen('[LastQR] ' + message.guild.name + ' | ' + message.author.tag, {padding: 1}))
    var lastqrmlembed = new Discord.RichEmbed()
        .setColor(data.embedcolor)
        .setTitle('Last QR Command Used')
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        if(modlog) return modlog.send({embed: lastqrmlembed})
}
module.exports.help = {
    name: "lastqr",
    info: "Get the last QR code you generated",
    usage: "lastqr"
}
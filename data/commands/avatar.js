const RichEmbed = require("discord.js").RichEmbed;
const Discord = require("discord.js");
const moment = require("moment")
const embedfooter = moment().format('h:mm:ss a') + 'EST on ' +  moment().format('MMMM Do YYYY')
module.exports.run = (client, message, args, data, game, announcement) => {
  var commandlock = data.lock
  if(commandlock.includes('true')) {       
    if(message.author.id !== data.ownerid) return message.channel.send('Sorry, but a command lock is in effect. Only the owner can use commands at this time.')   
  } 
  const modlog = message.guild.channels.find('name', 'mod-log');
let useravatar = message.content.split(' ').slice(1).join(' ')
let otheruser = message.guild.member(message.mentions.users.first())
var useravatarlengthtooshortembed = new Discord.RichEmbed()
  .setColor(data.embedcolor)
  .setTitle('Avatar Help')
  .setDescription('You must provide a mentioned user')
  .addField(data.prefix + 'avatar <@user>','<@user> =  Mentioned User')
  .setFooter(embedfooter)
var avatarmlembed = new Discord.RichEmbed()
  .setColor(data.embedcolor)
  .setTitle('Avatar Command Used')
  .setDescription(message.author.username)
  .setAuthor(message.author.username ,message.author.avatarURL)
  .setFooter(embedfooter)
var avatarnomenembed = new Discord.RichEmbed()
  .setColor(data.embedcolor)
  .setTitle('Avatar of ' + message.author.username)
  .setImage(message.author.displayAvatarURL)
  .setAuthor(message.author.username ,message.author.displayAvatarURL)
  .setFooter(embedfooter)

if(useravatar.length < 1) return message.channel.send({embed: avatarnomenembed})

  var avatarouembed = new Discord.RichEmbed()
    .setColor(data.embedcolor)
    .setTitle(' ')
    .setImage(message.mentions.users.first().displayAvatarURL)
    .setAuthor(message.author.username ,message.author.displayAvatarURL)
    .setFooter(embedfooter)
    message.channel.send({embed: avatarouembed}).catch(console.error);

    if(modlog) return modlog.send({embed: avatarmlembed}).catch(console.error);
  }
  module.exports.help = {
    name: "avatar",
    info: "Get your own avatar *or the mentioned user*",
    usage: "avatar <@user>"
  }
const RichEmbed = require("discord.js").RichEmbed;
const Discord = require("discord.js");
const boxen = require('boxen');
module.exports.run = (client, message, args, data, game, announcement) => {
  var commandlock = data.lock
  if(commandlock.includes('true')) {       
    if(message.author.id !== data.ownerid) return message.channel.send('Sorry, but a command lock is in effect. Only the owner can use commands at this time.')   
  } 
  const modlog = message.guild.channels.find('name', 'mod-log');
  const announcements = message.guild.channels.find('name', 'announcements')
let channeldelreason = message.content.split(' ').slice(1).join(' ')
var embedcdpermreturn = new Discord.RichEmbed()
  .setColor(data.embedcolor)
  .setTitle('Channel Delete Usage')
  .setDescription('You must have the permission `MANAGAE_CHANNELS`')
  .addField(data.prefix + 'channeldelete <reason>','<reason> = Reason for Channel Deletion')
  // removed 
var embedbotcdpermreturn = new Discord.RichEmbed()
  .setColor(data.embedcolor)
  .setTitle('Channel Delete Usage')
  .setDescription('I must have the permission `MANAGE_CHANNELS`')
  .addField(data.prefix + 'channeldelete <reason>','<reason> = Reason for Channel Deletion')
  // removed 
var chnldelrsnerrorembed = new Discord.RichEmbed()
  .setColor(data.embedcolor)
  .setTitle('Channel Delete Usage')
  .setDescription('You must provide a reason for the channel deletion')
  .addField(data.prefix + 'channeldelete <reason>','<reason> = Reason for Channel Deletion')

  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send({embed: embedcdpermreturn}).catch(console.error);
  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send({embed: embedbotcdpermreturn}).catch(console.error);
  if(channeldelreason.length < 1) return message.channel.send({embed: chnldelrsnerrorembed})

  message.channel.delete()
  message.author.send('Channel has been deleted').catch(console.error);
    console.log(boxen('[Channel Delete] ' + message.guild.name + ' | ' + message.author.tag + ' | ' + channeldelreason, {padding: 1}))
    var channeldelmlembed = new Discord.RichEmbed()
      .setColor(data.embedcolor)
      .setTitle('Channel Delete Command Used')
      .setDescription(message.author.username + '\n \n **Reason:** ' + channeldelreason)
      .setAuthor(message.author.username ,message.author.avatarURL)
      // removed 
    if(modlog) return modlog.send({embed: channeldelmlembed}).catch(console.error);
  }
  module.exports.help = {
    name: "channeldelete",
    info: "Delete a channel *including a reason*",
    usage: "channeldelete <reason>"
  }

const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let avt = bot.user.displayAvatarURL;
  let embed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#f2ff00")
  .setThumbnail(avt)
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt);
 
  return message.channel.send(embed);
}

module.exports.help = {
  name: "botinfo"
}

const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let random = Math.floor((Math.random() * 37) + 1)
  let embedpro =  new Discord.RichEmbed()



  .setDescription("Result")
  .setColor("#ff0000")
  .setDescription(`You got ${random}!`);
    
  message.channel.send(embedpro);
}

module.exports.help = {
  name: "spin"
}

const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let say = args.join(" ");
  message.delete();
  message.channel.send(say);
}

module.exports.help = {
  name: "say"
}

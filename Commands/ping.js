const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let random = Math.floor((Math.random() * 1337) + 1696)

message.channel.send(`Pong! *${random}ms*`);
}


  module.exports.help = {
    name: "ping"
  }

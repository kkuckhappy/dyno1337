const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  //kick

    let kuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kuser) return message.channel.send("Can't find this user!");
    let kreason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nab!");
    if (kuser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't kick that person nab!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#ff0000")
    .addField("Kicked User", `${kuser} with ID ${kuser.id}}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", kreason);

    message.delete();
    message.guild.member(kuser).kick(kreason);
    message.channel.send(kickEmbed);
  }

module.exports.help = {
  name: "kick"
}

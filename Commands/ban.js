const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let buser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!buser) return message.channel.send("Can't find this user!");
    let breason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nab!");
    if (buser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't ban that person nab!");

    let BanEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ff0000")
    .addField("Banned User", `${buser} with ID ${buser.id}}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", breason);

    message.delete();
    message.guild.member(buser).kick(breason);
    message.channel.send(BanEmbed);
  }

module.exports.help = {
  name: "ban"
}

const Discord = require("discord.js")
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //tempmute @user /s/m/h///

  let tpmute = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!tpmute) return message.reply("Couldn't find user.");
  if (tpmute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find('name', "muted");
  //make roles
  if (!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channel.forEach(async (channel, id,) => {
        await channel.overwritePermission(muterole, {
          SEND_MESSAGES: false,
          SEND_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end make role
  let mutetime= args[1];
  if (!mutetime) return message.reply("You didn't specify a time!");

  await(tpmute.addRole(muterole.id));
  message.reply(`<@${tpmute.id}> has been muted for ${ms(mutetime)}!`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tpmute.id}> has been unmuted!!`);
  }, ms(mutetime));

}

module.exports.help = {
  name: "mute"
}

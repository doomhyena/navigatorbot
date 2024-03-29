const Discord = require(`discord.js`);
//const fetch = require('node-fetch')

module.exports = {
    name: "imposter",
    aliases: ["sus"],
    categories: "Képek",
    permissions: "",
    description: "<felhasználó>",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        const user = message.mentions.users.first()
        const imp = [true, false];
        const imposter = imp[Math.floor(Math.random() * imp.length)];
        const crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"]
        const crewmate = crew[Math.floor(Math.random() * crew.length)];
        
        if(!user) {
          return message.channel.send(`${message.author} Please specify a user to eject by mentioning them!`)
        }
        
        const data = await fetch(`https://vacefron.nl/api//ejected?name=${user.username}&impostor=${imposter}&crewmate=${crewmate}`)
        
        const embed = new discord.MessageEmbed()
          .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL())
          .setTitle(`${message.author.username} decided to eject ${user.username}`)
          .setFooter(message.author.username)
          .setColor("BLUE")
          .setDescription(`[Click here, if the image didn't load!](${data.url})`)
          .setImage(`${data.url}`)
          .setTimestamp();
    
        message.channel.send({embeds: [embed]});
    }
}
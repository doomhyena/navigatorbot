const Discord = require(`discord.js`);

module.exports = {
    name: "nitrogen",
    aliases: ["nitro-generator", "nitro-generátor"],
    categories: "Fun",
    permissions: "",
    description: "Nitro kódot generál.",
    cooldown: "",
    usage: "",
    run: async(bot, message, args) => {
        let code = '';
        let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(var i = 0; i < 19; i++){
            code = code + dict.charAt(Math.floor(Math.random() * dict.length))
        }
        
        message.author.send({content: "Itt a legenerált nitro-d: \nhttps://discord.gift/${code}"})
        message.channel.send({content: `A generált nitro-d el lett küldve privátba!`})
    }
}
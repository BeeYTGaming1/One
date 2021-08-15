const { Util, MessageEmbed } = require('discord.js');
const { parse } = require('twemoji-parser');
module.exports = {
    name: 'emoji',
    category: 'fun',
    aliases: ['emo'],
    description: 'Hình ảnh phóng to của Emoji',
    usage: ',emo <:emoji>',
    run: (client, message, args) => {
        const emoji = args[0];
        if (!emoji) return message.channel.send("Nhập emoji gì đó đi bạn ơi!");

        let custom = Util.parseEmoji(emoji);
        const embed = new MessageEmbed()
            .setTitle(`Phiên Bản Phóng To Của Emoji: ${emoji}`)
            .setColor("RANDOM");

        if (custom.id) {    
            let link = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`;
            embed.setImage(link)
                .setFooter(`Emoji ID: ${custom.id}`);
            return message.channel.send(embed);
        } else {
            let parsed = parse(emoji, { assetType: 'png' });
            if (!parsed[0]) return message.channel.send('Emoji không hợp lệ');
            embed.setImage(parsed[0].url);
            return message.channel.send(embed);
        }
    }
}
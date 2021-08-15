const { checkSameRoom, noMusicEmbed } = require('../../utils');
const { Message } = require("discord.js");

module.exports = {
    name: 'unpause',
    aliases: ['tieptuc', 'resume'],
    category: 'music',
    Description: 'tiếp tục phát nhạc',
    run: async (client, Message, args) => {
        if (checkSameRoom(message)) return;
        if (!client.player.isPlaying(message)) return message.channel.send(noMusicEmbed());
        await client.player.resume(message);
        await client.player.pause(message);
        await client.player.resume(message);
        await message.react('▶');
    },
};
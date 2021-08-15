const { checkSameRoom } = require('../../utils');
module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'music',
    description: 'Chơi nhạc từ youtube, soundcloud, spotify',
    run: async (client, message, args) => {
        if (checkSameRoom(message)) return;
        await client.player.play(message, args.join(' '), true);
    }
}
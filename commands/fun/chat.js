const axios = require('axios');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'chat',
    category: 'fun',
    description: 'trò chuyện với bot',
    usage: ',chat <Nội Dung>',
    run: async (client, message, args) => {
        try {
            const res = await axios.get(`http://api.brainshop.ai/get?bid=158268&key=v78Nop6KysyGricm&uid=1&msg=${encodeURIComponent(args.join(' '))}`);
            message.channel.send(res.data.cnt);
        }
        catch(e) {
            message.channel.send('Bot lỗi thử lại sau');
        }
    }
}
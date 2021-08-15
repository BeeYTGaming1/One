const { getAudioUrl } = require('google-tts-api')
module.exports = {
    name: 'speak',
    aliases: ['s', 'talk'],
    category: 'fun',
    description: "Lệnh dành cho những người không mic",
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send('Nhập nội dung cho bot nói !');
        const string = args.join(' ');
        if (string.length > 200) return message.channel.send('Chỉ được phép nhập dưới 200 kí tự !');
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('Bạn chưa vào phòng voice nào cả !');
        const audioURL = await getAudioUrl(string, {
            lang: 'vi',
            slow: false,
            host: 'https://translate.google.com',
            timeout: 10000,
        });
        try {
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play(audioURL);
                dispatcher.on('finish', () => {
                    voiceChannel.leave();
                })
            })
        }
        catch(e) {
            message.channel.send('Lệnh lỗi, hãy sử dụng vào lúc khác !');
            console.error(e);
        };
    },
};
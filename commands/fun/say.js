module.exports = {
    name: 'youtube',
    category: 'link',
    aliases: ['yt'],
    description: 'Lấy Link Youtube',
    usage: ',yt',
    run: (client, message, args) => {
        if(message.member.roles.cache.has('876276344097476658')) {
            message.channel.send('https://www.youtube.com/channel/UCdKpH8cxEovnmPW968CrfYA');
            message.channel.send('https://www.youtube.com/channel/UCkiaaRHiW5r1AAi1Mkv_dTg');
        } else {
            message.channel.reply(`Bạn không có quyền`)
        }
    }
};
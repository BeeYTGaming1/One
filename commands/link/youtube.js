module.exports = {
    name: 'say',
    category: 'fun',
    aliases: ['s'],
    description: 'nó chuyện thông qua bot',
    usage: ',say <Nội Dung>',
    run: (client, message, args) => {
        if (message.deletable) message.delete();
            message.channel.send(args.join(' '))
    }
}
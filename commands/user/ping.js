module.exports = {
    name: 'ping',
    category: 'user',
    description: 'Xem độ trễ của BOT',
    usage: ',ping',
    run: (client, message, args) => {
        message.channel.send(`Pong! \`${client.ws.ping}\` ms`)
    }
}
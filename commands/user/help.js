const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');
const { category } = require('./ping');

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: ' user',
    description: 'Hướng Dẫn Cách Dùng Lệnh',
    usage: ',help [Tên Lệnh]',
    run: async (client, message, args) => {
        if (!args[0]) return getAll(client, message);
        return getCMD(client, message, args[0]);
    },
};

function getAll(client, message) {
    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Sử dụng ,help để xem chi tiết')

    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `\`${cmd.name}\``)
            .join(',')
    }

    const info = client.categories
        .map(cat => stripIndent`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);

    return message.channel.send(embed.setDescription(info))
}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()
    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    let info =`Không Tìm Thấy Lệnh **${input.toLowerCase()}**`;

    if (!cmd) return message.channel.send(embed.setColor('RED').setDescription(info));

    if (cmd.name) info = `**Tên Lệnh**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Tên Gọi Khác**: ${cmd.aliases.map(a => `\`${a}\``).join(',')}`;
    if (cmd.description) info += `\n**Chi Tiết Lệnh**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Cách Sử Dụng Lệnh**: ${cmd.usage}`;
        embed.setFooter(`Cú pháp: <> = bắt buộc, [] = không bắt buộc`);
    }

    return message.channel.send(embed.setColor('GREEN').setDescription(info));
}
// Require the necessary discord.js classes
const { channelMention } = require('@discordjs/builders');
const {Client, Intents, IntegrationApplication, Message } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { token } = require('./config.json');

// Creating a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code. Only once.
client.once('ready', () => {
    console.log('camr0 is online!');
});

// Creating commands smile :)

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong : )');
    } else if (commandName === 'server') {
        const serverEmbed = new MessageEmbed()
        .setColor('BLURPLE')
        .setTitle('Server info')
        .setImage('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.springfrog.com%2Fconverter%2Fascii-text-art%2Fgallery%2Frose.gif&f=1&nofb=1')
        .setURL('https://discord.gg/XFRRM4uvGx')
        .setDescription(`**Server name:** ${interaction.guild.name}\n **Server ID:** ${interaction.guild.id}\n  **Total members:** ${interaction.guild.memberCount}\n **Date created:** ${interaction.guild.createdAt}\n **Joined at:** ${interaction.guild.joinedAt}`)
        await interaction.reply({embeds: [serverEmbed]});
    } else if (commandName === 'user') {
        await interaction.reply('User info.');
    }
});

// Logging into discord with the client token
client.login(token); 
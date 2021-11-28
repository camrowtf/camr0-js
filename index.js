// Require the necessary discord.js classes
const {Client, Intents, IntegrationApplication } = require('discord.js');
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
        await interaction.reply(`Server name > ${interaction.guild.name}\nTotal members > ${interaction.guild.memberCount}\nDate created > ${interaction.guild.createdTimestamp}\n NSFW status > ${interaction.guild.nsfwLevel}`);
    } else if (commandName === 'user') {
        await interaction.reply('User info.');
    }
});

// Logging into discord with the client token
client.login(token); 
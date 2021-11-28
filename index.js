// Require the necessary discord.js classes
const {Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Creating a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code. Only once.
client.once('ready', () => {
    console.log('camr0 is online!');
});

// Logging into discord with the client token
client.login(token);
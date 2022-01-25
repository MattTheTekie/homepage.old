const { Client } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES'] });
client.startTimestamp = Date.now();
client.config = require('./config');
for (const handler of fs.readdirSync('./handlers').filter(file => file.endsWith('.js'))) require(`./handlers/${handler}`)(client);
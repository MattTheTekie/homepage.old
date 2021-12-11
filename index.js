/*
  > Index.Js is the entry point of our application.
*/

// We import the modules.
const config = require('./config');
const fs = require('fs');
const Dashboard = require('./dashboard/dashboard');
const { Client, Intents } = require('discord.js');

// We instiate the client and connect to database.
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES],
});

client.config = config;

// We listen for client's ready event.
client.on('ready', async () => {
	// console.log("Fetching members...");
	// for (const [id, guild] of client.guilds.cache) {
	//   await guild.members.fetch();
	// }
	// console.log("Fetched members.");

	console.log(`Bot is ready. (${client.guilds.cache.size} Guilds - ${client.channels.cache.size} Channels - ${client.users.cache.size} Users)`);

	client.user.setPresence({ status: 'dnd', activities: [{ name: 'Bot down!', type: 'WATCHING' }] });

	Dashboard(client);
});

// Listening for error & warn events.
client.on('error', console.error);
client.on('warn', console.warn);

for (const handler of fs.readdirSync('./handlers').filter(file => file.endsWith('.js'))) require(`./handlers/${handler}`)(client);

// We login into the bot.
client.login(config.token);
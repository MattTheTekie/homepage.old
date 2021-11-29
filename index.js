/*
  > Index.Js is the entry point of our application.
*/

/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow-restricted-names */

// We import the modules.
const config = require('./config');
const fs = require('fs');
const Dashboard = require('./dashboard/dashboard');
const { NodeactylClient } = require('nodeactyl');
const { Client, Intents, Permissions } = require('discord.js');

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

	client.user.setPresence({ status: 'dnd' });

	Dashboard(client);
});

// We listen for message events.
client.on('messageCreate', async (message) => {
	if (message.webhookId && message.channel.id == '812082273393704960' && message.embeds[0].title.startsWith('[Dashboard:master]')) {
		await message.reply({ content: 'Updating dashboard to latest commit...' });
		await sleep(1000);
		const Client = new NodeactylClient(config.pterodactylURL, config.pterodactylKey);
		await Client.restartServer(config.pterodactylId);
	}
});

// Listening for error & warn events.
client.on('error', console.error);
client.on('warn', console.warn);

for (const handler of fs.readdirSync('./handlers').filter(file => file.endsWith('.js'))) require(`./handlers/${handler}`)(client);

// We login into the bot.
client.login(config.token);
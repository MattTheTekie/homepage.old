module.exports = client => {

	client.setSettings = function setSettings(args) {
		try {
			client.con.query(`INSERT INTO settings (guildID) VALUES (?) ON DUPLICATE KEY UPDATE guildID = ${args}`, [args]);
		}
		catch (error) {
			client.users.cache.get(client.config.ownerID[0]).send(`${error}`);
			client.channels.cache.get(client.config.errorChannelID).send(`Error creating guild settings: ${error}`);
		}
	};
};
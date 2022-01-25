module.exports = client => {
	client.delSettings = function delSettings(args) {
		try {
			client.con.query(`DELETE FROM settings WHERE guildId = ${args}`);
		}
		catch (error) {
			client.users.cache.get(client.config.ownerID).send(`${error}`);
			client.channels.cache.get(client.config.errorChannelID).send(`Error deleting guild settings: ${error}`);
		}
	};
};
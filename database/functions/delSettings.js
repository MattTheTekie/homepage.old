module.exports = client => {

	client.delSettings = function delSettings(args) {
		try {
			client.con.query(`DELETE FROM Settings WHERE guildID = ${args}`);
		} catch (error) {
			client.users.cache.get(client.config.ownerID[0]).send(`${error}`);
			client.channels.cache.get(client.config.errorChannelID).send(`Error deleting guild settings: ${error}`);
		}
	}; 
}; 
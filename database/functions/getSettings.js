module.exports = client => {

	client.getSettings = async function get(args) {
		let settings = await client.query(`SELECT * FROM Settings WHERE guildID = ${args}`);
		if(!settings[0]){ 
			client.setSettings(args);
			settings = await client.query(`SELECT * FROM Settings WHERE guildID = ${args}`);
		}
		return settings[0];
	}; 


}; 
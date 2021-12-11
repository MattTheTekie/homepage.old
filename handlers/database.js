const mariadb = require('mariadb/callback');
const { readdirSync } = require('fs');
module.exports = async client => {
	// Database Functions
	let amount = 0;
	readdirSync('./functions').forEach(file => {
		require(`../functions${file}`)(client);
		amount = amount + 1;
	});
	console.log(`${amount} database functions loaded`);

	// Create a connection to the database
	client.con = mariadb.createConnection({
		host: client.config.mysqlhost,
		user: client.config.mysqluser,
		password: client.config.mysqlpass,
		database: client.config.mysqlDB,
	});
	console.log('MySQL database loaded');
};

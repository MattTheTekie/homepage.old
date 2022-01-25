const mariadb = require('mariadb/callback');
const { readdirSync } = require('fs');
module.exports = async client => {
	// Database Functions
	let amount = 0;
	readdirSync('./functions').forEach(file => {
		require(`../functions/${file}`)(client);
		amount = amount + 1;
	});
	client.logger.info(`${amount} database functions loaded`);

	// Create a connection to the database
	client.con = mariadb.createConnection({
		host: client.config.mysqlhost,
		user: client.config.mysqluser,
		password: client.config.mysqlpass,
		database: client.config.mysqlDB,
	});

	// Query function
	client.query = function query(args) {
		return new Promise((resolve, reject) => {
			client.con.query(args, (err, rows, fields) =>{
				if (err) return err;
				resolve(rows, fields);
			}).on('error', err => {
				reject(`Error: ${err.message}`);
			});
		});
	};
	client.logger.info('MySQL database loaded');
};

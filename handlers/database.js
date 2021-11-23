const mysql = require("mysql");
const { readdirSync } = require("fs");
module.exports = async client => {

	/**
	 * Database Functions
	 */
	 readdirSync("./database/functions/").forEach(file => {
		require(`../database/functions/${file}`)(client);
		let eventName = file.split(".")[0];
		console.log(`Loading Database function ${eventName}`);
	});

	//create a connection to the database
	client.con = mysql.createConnection({
		host: client.config.mysqlhost,
		user: client.config.mysqluser,
		password: client.config.mysqlpass,
		database: client.config.mysqlDB
	});
    
	client.con.connect(async err => {
		if (err) throw err;
		console.log("Connected to databse succesfully");
	}); 
}; 
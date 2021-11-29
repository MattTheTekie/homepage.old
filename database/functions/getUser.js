module.exports = client => {

	client.getUser = async function get(args) {
		const users = await client.query(`SELECT * FROM Users WHERE userID = ${args}`);
		return users[0];
	}; 


}; 
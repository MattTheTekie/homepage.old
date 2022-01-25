const Dashboard = require('../dashboard/dashboard');
module.exports = client => {
	client.user.setPresence({ status: 'dnd', activities: [{ name: 'Bot down!', type: 'WATCHING' }] });
	Dashboard(client);
};
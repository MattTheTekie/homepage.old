module.exports = client => {
	client.login(client.config.token);
	client.logger.info('Bot logged in');
};
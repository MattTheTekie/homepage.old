module.exports = client => client.on('error', client.logger.error);
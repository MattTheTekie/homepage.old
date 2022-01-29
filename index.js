const fs = require('fs');
const client = {};
client.startTimestamp = Date.now();
client.config = require('./config');
for (const handler of fs.readdirSync('./handlers').filter(file => file.endsWith('.js'))) require(`./handlers/${handler}`)(client);
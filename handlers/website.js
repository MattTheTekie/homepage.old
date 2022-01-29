// import modules.
const ejs = require('ejs');
const path = require('path');
const express = require('express');
const config = require('../config');
const session = require('express-session');

// instantiate express app and the session store.
const app = express();
const MemoryStore = require('memorystore')(session);

// export the dashboard as a function which call in ready event.
module.exports = async (client) => {
	// declare absolute paths.
	const dataDir = path.resolve(`${process.cwd()}${path.sep}smhsmh.club`);
	const templateDir = path.resolve(`${dataDir}${path.sep}templates`);

	// initialize the memorystore middleware with our express app.
	app.use(
		session({
			store: new MemoryStore({ checkPeriod: 86400000 }),
			secret: config.secret,
			resave: false,
			saveUninitialized: false,
		}),
	);

	// bind the domain.
	app.locals.domain = config.domain.split('//')[1];

	// set out templating engine.
	app.engine('ejs', ejs.renderFile);
	app.set('view engine', 'ejs');

	// host all of the files in the assets using their name in the root address.
	// A style.css file will be located at http://<your url>/style.css
	// You can link it in any template using src="/assets/filename.extension"
	app.use('/', express.static(path.resolve(`${dataDir}${path.sep}static`), {
		extensions: ['html'],
	}));

	// declare a renderTemplate function to make rendering of a template in a route as easy as possible.
	const renderTemplate = (res, req, template, data = {}) => {
		// Default base data which passed to the ejs template by default.
		const baseData = {
			path: req.path,
		};
		// render template using the absolute path of the template and the merged default data with the additional data provided.
		res.render(
			path.resolve(`${templateDir}${path.sep}${template}`),
			Object.assign(baseData, data),
		);
	};

	// Index endpoint.
	app.get('/', (req, res) => renderTemplate(res, req, 'index.ejs'));

	app.listen(config.port, null, null, () => {
		client.logger.info(`Dashboard running on port ${config.port}. (${config.domain})`);
		const timer = (Date.now() - client.startTimestamp) / 1000;
		client.logger.info(`Done (${timer}s)! I am running!`);
	});
};
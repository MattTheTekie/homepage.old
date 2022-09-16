const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const rn = new Date();
const date = `${minTwoDigits(rn.getMonth() + 1)}-${minTwoDigits(rn.getDate())}-${rn.getFullYear()}`;
function minTwoDigits(n) { return (n < 10 ? '0' : '') + n; }
const logger = createLogger({
	format: format.combine(
		format.colorize(),
		format.timestamp(),
		format.printf(log => `[${log.timestamp.split('T')[1].split('.')[0]} ${log.level}]: ${log.message}`),
	),
	transports: [
		new transports.Console(),
		new transports.File({ filename: `logs/${date}.log` }),
	],
	rejectionHandlers: [
		new transports.Console(),
		new transports.File({ filename: `logs/${date}.log` }),
	],
});
logger.info('Logger started');

// We import modules.
const ejs = require('ejs');
const path = require('path');
const express = require('express');
const config = require('./config.json');
const session = require('express-session');
const showdown = require('showdown');
const converter = new showdown.Converter();
converter.setOption('omitExtraWLInCodeBlocks', true);
converter.setOption('noHeaderId', true);
converter.setOption('simplifiedAutoLink', true);
converter.setOption('excludeTrailingPunctuationFromURLs', true);
converter.setOption('strikethrough', true);
converter.setOption('simpleLineBreaks', true);
converter.setOption('requireSpaceBeforeHeadingText', true);
converter.setOption('openLinksInNewWindow', true);
converter.setOption('emoji', true);
converter.setOption('underline', true);

// We instantiate express app and the session store.
const app = express();
const MemoryStore = require('memorystore')(session);

// We initialize the memorystore middleware with our express app.
app.use(
	session({
		store: new MemoryStore({ checkPeriod: 86400000 }),
		secret: config.secret,
		resave: false,
		saveUninitialized: false,
	}),
);

// We bind the domain.
app.locals.domain = config.domain.split('//')[1];

// We set out templating engine.
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');

const formidable = require('formidable');

// Post endpoint for uploading files
app.post('/fileupload', upload_file);
function upload_file(req, res) {
	if (req.method == 'POST') {
		// create an incoming form object
		const form = new formidable.IncomingForm();
		// store all uploads in the /uploads directory
		form.uploadDir = path.basename(path.dirname('/files/json_files/'));
		// every time a file has been uploaded successfully,
		// rename it to it's orignal name
		form.on('file', function(field, file) {
			fs.renameSync(`./files/${file.newFilename}`, `./files/${file.originalFilename}`);
		});
		// log any errors that occur
		form.on('error', function(err) { logger.error(err); });
		// once all the files have been uploaded, send a response to the client
		form.on('end', function() {
			// res.end('success');
			res.statusMessage = 'Process cashabck initiated';
			res.statusCode = 200;
			res.end();
		});
		// parse the incoming request containing the form data
		form.parse(req);
	}
}

const crypto = require('crypto');

/** Sync */
function suffix() {
	return crypto.randomBytes(5).toString('hex');
}

// Post endpoint for user to upload files
app.use(express.json());
app.post('/transcript', parseTranscript);
function parseTranscript(req, res) {
	if (req.method == 'POST') {
		const url = suffix();
		fs.writeFile(`transcript/${url}.json`, JSON.stringify(req.body), function(err) {
			if (err) throw err;
			console.log('File is created successfully.');
		});
		res.statusMessage = `https://smhsmh.club/transcript/${url}`;
		res.statusCode = 200;
		res.end();
	}
}

// Host root endpoint.
app.use('/', express.static(path.resolve('assets'), { extensions: ['html'] }));

// Host files.
app.use('/files/', express.static(path.resolve('files')));

// renderTemplate function
const renderTemplate = (res, req, template, files) => {
	res.render(
		path.resolve(`templates/${template}`),
		Object.assign({ files: files ? fs.readdirSync(`./${files}`) : null, fs, req, converter }),
	);
};

// All files
app.get('/', (req, res) => renderTemplate(res, req, 'index.ejs'));
app.get('/files', (req, res) => renderTemplate(res, req, 'files.ejs', 'files'));
app.get('/forks', (req, res) => renderTemplate(res, req, 'forks.ejs'));

app.get('/transcript/:file', (req, res) => renderTemplate(res, req, 'transcript.ejs', 'transcript'));

// Listen on port
app.listen(config.port, null, null, () => {
	logger.info(`Website running on port ${config.port}.`);
	logger.info(config.domain);
	const timer = (Date.now() - rn) / 1000;
	logger.info(`Done (${timer}s)! I am running!`);
});
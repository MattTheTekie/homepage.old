const express = require('express');
const config = require('./config');
const path = require('path');
const app = express();
app.use('/', express.static(path.resolve('files')));
app.get('/', (req, res) => res.redirect('/files'));
app.listen(config.filesport, () => {
  console.log(`Files hosted at: http://localhost:${config.filesport}/`);
});

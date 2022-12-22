const express = require('express');
const config = require('./config');
const path = require('path');
const app = express();
app.use('/files', express.static(path.resolve('files')));
app.get('/files', (req, res) => res.redirect('/filehost'));
app.get('/files/iplogger', (req, res) => {
    // Log the user ip address
    console.log(req.ip);
    res.redirect('/');
});
app.listen(config.filesport, () => console.log(`Files hosted at: http://localhost:${config.filesport}/`));
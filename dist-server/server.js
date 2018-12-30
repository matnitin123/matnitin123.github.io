const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression');

const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] === "http") {
        return res.redirect(301, 'https://' + req.host + req.url);
    } else {
        return next();
    }
});

app.use(compression());
app.use(express.static(path.join( __dirname, '../dist/')));
app.use('/*', express.static(path.join( __dirname, '../dist/index.html')));

//app.get('*', function(req, res) {
//    res.sendFile(path.join( __dirname, '../dist/index.html'));
//});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
});

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var moment = require('moment');
var envConfigs = require('./configs/env');
var uploads = require('./routes/uploads');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json({limit: '100mb'}));

app.get('/', function(req, res, next) {
    res.status(200).end();
});

//
app.use('/', function (req, res, next) {
    if(typeof req.user !== 'undefined' && typeof req.user.username !== 'undefined') {
        console.log(moment().format('YYYY-MM-DD HH:mm:ss') + ' [' + req.user.uername + ']');
    }
    else {
        console.log(moment().format('YYYY-MM-DD H:mm:ss') + ' [user unknow]');
    }
    next();
});

//add router
app.use('/upload', uploads);

var server =app.listen(envConfigs().appPort, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(moment().format('YYYY-MM-DD H:mm:ss') + '[server starts]');
    console.log('app listening at http://%s:%s', host, port);
});

module.exports = app;
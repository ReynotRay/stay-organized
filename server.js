var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/calendar_app');

require('./config/middleware.config')(app);

require('./config/router.express')(app);

app.use(require('./config/errors'));

app.listen(8080, function() {
    console.log('listenting on port 8080');
});

exports.app = app;
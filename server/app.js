var express = require('express');
var index = require('./routes/index');
var bodyParser = require('body-parser');
var app = express();




var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("Listening on port: ", port);
});


app.use(bodyParser.json());
app.use('/', index);
module.exports = app;


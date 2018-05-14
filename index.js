var fs = require('fs');
var https = require('https');
var express = require("express");
var bodyParser = require("body-parser");

var serverConfig = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
};

var app = express();
var HTTPS_PORT = 443;

var httpsServer = https.createServer(serverConfig, app).listen(HTTPS_PORT);

app.get(/^(.+)$/, function(req, res){ 
    switch(req.params[0]) {
        case '/prueba.html':
            res.send("prueba ok");
            break;
    default: res.sendFile( __dirname + "/index.html"); 
    }
 });

console.log('Servidor corriendo');

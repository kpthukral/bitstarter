#!/usr/bin/env node
var express = require('express');

var app = express.createServer(express.logger());
app.get('/', function(request,response) {
var fs = require('fs');
var buffer = new Buffer(27);
var infile= "./index.html";
buffer.write(fs.readFileSync(infile));

 response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

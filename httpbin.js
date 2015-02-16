#!/usr/bin/env node

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var bunyan = require('bunyan');

var APP_NAME = "httpbin.js";

var argv = require("nomnom")
  .script(APP_NAME)
  .option('port', {
    abbr: 'p',
    help: "specify port of the server",
    default: 35000
  })
  .option('body', {
    abbr: 'b',
    help: "put reqest attributes as reponse body",
    flag: true,
    default: false
  })
  .parse();
// console.log(argv);

var log = bunyan.createLogger({name: APP_NAME});

// http://expressjs.com/4x/api.html#request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(function (req, res) {
  // these are the interested attributes
  var attrs = {
    headers: req.headers,
    hostname: req.hostname,
    originalUrl: req.originalUrl,
    path: req.path,
    query: req.query,
    body: req.body,
  };
  log.info(attrs);
  if (argv.body) {
    res.status(200).json(attrs);
  }
  else {
    res.status(200).end();
  }
});

var server = app.listen(argv.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});

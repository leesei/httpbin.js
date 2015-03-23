#!/usr/bin/env node

var Bunyan = require('bunyan');
var Hapi = require('hapi');
var Url = require('url');

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
    help: "put request attributes as reponse body",
    flag: true,
    default: true
  })
  .parse();
// console.log(argv);

var log = Bunyan.createLogger({name: APP_NAME});

var server = new Hapi.Server();
server.connection({
  port: argv.port,
  routes: {
    cors: true
  }
});

server.route({
  method: '*',
  path: '/{path*}',
  handler: function (request, reply) {
    // these are the interested attributes
    var attrs = {
      headers: request.headers,
      hostname: request.info.hostname,
      origin: request.info.remoteAddress,
      url: 'http://' + request.headers.host + request.raw.req.url,
      path: request.path,
      query: request.query,
      body: request.payload
    };
    log.info(attrs);
    // log.info(request.raw.req);
    if (argv.body) {
      return reply(attrs);
    }
    else {
      return reply();
    }
  }
});


server.start(function() {
  console.log('Server running at:', server.info.uri);
});

// http://expressjs.com/4x/api.html#request
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(function (req, res) {
//   // these are the interested attributes
//   var attrs = {
//     headers: req.headers,
//     hostname: req.hostname,
//     originalUrl: req.originalUrl,
//     path: req.path,
//     query: req.query,
//     body: req.body,
//   };
//   log.info(attrs);
//   if (argv.body) {
//     res.status(200).json(attrs);
//   }
//   else {
//     res.status(200).end();
//   }
// });

// var server = app.listen(argv.port, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('listening at http://%s:%s', host, port);
// });

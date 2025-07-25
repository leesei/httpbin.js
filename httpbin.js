#!/usr/bin/env node

const Bunyan = require("bunyan");
const Hapi = require("@hapi/hapi");
const { Command } = require("commander");

const APP_NAME = "httpbin.js";

const program = new Command();
program
  .name(APP_NAME)
  .option("-p, --port <number>", "specify port of the server", 35000)
  .option("-b, --body", "put request attributes as response body", true)
  .option("--no-body", "do not respond with request attributes", false);
program.parse(process.argv);
const argv = program.opts();
// console.log(argv);

const log = Bunyan.createLogger({ name: APP_NAME });

const server = new Hapi.server({
  port: argv.port,
  routes: {
    cors: true,
  },
});

server.route({
  method: "*",
  path: "/{path*}",
  handler: (request, h) => {
    // these are the interested attributes
    const attrs = {
      headers: request.headers,
      hostname: request.info.hostname,
      origin: request.info.remoteAddress,
      url: "http://" + request.headers.host + request.raw.req.url,
      path: request.path,
      query: request.query,
      body: request.payload,
    };
    log.info(attrs);
    // log.info(request.raw.req);
    if (argv.body) {
      return attrs;
    } else {
      return "";
    }
  },
});

async function start() {
  try {
    await server.start();
    console.log("Server running at:", server.info.uri);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
start();

# httpbin.js

[![npm version](https://img.shields.io/npm/v/httpbin.js.svg?style=flat-square)](https://www.npmjs.com/httpbin.js)
[![Licence](https://img.shields.io/npm/l/httpbin.js.svg?style=flat-square)](https://www.npmjs.com/httpbin.js)
[![dependency status](https://img.shields.io/david/leesei/httpbin.js.svg?style=flat-square)](https://david-dm.org/leesei/httpbin.js)

A simple HTTP server that logs request attributes to [`bunyan`](https://github.com/trentm/node-bunyan) and (optionally) response body.  
Inspired by [HTTPbin](http://httpbin.org/), but supports arbitrary endpoint.

## Installation

```sh
npm install -g httpbin.js
npm install -g bunyan # this is optional but recommended
```

## Usage

### print to console

```sh
httpbin.js
```

If you have `bunyan` installed:

```sh
httpbin.js | bunyan
```

### log to file

```sh
httpbin.js | bunyan | tee log.json
```

### listen on other port

`httpbin.js` listens on 35000 by default, you can change it by:

```sh
httpbin.js -p 12345
```

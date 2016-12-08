# httpbin.js

[![npm](https://img.shields.io/npm/v/httpbin.js.svg?style=flat-square)](https://www.npmjs.com/httpbin.js)
![Licence](https://img.shields.io/npm/l/httpbin.js.svg?style=flat-square)
[![David](https://img.shields.io/david/leesei/httpbin.js.svg?style=flat-square)](https://david-dm.org/leesei/httpbin.js)

A simple HTTP server that logs request attributes to [`bunyan`](https://github.com/trentm/node-bunyan) and (optionally) response body.  
Insipred by [HTTPbin](http://httpbin.org/), but supports arbitrary endpoint.

## Installation

```sh
npm install -g httpbin.js
npm install -g bunyan # this is optional but recommanded
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
httpbin.js > log.json
```

You may then analyse `log.json` programmatically or view it with `bunyan`

```sh
echo log.json | bunyan
```

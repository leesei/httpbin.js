# httpbin.js

[![npm version](https://img.shields.io/npm/v/httpbin.js.svg?style=flat-square)](https://www.npmjs.com/package/httpbin.js) ![Licence](https://img.shields.io/npm/l/httpbin.js.svg?style=flat-square) [![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/leesei/httpbin.js?style=flat-square)](https://libraries.io/npm/httpbin.js)

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

# do not echo  request attributes back in response
httpbin.js --no-body
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

## Similar projects

[postmanlabs/httpbin: HTTP Request & Response Service, written in Python + Flask.](https://github.com/postmanlabs/httpbin)  
[mccutchen/go-httpbin: A reasonably complete and well-tested golang port of httpbin, with zero dependencies outside the go stdlib.](https://github.com/mccutchen/go-httpbin)  
[duskmoon314/httpbin-rs: HTTP Request & Response Service pretty like [httpbin](http://httpbin.org) but powered by Rust](https://github.com/duskmoon314/httpbin-rs)

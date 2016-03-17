'use strict';

const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

const PORT = 3000;

function createServer(http, staticPath) {
  const serve = serveStatic(staticPath, { 'index': ['index.html'] })

  http
    .createServer(function (req, res) {
      var done = finalhandler(req, res)
      serve(req, res, done)
    })
    .listen(PORT);
}

if (!module.parent) {
  createServer(http, process.argv[2]);
} else {
  module.exports = function (staticPath) {
    createServer(http, staticPath);
  };
}

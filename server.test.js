'use strict';

var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

module.exports = function (staticPath) {
  var serve = serveStatic(staticPath, { 'index': ['index.html'] })

  http
    .createServer(function (req, res) {
      var done = finalhandler(req, res)
      serve(req, res, done)
    })
    .listen(3000);
};

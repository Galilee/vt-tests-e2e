var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

var serve = serveStatic('nightwatch/public', { 'index': ['index.html'] })

http
  .createServer(function (req, res) {
    var done = finalhandler(req, res)
    serve(req, res, done)
  })
  .listen(3000);

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello RHEL 8!\n');
}).listen(3002, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3002/');
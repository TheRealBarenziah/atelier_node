const http = require('http')

http.createServer(function (req, res) {
  res.write('Server listening on port 3000.');
  res.end(); 
}).listen(3000); 
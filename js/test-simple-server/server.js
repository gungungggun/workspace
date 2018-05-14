var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (req, res) {
    fs.readFile('./index.html', 'utf-8', function (err, data) {
      // HTTPレスポンスヘッダを出力する
      res.writeHead(200, {
        'content-Type': 'text/html'
      });

      // HTTPレスポンスボディを出力する
      res.write(data);
      res.end();

    });
});

server.listen(8080)

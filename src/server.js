const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');
const path = require('path');
const app = express();
const CircularJSON = require('circular-json');

let q = [];
let send = null;

exports.start = new Promise(function(resolve, reject) {
  app.use('/static', express.static(path.join(__dirname, '/output')))
  app.use('/logger', express.static(path.join(__dirname, '/../')))
  app.use(function (req, res) {
    res.redirect('/logger/index.html')
  });

  const server = http.createServer(app);
  const wss = new WebSocket.Server({ server });

  wss.on('connection', function connection(ws, req) {
    const location = url.parse(req.url, true);

    ws.on('message', function incoming(message) {
      //console.log('received: %s', message);
    });

    send = ws
  });

  server.listen(8080, function listening() {
    console.log('Debugger listening on %d', server.address().port);
    resolve(true);
  });
});

exports.log = function (json) {
  q.push(json);
  const interval = setInterval(function(){
    if (send && send.readyState === 1) {
      q.push(json)
      send.send(CircularJSON.stringify(q));
      q = [];
      clearInterval(interval);
    }
  }, 500);
}
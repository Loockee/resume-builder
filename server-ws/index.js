const WebSocketServer = require('websocket').server;
const moment = require('moment');
const {v4: uuid} = require('uuid');
const http = require('http');

const server = http.createServer(function(/*request, response*/) {});
server.listen(1337, function() { });

const wsServer = new WebSocketServer({
  httpServer: server
});

function createMessage(msg) {
  const now = moment();
  const messageId = uuid();
  return {message: msg.utf8Data || msg, ts: now.format(),  messageId};
}

wsServer.on('request', (request) => {
  console.log(`connecting: ${request.origin}`);
  const connection = request.accept(null, request.origin);
  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      console.log('process websocket message');
      connection.sendUTF(JSON.stringify(createMessage(message)));
      setTimeout(() => {
        connection.sendUTF(JSON.stringify(createMessage('delayed message')));
      }, 1e3);
    }
  });

  connection.on('close', (connection) => {
    console.log('closing the connection', connection);
  });
});

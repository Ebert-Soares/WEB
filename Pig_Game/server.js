const express = require("express");
const app = express();
var server = require('http').createServer(app);
const path = require('path');
const io = require("socket.io")(server);

var room = io.sockets.adapter.rooms['some room'];



app.use(express.static(path.join(__dirname, "/src/")));

server.listen(8000);


io.on('connection', socket => {
  socket.join('some room');
  console.log('started');

  console.log(room.length);
});

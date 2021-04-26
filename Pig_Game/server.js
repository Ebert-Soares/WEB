const express = require("express");
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const { Server } = require("socket.io");
const io = new Server(server);

let users = -1;



app.use(express.static(path.join(__dirname, "/src/")));


io.on('connection', (socket) => {
  if (users < 0){
    console.log('started');
    users++;
    console.log(users);
    

}
    else{
      users++;
      console.log(users);

}

});

io.on('disconnect' , function () {
      users--;
      console.log('Got disconnect!');

      console.log(users);

  });

server.listen(8000);

var io = require('socket.io')(8000);

io.httpServer.on('listening', function () {
  console.log('listening on port', io.httpServer.address().port)
})

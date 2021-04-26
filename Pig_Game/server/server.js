const util = require("util"),
      io = require("socket.io"),
      _ = require("underscore"),
      player = require("./Player.js").player;

const socket, players, pendings, matches;

function init(){
  players = [];
  pendings = [];
  matches = {};

  socket = io.listen(8000);
  socket.set("transports", ["websocket"]);
  scoket.set("log lever", 2);
  setEventHandler();
}

const setEventHandler = () => {
      socket.sockets.on("connection", onSocketConnection);
  };

init();

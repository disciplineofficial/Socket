const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, cors = {
  origin: "*"
});
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.write(`<h1>Socket IO Start on Port : ${PORT}</h1>`);
    res.end();
});
io.on("connection", function(socket) {
  console.log("a user connected");
  io.emit("connected", `user connected`);
  socket.on(`message`, function(msg) {
    // console.log(msg)
    io.emit(`message`, msg);
  });
  socket.on(`disconnect`, function(msg) {
    console.log("user disconnected")
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

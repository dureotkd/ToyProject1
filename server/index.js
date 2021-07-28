const express = require("express");
const mysql = require('mysql');
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 4001;
const app = express();
const server = http.createServer(app);
server.listen(3051);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const db = mysql.createPool({
    host : 'localhost',
    user : 'dureotkd',
    password : 'slsksh33',
    database : 'annual'
});

io.on("connection", function(socket) {
    socket.emit("test",{asd : 'zzzzzzzzzzzzz'});
    socket.on("my other event", function(data) {
        console.log("response to my other event: ", data);
    });
})

app.get("/", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    db.query("SELECT * FROM user", (err, data) => {
        if(!err) res.send({ products : data });
        else res.send(err);
    })
});

io.on("connection", function(socket) {
  socket.emit("news", { message: "Hello World?" });
  socket.on("my other event", function(data) {
    console.log("response to my other event: ", data);
  });
});
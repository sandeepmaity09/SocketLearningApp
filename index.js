var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function (req, res) {
    // res.sendfile('./index.html');
    res.sendFile(path.join(__dirname, '/index.html'))
});

// Whenever someone connects this gets executed
io.on('connection', function (socket) {
    console.log('A user connected');

    // Send a message after a timeout of 4 seconds
    setTimeout(function () {
        socket.send('Sent a message 4 seconds after connection');
    }, 4000)

    // Whenever someone disconnects this code executed
    socket.on('disconnect', function () {
        console.log('A User disconnected');
    })
})

http.listen(4203, function () {
    console.log('listening on port 4203')
})


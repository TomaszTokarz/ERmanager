const express = require('express');
require('./db/mongoose');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketio(server);
const publicDirectoryPath = path.join(__dirname, '../../public');

app.use(express.static(publicDirectoryPath));

io.on('connection', () => {
    console.log('New WebSocket connection');

    io.emit('message', 'Connected to server with Socket.IO');
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});

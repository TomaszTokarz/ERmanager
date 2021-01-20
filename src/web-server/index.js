const express = require('express');
require('./db/mongoose');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const User = require('./db/models/user');
const Room = require('./db/models/room');
const mocks = require('./mocks');
const { crop, optimize } = require('./sharp/image');

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketio(server);
const publicDirectoryPath = path.join(__dirname, '../../public');

app.use(express.static(publicDirectoryPath));
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../../public', 'index.html'));
});

io.on('connection', socket => {
    console.log('New WebSocket connection');

    socket.emit('first_connection', 'Connected to server with Socket.IO');

    socket.on('login', async loggedUser => {
        const user = await User.findOneAndUpdate(loggedUser, {
            token: 'test123token',
            error: null,
        });

        socket.emit('token', user.token);
    });

    socket.on('get_settings', async data => {
        const rooms = await Room.find({});

        socket.emit('settings', {
            server: 'UP',
            db: 'UP',
            adminPanels: 1,
            time: new Date().getTime(),
            rooms: rooms,
            error: null,
        });
    });

    socket.on('get_room', async chosenRoom => {
        const room = await Room.findOne({
            path: chosenRoom.location,
        });

        socket.emit('room', room);
    });

    socket.on('add_room', async room => {
        const forbiddenPaths = ['admin', 'init', 'settings', 'add-room'];
        const existingRoom = await Room.find({
            $or: [
                {
                    name: room.name,
                },
                {
                    path: room.path,
                },
            ],
        });

        const background = await crop(room.background, {
            width: 1280,
            height: 720,
        }).then(img => {
            return optimize(img);
        });

        if (!existingRoom.length && forbiddenPaths.indexOf(room.path) === -1) {
            new Room({
                ...room,
                background,
                status: 'READY',
                hints: [],
            })
                .save()
                .then(() => {})
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.log('Room exists, or path is incorrect');
        }
    });

    socket.on('add_hint', async hint => {
        const room = await Room.findById(hint.roomId);
        const { text, background } = hint;

        room.hints.splice(hint.hintIndex, 0, {
            text,
            background,
        });

        room.save();
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});

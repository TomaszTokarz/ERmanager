const express = require('express');
require('./db/mongoose');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const User = require('./db/models/user');

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
        console.log(data);

        var mockedStartTime = new Date().getTime() - Math.random() * 3200000;

        socket.emit('settings', {
            server: 'UP',
            db: 'UP',
            adminPanels: 1,
            time: new Date().getTime(),
            rooms: [
                {
                    name: 'Mistery of the Meth Man',
                    roomPanels: 1,
                    id: 'fakeId123',
                    path: '/mistery',
                    status: 'READY',
                },
                {
                    name: 'Claustrophobic Hell',
                    roomPanels: 1,
                    id: 'fakeIdForNextRooMM666',
                    path: '/hell',
                    status: 'IN_GAME',
                    startTime: mockedStartTime,
                    endTime: mockedStartTime + 3600000,
                },
            ],
            error: null,
        });
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});

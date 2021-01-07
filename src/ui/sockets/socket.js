import socketIOClient from 'socket.io-client';

import store from '../store/configureStore';
import { setToken, setSettings } from '../actions/application';
import { setRoom } from '../actions/room';

const socket = socketIOClient();

socket.on('first_connection', data => {
    console.log(data);

    if (store.getState().application.token) {
        console.log('Logged In');
    } else {
        socket.emit('login', {
            name: 'admin',
            password: 'admin',
        });
    }
});

socket.on('token', token => {
    store.dispatch(setToken(token));
});

socket.on('settings', settings => {
    store.dispatch(setSettings(settings));
});

socket.emit('get_room', {
    location: location.pathname,
});

socket.on('room', room => {
    store.dispatch(setRoom(room));
});

export default socket;

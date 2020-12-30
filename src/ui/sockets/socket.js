import socketIOClient from 'socket.io-client';

import store from '../store/configureStore';
import { setToken, setSettings } from '../actions/application';

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
    console.log('token:', token);

    store.dispatch(setToken(token));
});

socket.on('settings', settings => {
    console.log('settings:', settings);

    store.dispatch(setSettings(settings));
});

export default socket;

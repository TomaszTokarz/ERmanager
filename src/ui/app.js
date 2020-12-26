import React from 'react';
import ReactDOM from 'react-dom';

const jsx = <div>React!</div>;

ReactDOM.render(jsx, document.getElementById('app'));

// SOCKET.IO
import socketIOClient from 'socket.io-client';

const socket = socketIOClient();

socket.on('message', data => {
    console.log(data);
});
// SOCKET.IO

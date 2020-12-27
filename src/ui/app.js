import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SettingsPage from '../ui/components/pages/settings/Page';
import configureStore from './store/configureStore';
import { setToken } from './actions/application';

const store = configureStore();

const MainComponent = () => (
    <div>
        <div>Main Page</div>
        <Link to="/settings">Settings</Link>
        <br />
        <Link to="/init">Init</Link>
        <br />
        <Link to="/admin">Admin</Link>
    </div>
);

const InitComponent = () => <div>Init Page</div>;

const AdminComponent = () => <div>Admin Page</div>;

const routes = (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={MainComponent} exact={true} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/init" component={InitComponent} />
            <Route path="/admin" component={AdminComponent} />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('app'));

// SOCKET.IO
import socketIOClient from 'socket.io-client';

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
// SOCKET.IO

// TEST PURPOSES ONLY, RETURNS WHOLE STORE ON EACH CHANGE
store.subscribe(() => {
    console.log(store.getState());
});

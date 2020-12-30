import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import SettingsPage from '../ui/components/pages/settings/Page';
import store from './store/configureStore';

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

// TEST PURPOSES ONLY, RETURNS WHOLE STORE ON EACH CHANGE
store.subscribe(() => {
    console.log(store.getState());
});

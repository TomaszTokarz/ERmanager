import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from './Router';
import store from './store/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app'),
);

// TEST PURPOSES ONLY, RETURNS WHOLE STORE ON EACH CHANGE
store.subscribe(() => {
    console.log(store.getState());
});

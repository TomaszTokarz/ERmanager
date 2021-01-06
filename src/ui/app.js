import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import Router from './routers/Router';
import store from './store/configureStore';
import colors from './styles/colors';
import images from './styles/images';

const App = styled.div`
    font-family: 'Trebuchet MS';
    font-size: 16px;
    background: ${images.background};
    color: ${colors.fontColorMain};
    display: flex;
    height: 100vh;
`;

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Router />
        </App>
    </Provider>,
    document.getElementById('app'),
);

// TEST PURPOSES ONLY, RETURNS WHOLE STORE ON EACH CHANGE
store.subscribe(() => {
    console.log(store.getState());
});

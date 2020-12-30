import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import applicationReducer from '../reducers/application';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
        combineReducers({
            application: applicationReducer,
        }),
        composeEnhancers(applyMiddleware(thunk)),
    );
};

export default configureStore();

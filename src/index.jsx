import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Main from 'components/Main.jsx'
import { r1 } from 'states/reducers.js';

window.onload = function() {
    const store = createStore(combineReducers({
        r1
    }), compose(applyMiddleware(thunkMiddleware)));

    store.subscribe(() =>
        // TODO: Write to local storage
        console.log(store.getState())
    )

    ReactDOM.render(
        <Provider store={store}>
            <Main/>
        </Provider>,
        document.getElementById('root')
    );
};

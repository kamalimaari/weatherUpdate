import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {routerMiddleware} from 'react-router-redux';
import reducers from './reducers';
import rootSaga from './sagas/root-saga';
import createSagaMiddleware from 'redux-saga';
import {cityDetails, cityWeather} from "./component";
import {composeWithDevTools} from 'redux-devtools-extension';

const createHistory = require("history").createBrowserHistory;
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const middlewares = applyMiddleware(sagaMiddleware, routerMiddleware(history));
const store = createStore(reducers, composeWithDevTools(middlewares));

sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route exact path='/' history={ history } component={cityDetails}/>
                <Route exact path='/weatherUpdate' component={cityWeather}/>
            </App>
        </Router>
    </Provider>
    , document.getElementById('root')
);
serviceWorker.unregister();
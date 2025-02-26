import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import 'materialize-css/dist/css/materialize.min.css';
import reducers from './reducers';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root')
);
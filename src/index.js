import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducers from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReducers, devToolsEnhancer(), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>    
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
    
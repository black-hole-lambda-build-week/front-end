import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/combo';
import { LOGIN_SUCCESS } from './actions';
import Cookies from 'js-cookie'

const tokenizer = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    !window.localStorage ?
      Cookies.set('token', `${action.payload}`) :
      localStorage.setItem('token', JSON.stringify(action.payload));
  }
  next(action);
};

const store = createStore(reducer, applyMiddleware(tokenizer, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

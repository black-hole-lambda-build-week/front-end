import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/combo';
import { LOGIN_SUCCESS } from './actions';

const tokenizer = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('token', action.payload);
  }
  next(action);
};

const store = createStore(reducer, applyMiddleware(tokenizer, thunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

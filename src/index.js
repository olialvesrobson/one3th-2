import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, firestore } from './resources/config/firestore/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <App firestore={firestore} />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();

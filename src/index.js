import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import {createBrowserHistory} from 'history';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import studentsFunc from './redux/reducers/students';
const history = createBrowserHistory();
const store = createStore(studentsFunc);


ReactDOM.render(

  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </ Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

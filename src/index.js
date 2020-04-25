import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import styling
import 'bootstrap/dist/css/bootstrap.min.css';

import rootReducer from "./redux/reducers/index";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer,
  applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

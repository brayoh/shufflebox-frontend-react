import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
// import './styles/styles.css';

// Import Provider from redux and configure store
import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';

import './styles/main.scss';
import './styles/styles.scss';

// Set initialState as {} for now
const store = configureStore({});
render(
  <Provider store = {store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configStore from './store/store';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadMovies} from './actions/moviesActions';
import './styles/style.scss';

import App from './components/App';

const store = configStore();
store.dispatch(loadMovies());

render (
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>, 
  document.getElementById('app')
);
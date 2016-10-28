import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import MoviePage from './components/MoviePage';
import MovieDetails from './components/MovieDetails';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MoviePage} />
    <Route path="movie/:id" component={MovieDetails} />
  </Route>
);
// import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MOVIES_SUCCESS':
      return Object.assign({}, state, {movies: action.movies});

    case 'LOAD_MOVIE_SUCCESS':
      return Object.assign({}, state, {movie: action.movie});

    case 'INCREASE_SELECTED_MOVIE':
      return Object.assign({}, state, {selectedMovie: state.selectedMovie + 1})

    case 'DECREASE_SELECTED_MOVIE':
      return Object.assign({}, state, {selectedMovie: state.selectedMovie - 1})

    default:
      return state;
  }
}
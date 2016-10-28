import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../actions/moviesActions';
import MovieList from './MovieList';

class MoviesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.keyNavigation = this.keyNavigation.bind(this);
  }

  componentDidMount () {
    document.addEventListener('keydown', this.keyNavigation);
  }

  keyNavigation (e) {
    let keyCode = e.keyCode;
    if (keyCode === 37 && this.props.selectedMovie > 0) {
      console.log('DECREASE_SELECTED_MOVIE')
      this.props.actions.decreaseSelectedMovie();
    }
    if (keyCode === 39 && this.props.selectedMovie < this.props.movies.length -1) {
      console.log('INCREASE_SELECTED_MOVIE')
      this.props.actions.increaseSelectedMovie();
    }
  }

  render() {
    const {movies, selectedMovie} = this.props;

    return (
      <div className="movies container">
        <h1 className="movies__title" >Cinema</h1>
        <h3 className="movies__section-title" >Les + vus</h3>
        {movies.length > 0 ? <MovieList movies={movies} selectedMovie={selectedMovie} /> : 'Loading data...'}
      </div>
    );
  }
}

MoviesPage.propTypes = {
  movies: PropTypes.array.isRequired,
  selectedMovie: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies,
    selectedMovie: state.selectedMovie
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);

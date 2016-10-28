import React, {PropTypes} from 'react';
import Movie from './Movie';

const MovieList = ({movies, selectedMovie}) => {

  return (
    <ul className="movies__list">
      {movies.map(movie =>
        <Movie key={movie.id} movie={movie} active={movies[selectedMovie].id === movie.id}/>
      )}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  selectedMovie: PropTypes.number.isRequired
};

export default MovieList;
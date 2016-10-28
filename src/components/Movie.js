import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Card from './Card';

const Movie = ({movie, active}) => {
  let className = "movies__list__item";
  if (active) className += ' active';
  return (
    <li className={className} >
      <Link to={'/movie/' + movie.id}>
        <Card item={movie} />
      </Link>
    </li>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired
};

export default Movie;
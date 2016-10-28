import React from 'react';
import { IndexLink, Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../actions/moviesActions';


export class MovieDetails extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state ={
      buttons: [
        {
          to: '/',
          text: 'Retour',
          active: true
        },
        {
          to: '',
          text: 'Play',
          active: false
        }
      ]
    };

    this.keyNavigation = this.keyNavigation.bind(this);
  }

  componentWillMount() {
    const movieId = parseInt(this.props.params.id) - 1;

    this.props.actions.loadMovie(movieId);
  }

  componentDidMount () {
      document.addEventListener('keydown', this.keyNavigation);
  }

  keyNavigation (e) {
    let keyCode = e.keyCode;
    if (keyCode === 37) {
      console.log('PREVIOUS_BUTTON', this.props)
      // this.props.actions.navigatePrevious();
    }
    if (keyCode === 39) {
      console.log('NEXT_BUTTON')
      // this.props.actions.navigatePrevious();
    }
  }

  render () {
    console.log(this.state.buttons)
  const {movie} = this.props

    if (movie.title) {
      return (
        <div className="movie container">
          <div className="movie__detail">
            <h3>{movie.title}</h3>
            <h5>{movie.release} |  {movie.type}</h5>
            <img src={movie.image} />
            <p>{movie.synopsis}</p>
          </div>
          <div className="movie__actions">
            {this.state.buttons.map((button, index) =>
              <Link key={index} to={button.to} className={button.active ? "movie__actions__btn btn active" : "movie__actions__btn btn"} >{button.text}</Link>
            )}
          </div>
        </div>
      )
    }

    return (
      <div>
        'loading movie details ...'
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    movie: state.movie
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
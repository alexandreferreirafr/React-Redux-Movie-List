
function fetchData (url) {
  let promise = new Promise( function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.addEventListener('readystatechange', function () {
      if (req.readyState == 4) {
        if(req.status == 200) {
            resolve(JSON.parse(req.responseText));
        } else {
          reject (req.statusText)
        }
      }
    });
    req.send(null);
  });
  return promise;
}

export function loadMoviesSuccess (movies) {
  return {
    type: 'LOAD_MOVIES_SUCCESS',
    movies
  }
}

export function loadMovieSuccess (movie) {
  return {
    type: 'LOAD_MOVIE_SUCCESS',
    movie
  }
}

export function loadMovies () {
  return function (dispatch) {
    return fetchData('https://startmeup.herokuapp.com/api/movies').then( movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadMovie (id) {
  return function (dispatch) {
    return fetchData('https://startmeup.herokuapp.com/api/movies/' + id).then( movie => {
      dispatch(loadMovieSuccess(movie));
    }).catch(error => {
      throw(error);
    });
  }
}

export function increaseSelectedMovie () {
  return {
    type: 'INCREASE_SELECTED_MOVIE'
  }
}

export function decreaseSelectedMovie () {
  return {
    type: 'DECREASE_SELECTED_MOVIE'
  }
}
// .src/components/MovieShow.js
import React from "react"
import { Redirect, useParams} from "react-router-dom";

// Here we add `match` to the arguments so we can access the path information
// in `routerProps` that is passed from MoviesPage.js
function MovieShow({ movies }) {
  // call useParams to access the `params` from the url:
  // the dynamic portion of our /movies/:movieId path

  const params = useParams();
  // console.log(params.movieId == 2 ? "I'm Se7en" : "wrong")
  if (params.movieId == 2) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      {/*
        And here we access the `movieId` stored in `params` to render 
        information about the selected movie
      */}
      <h4>Title: {movies[params.movieId].title}</h4>
    </div>
  );
}

export default MovieShow;

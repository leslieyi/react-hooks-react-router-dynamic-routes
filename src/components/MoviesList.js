// ./src/components/MoviesList.js
import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {

    // The movies prop is an object containing each movie. To iterate over this object, we'll use Object.keys(movies) to get an array of keys, then map over this array. Since the keys in the object are also the id values for each movie, the elements in .map() are referred to as movieID. We can use movieID directly in some of the attributes like key, but also use it to get information from the movies object, as we see with movies[movieID].title.
  const renderMovies = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ));

  return <ul>{renderMovies}</ul>;
}

export default MoviesList; 
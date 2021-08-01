import React from "react";
import { Route , useRouteMatch} from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";
// import the custom `useRouteMatch` hook from React Router

function MoviesPage({ movies }) {
    // useRouteMatch returns a special object with information about the currently matched route
    const match = useRouteMatch();
    // console.log("match = ", match);


    return (
      <div>
        <Route exact path={match.url}>
          <h3>Choose a movie from the list</h3>
        </Route>

        <Route path={`${match.url}/:movieId`}>
          <MovieShow movies={movies} />
        </Route>
        
        <MoviesList movies={movies} />

  
   
      </div>
    );
  }
export default MoviesPage;

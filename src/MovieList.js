import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';// MovieList.js
import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};





render() 
  export default Movielist;
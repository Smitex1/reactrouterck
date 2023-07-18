import React from 'react';
import { Link } from 'react-router-dom';

const MovieDescription = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe title="Movie Trailer" width="560" height="315" src={movie.trailerLink} frameborder="0" allowfullscreen></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;

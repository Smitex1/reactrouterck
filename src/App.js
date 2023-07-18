import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDescription from './MovieDescription';
import Movie from './Movie';// App.js
import React from 'react';
import MovieList from './MovieList';

const App = () => {
  const movies = []; // Define the 'movies' variable here

  return (
    <div>
      <h1>Movie App</h1>
      <MovieList movies={movies} />
    </div>
  )
}





export default App;

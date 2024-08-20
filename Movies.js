//src/Movies.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ".Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "b9af3f767b678e56d3b788fff042a648";
  const apiKey = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  const addToCart = (movie) => {
    const existingItems = JSON.parse(localStorage.getItem("cart-Items")) || [];
    existingItems.push(movie);
    localStorage.setItem("cartItems", JSON.stringify(existingItems));
  };

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movies-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            ,img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

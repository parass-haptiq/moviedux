import React, { useState } from "react";

import "../styles.css";

import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All Generes");
  const [rating, setRating] = useState("All");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const matchesSearch = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  };

  const matchesGenere = (movie, genre) => {
    return (
      genre === "All Generes" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const fliterMovies = movies.filter(
    (movie) => matchesGenere(movie, genre) && matchesSearch(movie, search)
  );

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const fliterGenre = (movie, genre) => {
    return (
      genre === "All Generes" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const fliterRating = (movie, rating) => {
    return genre === "All Generes";
  };
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies...."
        value={search}
        onChange={handleSearch}
      ></input>

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenre}
          >
            <option>All Generes</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>

          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRating}
          >
            <option>All</option>
            <option>Good</option>

            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {fliterMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
}

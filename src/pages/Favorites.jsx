import React, { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

export default function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    console.log(favorites);
    if (favorites) {
      setMovies(JSON.parse(favorites));
    }
  }, []);

  return (
    <div style={{ width: "100%", padding: "50px" }}>
      {movies.length > 0 ? (
        <MovieGrid movies={movies} />
      ) : (
        <h2>There are no favorite movies</h2>
      )}
    </div>
  );
}

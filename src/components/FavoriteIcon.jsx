import { IconHeart } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";

export default function FavoriteIcon({ movie }) {
  const [filledColor, setFilledColor] = useState("none");

  useEffect(() => {
    const isFavorite = checkIfMovieIsFavorite(movie.imdbID);
    setFilledColor(isFavorite ? "white" : "none");
  }, []);
  const handleClick = () => {
    const isFavorite = checkIfMovieIsFavorite(movie.imdbID);

    if (isFavorite) {
      // remove from favorites
      removeFromFavorites();
      setFilledColor("none");
    } else {
      // add to favorites
      addToFavorites();
      setFilledColor("white");
    }
  };
  const checkIfMovieIsFavorite = (imdbID) => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!Array.isArray(favorites)) {
      return false;
    }

    return favorites.map((movie) => movie.imdbID).includes(imdbID);
  };

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    let newFavorites = [];
    if (Array.isArray(favorites)) {
      newFavorites = favorites;
    }
    localStorage.setItem("favorites", JSON.stringify([...newFavorites, movie]));
  };

  const removeFromFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    let newFavorites = [];
    if (Array.isArray(favorites)) {
      newFavorites = favorites;
    }
    newFavorites = newFavorites.filter((m) => m.imdbID !== movie.imdbID);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };
  return <IconHeart onClick={handleClick} fill={filledColor} />;
}

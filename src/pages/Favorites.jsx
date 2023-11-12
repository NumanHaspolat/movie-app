import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import Cards from "../components/Cards";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    // Retrieve stored favorites from localStorage
    const storedFavs = JSON.parse(localStorage.getItem("userFavorites")) || [];
    const API_KEY = process.env.REACT_APP_TMDB_KEY;

    const fetchFavoriteMovies = async () => {
      const favoriteMoviesDetails = await Promise.all(
        storedFavs.map(async (movieId) => {
          if (movieId) {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
            );
            const data = await response.json();
            return data;
          }
          return null;
        })
      );

      setFavoriteMovies(
        favoriteMoviesDetails.filter((movie) => movie !== null)
      );
    };

    fetchFavoriteMovies();
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <span onClick={handleGoBack}>
        <ArrowBackIcon className="go-back fav-back" />
      </span>
      <div className="favorites-container">
        {favoriteMovies.map((movie) => (
          <Cards
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            bp={movie.backdrop_path}
            pp={movie.poster_path}
            voteAvg={movie.vote_average}
            id={movie.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;

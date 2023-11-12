import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/Toastify";
import Cards from "./Cards";
import { Grid } from "@mui/material";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const { movies, loading, getMovies } = useContext(MovieContext);
  const { currentUser } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser && searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search a movie");
      navigate("/login");
    } else {
      toastWarnNotify("Please enter a text");
    }
  };
  // ...

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search a movie..."
          className="inp"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn">Search</button>
      </form>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid
              sx={{
                textAlign: "center",
              }}
              item
              xs={12}
              sm={6}
              md={4}
              key={movie.id}
            >
              <Cards
                title={movie.title}
                overview={movie.overview}
                bp={movie.backdrop_path}
                pp={movie.poster_path}
                voteAvg={movie.vote_average}
                id={movie.id}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
export default Main;

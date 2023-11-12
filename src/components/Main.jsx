import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Cards from "./Cards";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid, Pagination, PaginationItem } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { toastWarnNotify } from "../toastify/ToastNotify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const { movies, loading, getMovies, totalPages, currentPage } =
    useContext(MovieContext);
  const { currentUser } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser && searchTerm) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search for a movie");
      navigate("/login");
    } else {
      toastWarnNotify("Please enter a search term");
    }
  };

  const handlePageChange = (event, value) => {
    getMovies(`${FEATURED_API}&page=${value}`);
  };

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
        <Grid container spacing={2}>
          {[...Array(8)].map((_, index) => (
            <Grid
              sx={{
                textAlign: "center",
              }}
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
            >
              <Box>
                <Skeleton
                  variant="rectangular"
                  width={280}
                  height={350}
                  animation="wave"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          {movies.length === 0 ? (
            <div className="no-movies-alert">
              <p>
                Oh no! The movie cosmos couldn't find anything matching your
                quest. Try changing your search constellation!
              </p>
            </div>
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
      )}

      <div className="pagination-div">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              className={item.selected ? "selected-page" : ""}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </div>
    </>
  );
};

export default Main;

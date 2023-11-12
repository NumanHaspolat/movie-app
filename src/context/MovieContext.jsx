import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

var API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
        setCurrentPage(res.data.page);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const values = { movies, getMovies, loading, totalPages, currentPage };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;

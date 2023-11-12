import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoSection from "../components/VideoSection";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState("");
  const [videoKey, setVideoKey] = useState();
  const { id } = useParams();
  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetails;

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl, videoUrl]);

  return (
    <div className="bg-detail">
      <div className="detail-div">
        <h2>{title}</h2>
        {videoKey && <VideoSection videoKey={videoKey} />}
        <div className="main-detail">
          <img
            className="poster"
            src={poster_path ? baseImageUrl + poster_path : defaultImage}
            alt="poster"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h5>Overview</h5>
              <p>{overview}</p>
            </div>
            <ul>
              <li>{"Release Date : " + release_date}</li>
              <li>{"Rate : " + vote_average}</li>
              <li>{"Total Vote : " + vote_count}</li>
              <li>
                <Link to={-1}>Go Back</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

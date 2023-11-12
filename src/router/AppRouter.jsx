import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";
import { Favorite } from "@mui/icons-material";
import Favorites from "../pages/Favorites";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default AppRouter;

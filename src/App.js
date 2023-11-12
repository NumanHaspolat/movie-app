import AppRouter from "./AppRouter";

import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import MovieContextProvider from "./context/MovieContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthContextProvider>
      <MovieContextProvider>
        <ToastContainer />
        <AppRouter />
      </MovieContextProvider>
    </AuthContextProvider>
  );
}

export default App;

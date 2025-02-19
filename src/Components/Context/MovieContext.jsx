import React, { createContext, useState, useEffect } from "react";
import GlobalApi from "../../Services/GlobalApi";


export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [allMovies, setallMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GlobalApi.getMovieById.then((resp) => {
      setMovies(resp.data.results);
    });
    GlobalApi.getTrendingVideos.then((resp) => {
      setallMovies(resp.data.results);
    });
  }, []);

  return (
    <MovieContext.Provider value={{ allMovies,movies }}>
      {children}
    </MovieContext.Provider>
  );
};

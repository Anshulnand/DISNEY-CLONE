import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import ProducitonHouse from "./Components/ProducitonHouse";
import GenreMovieList from "./Components/GenreMovieList";
import SearchPage from "./Components/SearchPage";
import { MovieProvider } from "./Components/Context/MovieContext";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Slider />
            <ProducitonHouse />
            <GenreMovieList />
          </motion.div>
        } />
        <Route path="/search" element={
          <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <SearchPage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <AnimatedRoutes />
      </Router>
    </MovieProvider>
  );
};

export default App;

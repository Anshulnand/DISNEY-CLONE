// Layout.js
import React from 'react';
import Header from './Header';
import Slider from './Slider';
import ProducitonHouse from './ProducitonHouse';
import GenreMovieList from './GenreMovieList';
import SearchBox from './SearchBox';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Slider />
      <ProducitonHouse />
      <GenreMovieList />
      <SearchBox />
      {children} {/* This will render the page-specific content */}
    </div>
  );
};

export default Layout;

import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
const dimensionwidth = window.innerWidth;
const Slider = () => {
  // Corrected function name and call
  const [MovieList, setMovieList] = useState([]);
  const elementref = useRef();
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const scrollRight = (element) => {
    element.scrollLeft += dimensionwidth - 110;
  };
  const scrollLeft = (element) => {
    element.scrollLeft -= dimensionwidth - 110;
  };
  useEffect(() => {
    getTrendingMovies(); // Corrected function name
  }, []);

  return (
    <>
      <div >
        <HiChevronLeft
          className=" hidden md:block absolute text-white text-[30px] cursor-pointer top-[280px] "
          onClick={() => scrollLeft(elementref.current)}
        ></HiChevronLeft>
        <HiChevronRight
          className="hidden md:block absolute text-white text-[30px] cursor-pointer right-0 top-[280px]"
          onClick={() => scrollRight(elementref.current)}
        ></HiChevronRight>
        <div
          className="flex w-full px-16 py-4 overflow-x-auto scrollbar-hide scroll-smooth "
          ref={elementref}
        >
          {MovieList.map((item, index) => (
            <img
              key={item.id}
              src={IMAGE_BASE_URL + item.backdrop_path}
              className="min-w-full rounded-lg md:h-[440px] object-cover object-left-top mr-5  hover:border-2 border-gray-200 transition-all duration-75 ease-in-out"
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;

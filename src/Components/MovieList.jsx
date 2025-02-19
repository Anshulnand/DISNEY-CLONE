import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";

import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";
const MovieList = ({ genreId,index_ }) => {
  const [movieList, setMovieList] = useState([]); 
  const elementRef=useRef(null);
  useEffect(() => {
    getMoviesByGenreId();
  }, []);

  const slideRight=(element)=>{
    element.scrollLeft+=500;
}
const slideLeft=(element)=>{
    element.scrollLeft-=500;
}

  const getMoviesByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  return (
    <div className="relative">
         <HiChevronLeft onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute left-0  ${index_%3==0 ?'top-[80px]':'top-[150px]'}
         `}/>

    <div ref={elementRef} className="flex overflow-auto scroll-smooth scrollbar-hide gap-5 pt-5 pb-5">
      {movieList.map((item,index) => (
        <>
         {index_%3==0? <HrMovieCard movie={item}></HrMovieCard>
           : <MovieCard movie={item} ></MovieCard> }
        </>
      ))}
    </div>
    <HiChevronRight onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden scroll-smooth md:block
           p-2 cursor-pointer z-10 top-[150px]
            absolute right-0  ${index_%3==0 ?'top-[100px]':'top-[150px]'}
           `}/> 
    </div>
  );
};

export default MovieList;

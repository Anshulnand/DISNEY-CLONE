import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const HrMovieCard = ({movie}) => {
  return (
    <>
    <section className=''>
    <img
      src={IMAGE_BASE_URL + movie.backdrop_path}
      className="w-[110px] md:w-[200px] rounded-lg 0 cursor-pointer hover:border-2 hover:scale-110 transition-all duration-75 ease-in-out hover:border-white "
    />
    <h2 className='w-[110px] md:w-[200px] mt-2'>{movie.title}</h2>
    </section>
  </>
  )
}

export default HrMovieCard
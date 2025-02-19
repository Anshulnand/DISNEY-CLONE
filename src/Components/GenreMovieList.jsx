import React from 'react'
import GenreList from '../Constant/GenreList'
import MovieList from './MovieList'

GenreList
const GenreMovieList = () => {
  return (
    <div>
    {GenreList.map((item,index)=>
    (
        <div className='text-white p-2'>
            <h2>{item.name}</h2>
            <MovieList genreId={item.id} index_={index}></MovieList>
        </div>
    ))}
    </div>
  )
}

export default GenreMovieList
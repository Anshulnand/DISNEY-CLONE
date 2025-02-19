import axios from "axios";

// Base URL of the movie API
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "839ef7ce42ba3364f1b22af07a60ecb7";  // Your actual API key
const allMovies="https://api.themoviedb.org/3/discover/movie?api_key=839ef7ce42ba3364f1b22af07a60ecb7"
const movieByGenreBaseURL=`https://api.themoviedb.org/3/discover/movie?api_key=839ef7ce42ba3364f1b22af07a60ecb7`;
// Function to get trending videos
const getTrendingVideos=axios.get(movieBaseUrl+
  "/trending/all/day?api_key="+api_key);
  const getMovieByGenreId=(id)=>
  axios.get(movieByGenreBaseURL+"&with_genres="+id)

const getMovieById=axios.get(allMovies)
// Exporting the function so it can be used elsewhere
export default{
  getTrendingVideos,
  getMovieByGenreId,
  getMovieById
}

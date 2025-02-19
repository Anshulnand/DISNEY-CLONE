import React, { useContext, useRef, useState, useEffect } from "react";
import axios from "axios";
import { MovieContext } from "./Context/MovieContext";
import { HiMagnifyingGlass } from "react-icons/hi2";
import LazyLoad from "react-lazy-load";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const API_KEY = "839ef7ce42ba3364f1b22af07a60ecb7"; // Replace with your actual API key
const SearchPage = () => {
  const searchitem = useRef();
  const { allMovies } = useContext(MovieContext);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchActive, setSearchActive] = useState(false); // ✅ To track if search is active

  // ✅ Show all movies initially
  useEffect(() => {
    if (!searchActive) setFilteredMovies(allMovies);
  }, [allMovies, searchActive]);

  // ✅ Search API call
  const handleSearch = async () => {
    const query = searchitem.current.value.trim();
    if (!query) {
      setSearchActive(false); // Reset to default movies
      setFilteredMovies(allMovies);
      return;
    }

    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: API_KEY ,
            query: query,
          },
        }
      );

      setSearchActive(true); // ✅ Indicate search is active
      setFilteredMovies(response.data.results || []);
      console.log(allMovies)
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div>
      {/* Search Input */}
      <div className="flex items-center justify-center mt-6">
        <div className="relative w-[250px] md:w-[550px]">
          <input
            type="text"
            placeholder="Search movies, series..."
            ref={searchitem}
            onChange={handleSearch} // ✅ Live search
            className="w-full px-5 py-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-lg"
          />
          <HiMagnifyingGlass className="absolute right-4 top-3 text-gray-500 text-2xl" />
        </div>
      </div>

      {/* Movie List */}
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-white text-center text-2xl font-semibold mb-5">
          {searchActive ? "Search Results" : "Trending Movies"}
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {filteredMovies.length > 0 ? (
            filteredMovies.map(
              (movie, index) =>
                movie.poster_path && (
                 <LazyLoad>
                    <img
                  loading="lazy" 
                    key={index}
                    src={IMAGE_BASE_URL + movie.poster_path}
                    className="w-[110px] md:w-[120px] rounded-lg hover:border-2 hover:scale-110 cursor-pointer hover:border-white transition-all duration-150 ease-in-out"
                    alt={movie.title}
                  />
                  </LazyLoad>
                )
            )
          ) : (
            <p className="text-center text-gray-500">No movies found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

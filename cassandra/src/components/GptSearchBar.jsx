import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_KEY, lang, OPTIONS } from "../utils/constants";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGptMovieResult } from "../utils/gptSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(GOOGLE_KEY);
  const searchMovieByTitle = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    const moviesData = json.results;
    return moviesData;
  };
  const handleGptSearch = async () => {
    // console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Dhmaal,Golmal,Sholay,Don,Argylle";
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = response.text();
    const recommendedMovies = text.split(",");
    console.log(recommendedMovies);
    const promiseArray = recommendedMovies.map((movie) =>
      searchMovieByTitle(movie)
    );
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    const filteredTmdbResults = tmdbResults.map((moviesFromSearch) => {
      return moviesFromSearch.filter((movie) => {
        return recommendedMovies.some(
          (recommendedMovie) =>
            recommendedMovie.toLowerCase().trim() ===
            movie.title.toLowerCase().trim()
        );
      });
    });
    console.log(filteredTmdbResults);
    const flattenedResults = filteredTmdbResults.flat();
    dispatch(addGptMovieResult(flattenedResults));
  };
  return (
    <div className="absolute z-30 mt-[15%] w-full flex justify-center">
      <form
        className="w-[45rem] bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        ></input>
        <button
          className="col-span-3 bg-red-700 text-white rounded-lg m-4 py-2 px-4"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchBar;

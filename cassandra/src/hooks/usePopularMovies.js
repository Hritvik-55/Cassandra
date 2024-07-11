import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovieData();
  }, []);
};

export default usePopularMovies;

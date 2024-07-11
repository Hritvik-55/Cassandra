import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovieData();
  }, []);
};

export default useUpcomingMovies;

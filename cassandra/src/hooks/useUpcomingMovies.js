import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
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
    !upcomingMovies && getUpcomingMovieData();
  }, []);
};

export default useUpcomingMovies;

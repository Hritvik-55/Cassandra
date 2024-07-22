import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
const useTopRatedMovies = () => {
  const topRated = useSelector((store) => store.movie.topRatedMovies);
  const dispatch = useDispatch();
  const getTopRatedMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRated && getTopRatedMovieData();
  }, []);
};

export default useTopRatedMovies;

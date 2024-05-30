import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlaying(json.results));
  };
  useEffect(() => {
    getNowPlayingMovieData();
  }, []);
};

export default useNowPlayingMovies;

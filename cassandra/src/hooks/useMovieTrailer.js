import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json?.results?.filter(
      (video) => video.name === "Official Trailer"
    );
    // console.log(filterData);
    const trailer = filterData.length
      ? filterData[0]
      : filterData[filterData.length - 1];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);
};
export default useMovieTrailer;

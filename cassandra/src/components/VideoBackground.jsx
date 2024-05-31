import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

/* eslint-disable react/prop-types */
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title=" video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

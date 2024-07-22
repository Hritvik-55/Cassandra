import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies, movieNames } = gpt;
  //Add the shimmer UI
  if (!movieNames) return null;

  return (
    <div className="text-white absolute z-40 bg-black opacity-85 my-[74vh] w-[90%] px-5 overflow-x-hidden ">
      {movieNames.map(
        (movieName, index) =>
          gptMovies[index] && (
            <MovieList
              key={movieName}
              title={movieName}
              movies={gptMovies[index]}
            />
          )
      )}
    </div>
  );
};

export default GptMovieSuggestions;

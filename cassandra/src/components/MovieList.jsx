/* eslint-disable react/prop-types */
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold text-white">{title}</h1>

      <div className="w-full flex overflow-x-scroll no-scrollbar overflow-hidden">
        <span>⬅️</span>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

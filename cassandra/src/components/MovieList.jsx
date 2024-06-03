/* eslint-disable react/prop-types */
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <h1>{title}</h1>

      <div className="w-full flex overflow-x-scroll">
        {movies?.map((movie) => (
          <MovieCards key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

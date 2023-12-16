import Movie from "./Movie.component";
import { MovieModal } from "../../modal/movie.modal";

export default function MovieList({
  movies,
  onSelectMovie,
}: {
  movies: MovieModal[];
  onSelectMovie: (imdbId: string) => void;
}) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

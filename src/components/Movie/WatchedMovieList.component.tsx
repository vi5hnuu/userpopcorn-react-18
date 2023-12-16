import WatchedMovie from "./WatchedMovie.component";
import { MovieModal } from "../../modal/movie.modal";

export default function WatchedMoviesList({
  watched,
  onDeleteWatched,
}: {
  watched: MovieModal[];
  onDeleteWatched: (imdbId: string) => void;
}) {
  return (
    <ul className="list-none flex flex-col gap-2">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}

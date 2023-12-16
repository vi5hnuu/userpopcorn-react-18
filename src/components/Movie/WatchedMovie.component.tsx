import { MovieModal } from "../../modal/movie.modal";

export default function WatchedMovie({
  movie,
  onDeleteWatched,
}: {
  movie: MovieModal;
  onDeleteWatched: (imdbId: string) => void;
}) {
  return (
    <li className="relative p-2 transition-all text-black rounded-md hover:bg-slate-300">
      <h3 className="text-center font-semibold">{movie.Title}</h3>
      <div className="flex gap-4">
        <img className="inline-block h-32" src={movie.Poster} alt={`${movie.Title} poster`} />
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.Runtime} min</span>
          </p>

          <button
            className="absolute text-xs top-2 right-2 w-6 aspect-square rounded-full bg-gray-400 hover:bg-gray-600 hover:text-white transition-all"
            onClick={() => onDeleteWatched(movie.imdbID)}
          >
            X
          </button>
        </div>
      </div>
    </li>
  );
}

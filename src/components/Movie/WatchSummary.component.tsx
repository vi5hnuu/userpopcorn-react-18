import { average } from "../../utils/utils";
import { MovieModal } from "../../modal/movie.modal";

export default function WatchedSummary({ watchedMovies }: { watchedMovies: MovieModal[] }) {
  const avgImdbRating = average(watchedMovies.map((movie) => +movie.imdbRating));
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating));
  const avgRuntime = average(watchedMovies.map((movie) => +movie.Runtime.split(" ")[0]));

  return (
    <div className="text-black bg-slate-100 rounded-md overflow-hidden shadow-3xl mb-4">
      <h2 className="bg-gray-200 px-4 py-2 border-b border-slate-500">Movies you watched</h2>
      <div className="grid sm:grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-2 p-4">
        <p className="flex gap-2">
          <span>#️⃣</span>
          <span>{watchedMovies.length} movies</span>
        </p>
        <p className="flex gap-2">
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p className="flex gap-2">
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p className="flex gap-2">
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

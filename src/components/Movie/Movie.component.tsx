import React from "react";
import { MovieModal } from "../../modal/movie.modal";

export default function Movie({
  movie,
  onSelectMovie,
}: {
  movie: MovieModal;
  onSelectMovie: (imdbId: string) => void;
}) {
  return (
    <li
      onClick={() => onSelectMovie(movie.imdbID)}
      className="cursor-pointer hover:scale-[1.02] rounded-t-sm overflow-hidden transition-all"
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="w-full text-xl text-black sm:h-60 md:h-72 lg:h-96 object-fill origin-top-left aspect-auto bg-slate-50"
      />
      <h3 className="text-white px-2 py-1 line-clamp-1 rounded-b-md bg-slate-500" title={movie.Title}>
        {movie.Title}
      </h3>
      <div className="flex gap-2 text-black">
        <span>🗓</span>
        <span>{movie.Year}</span>
      </div>
    </li>
  );
}

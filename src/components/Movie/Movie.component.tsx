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
      className="cursor-pointer flex flex-col hover:scale-[1.02] rounded-t-sm overflow-hidden transition-all"
    >
      <div className="flex-1">
        <img
          src={movie.Poster}
          alt={`${movie.Title} poster`}
          className="block w-full text-xl text-black h-[88%] md:h-96 lg:h-96 object-fill origin-top-left aspect-auto bg-slate-50"
        />
        <h3 className="text-white px-2 py-1 h-[10%] line-clamp-1 rounded-b-md bg-slate-500" title={movie.Title}>
          {movie.Title}
        </h3>
      </div>
      <div className="flex gap-2 text-black">
        <span>🗓</span>
        <span>{movie.Year}</span>
      </div>
    </li>
  );
}

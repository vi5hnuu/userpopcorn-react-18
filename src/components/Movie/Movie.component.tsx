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
      className="cursor-pointer flex flex-col p-1 rounded-md border border-slate-300 hover:scale-[1.02] hover:border-primary h-60 lg:h-96 rounded-t-sm overflow-hidden transition-all"
    >
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
            className="block text-xl rounded-t-sm text-black h-44 lg:h-80 w-full bg-slate-50"
          />
        </div>
        <h3
          className="text-white h-8 line-clamp-1 px-2 py-1 w-full text-ellipsis rounded-b-md bg-slate-500"
          title={movie.Title}
        >
          {movie.Title}
        </h3>
      </div>
      <div className="flex items-center h-8 gap-2 text-black">
        <span>🗓</span>
        <span>{movie.Year}</span>
      </div>
    </li>
  );
}

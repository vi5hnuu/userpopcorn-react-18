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
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

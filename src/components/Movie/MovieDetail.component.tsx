import Loader from "./../Loader.component";
import StarRating from "./../StarRating.component";
import { MovieModal } from "../../modal/movie.modal";
import { useEffect } from "react";
import { API_KEY } from "./../../utils/constants";
import { useState, useRef } from "react";
import { useKey } from "./../../hooks/useKey";

export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}: {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: MovieModal) => void;
  watched: MovieModal[];
}) {
  const [movie, setMovie] = useState<MovieModal | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userRating, setUserRating] = useState<number>(0);

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  const isWatched = movie && watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = movie && watched.find((movie) => movie.imdbID === selectedId)?.userRating;

  const isTop = movie && movie.imdbRating > 8;

  function handleAdd() {
    if (!movie) return;
    const newWatchedMovie = {
      imdbID: selectedId,
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
      Released: movie.Released,
      Genre: movie.Genre,
      Plot: movie.Plot,
      Actors: movie.Actors,
      Director: movie.Director,
      imdbRating: Number(movie.imdbRating),
      Runtime: movie.Runtime,
      userRating,
      countRatingDecisions: countRef.current,
    } as MovieModal;

    onAddWatched(newWatchedMovie);
    onCloseMovie();

    // setAvgRating(Number(imdbRating));
    // setAvgRating((avgRating) => (avgRating + userRating) / 2);
  }

  useKey("Escape", onCloseMovie);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`);
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!movie) return;
      document.title = `Movie | ${movie.Title}`;

      return function () {
        document.title = "usePopcorn";
        // console.log(`Clean up effect for movie ${title}`);
      };
    },
    [movie]
  );
  if (!movie) return <></>;
  return (
    <div className="details">
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={movie.Poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{movie.Title}</h2>
              <p>
                {movie.Released} &bull; {movie.Runtime}
              </p>
              <p>{movie.Genre}</p>
              <p>
                <span>⭐️</span>
                {movie.imdbRating} IMDb rating
              </p>
            </div>
          </header>

          {/* <p>{avgRating}</p> */}

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>Starring {movie.Actors}</p>
            <p>Directed by {movie.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}

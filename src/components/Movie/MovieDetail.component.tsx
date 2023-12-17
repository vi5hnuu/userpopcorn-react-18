import Loader from "./../Loader.component";
import StarRating from "./../StarRating.component";
import { MovieModal } from "../../modal/movie.modal";
import { useEffect } from "react";
import { API_KEY } from "./../../utils/constants";
import { useState, useRef } from "react";
import { useKey } from "./../../hooks/useKey";
import ErrorMessage from "../Error.component";

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
  const [movieDetail, setMovieDetail] = useState<{ movie: MovieModal | null; isLoading: boolean; error?: string }>({
    movie: null,
    isLoading: false,
  });
  const [userRating, setUserRating] = useState<number>(0);

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  const isAlreadyWatched = movieDetail.movie && watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = movieDetail.movie && watched.find((movie) => movie.imdbID === selectedId)?.userRating;

  const isTop = movieDetail.movie && +movieDetail.movie.imdbRating > 8;

  function handleAdd() {
    if (!movieDetail.movie) return;
    const newWatchedMovie = {
      ...movieDetail.movie,
      userRating,
      countRatingDecisions: countRef.current,
    } as MovieModal;

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }
  useKey("Escape", onCloseMovie);

  useEffect(() => {
    const controller = new AbortController();
    async function getMovieDetails() {
      setMovieDetail({ movie: null, isLoading: true });
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`, {
        signal: controller.signal,
      });
      const data = await res.json();
      setMovieDetail({ movie: data, isLoading: false });
    }

    getMovieDetails().catch((err) => {
      setMovieDetail({ movie: null, isLoading: false, error: err.name === "AbortError" ? undefined : err.message });
    });
    return () => {
      controller.abort();
    };
  }, [selectedId]);

  useEffect(
    function () {
      if (!movieDetail.movie) return;
      document.title = `Movie | ${movieDetail.movie.Title}`;
      return function () {
        document.title = "usePopcorn";
      };
    },
    [movieDetail.movie]
  );

  return (
    <div className="relative flex flex-col justify-center">
      {movieDetail.error && <ErrorMessage className="text-center" message={movieDetail.error} />}
      {movieDetail.isLoading && !movieDetail.error && <Loader loading={movieDetail.isLoading} />}
      {movieDetail.movie && (
        <>
          <header className="flex flex-col gap-4">
            <button
              className="inline-block w-fit sticky -top-16 left-1 text-gray-600 text-2xl hover:text-gray-900 hover:-translate-x-1 transition-all"
              onClick={onCloseMovie}
            >
              &larr;
            </button>
            <img
              className="dlock w-3/4 self-center"
              src={movieDetail.movie.Poster}
              alt={`Poster of ${movieDetail.movie} movie`}
            />
            <div className="flex flex-col gap-2 text-black">
              <h2 className="font-semibold text-center">{movieDetail.movie.Title}</h2>
              <p>
                {movieDetail.movie.Released} &bull; {movieDetail.movie.Runtime}
              </p>
              <p>{movieDetail.movie.Genre}</p>
              <p className="flex gap-2">
                <span>⭐️</span>
                {movieDetail.movie.imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating my-2">
              {!isAlreadyWatched ? (
                <>
                  <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
                  {userRating > 0 && (
                    <button
                      className="font-semibold bg-primary px-4 py-2 rounded-md my-2 hover:bg-primary-light text-white"
                      onClick={handleAdd}
                    >
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p className="text-black font-bold">
                  You rated this movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p className="text-black text-justify border-b border-gray-400 pb-1">
              <em>{movieDetail.movie.Plot}</em>
            </p>
            <p className="text-black font-medium text-sm mt-2">
              <span className="font-bold">Starring : </span> {movieDetail.movie.Actors}
            </p>
            <p className="text-black font-medium text-sm">
              <span className="font-bold">Directed by : </span> {movieDetail.movie.Director}
            </p>
          </section>
        </>
      )}
    </div>
  );
}

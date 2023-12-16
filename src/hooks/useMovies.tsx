import { useState, useEffect, useCallback } from "react";
import { MovieModal } from "../modal/movie.modal";
import { API_KEY as KEY } from "./../utils/constants";

export function useMovies(query: string) {
  const [movieDetails, setMovieDetails] = useState<{ movies: MovieModal[]; error: string | null; isLoading: boolean }>({
    movies: [],
    error: null,
    isLoading: false,
  });

  const fetchMovies = useCallback(
    async (controller: AbortController) => {
      try {
        setMovieDetails((movieDetails) => ({ ...movieDetails, error: null, isLoading: true }));
        const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovieDetails({ movies: data.Search, error: null, isLoading: true });
      } catch (err: any) {
        setMovieDetails({ movies: [], error: err.message, isLoading: false });
      } finally {
        setMovieDetails((movieDetails) => ({ ...movieDetails, error: null, isLoading: false }));
      }
    },
    [query]
  );

  useEffect(
    function () {
      const controller = new AbortController();
      fetchMovies(controller);
      return function () {
        controller.abort(); //cancel old request
      };
    },
    [query, fetchMovies]
  );

  return movieDetails;
}

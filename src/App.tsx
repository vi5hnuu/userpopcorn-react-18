import { useState } from "react";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import { useMovies } from "./hooks/useMovies";
import { MovieModal } from "./modal/movie.modal";
import Loader from "./components/Loader.component";
import Main from "./components/Main.component";
import ErrorMessage from "./components/Error.component";
import NavBar from "./components/Nav.component";
import MovieList from "./components/Movie/MovieList.component";
import WatchedSummary from "./components/Movie/WatchSummary.component";
import WatchedMoviesList from "./components/Movie/WatchedMovieList.component";
import MovieDetails from "./components/Movie/MovieDetail.component";
import Search from "./components/Search.component";
import Box from "./components/Box.component";
import NumResults from "./components/NumResults.component";

export default function App() {
  const [movieNameQuery, setMovieNameQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { movies, isLoading, error } = useMovies(movieNameQuery);
  const [watched, setWatched] = useLocalStorageState<MovieModal[]>([], "watched");

  function handleSelectMovie(imdbId: string) {
    setSelectedId((selectedId) => (imdbId === selectedId ? null : imdbId));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie: MovieModal) {
    setWatched((watched: MovieModal[]) => [...watched, movie]);
  }

  function handleDeleteWatched(imdbId: string) {
    setWatched((watched: MovieModal[]) => watched.filter((movie) => movie.imdbID !== imdbId));
  }

  return (
    <>
      <NavBar>
        <Search query={movieNameQuery} setQuery={setMovieNameQuery} />
        <NumResults className="" count={movies.length} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader loading={isLoading} />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
          {error && <ErrorMessage className="text-center" message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watchedMovies={watched} />
              <WatchedMoviesList watched={watched} onDeleteWatched={handleDeleteWatched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

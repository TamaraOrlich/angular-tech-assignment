import { createReducer, on } from '@ngrx/store';
import { clearPopularMovies, clearSearchedMovies, setMovieDetail, setMovieRating, setPopularMovies, setSearchedMovies } from './movies.action';
import { Movie, MoviesResponseData } from '../../models/movie';

export const popularMovies: MoviesResponseData | null = null;

export const PopularMoviesReducer = createReducer<MoviesResponseData | null>(
    popularMovies,
    on(setPopularMovies, (state, { popularMovies }) => {
        return {
            ...state,
            page: popularMovies.page,
            results: [...(state?.results || []), ...popularMovies.results],
            total_pages: popularMovies.total_pages,
            total_results: popularMovies.total_results
        };
    }),
    on(clearPopularMovies, () => {
        return null;
    }),
);

export const searchedMovies: MoviesResponseData | null = null;

export const SearchedMoviesReducer = createReducer<MoviesResponseData | null>(
    searchedMovies,
    on(setSearchedMovies, (state, { searchedMovies }) => {
        if (searchedMovies.results.length > 0) {
            return {
                ...state,
                page: searchedMovies.page,
                results: searchedMovies.results,
                total_pages: searchedMovies.total_pages,
                total_results: searchedMovies.total_results
            };
        } else {
            return null;
        }
    }),
    on(clearSearchedMovies, () => {
        return null;
    }),
);

export const movieDetail: Movie | null = null;

export const MovieDetailReducer = createReducer<Movie | null>(
    movieDetail,
    on(setMovieDetail, (state, { movieDetail }) => {
        return movieDetail;
    })
);

export const movieRating = {};

export const MovieRatingReducer = createReducer(
    movieRating,
    on(setMovieRating, (state, { movieId, rating }) => {
        return { ...state, [movieId]: rating };
    })
);
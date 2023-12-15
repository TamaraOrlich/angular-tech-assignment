import { createReducer, on } from '@ngrx/store';
import { setPopularMovies, setSearchedMovies } from './movies.action';
import { MoviesResponseData } from '../../models/movie';

export const popularMovies: MoviesResponseData = {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0
}

export const popularMoviesReducer = createReducer(
    popularMovies,
    on(setPopularMovies, (state, { popularMovies }) => {
        return {
            ...state,
            page: popularMovies.page,
            results: [...state.results, ...popularMovies.results],
            total_pages: popularMovies.total_pages,
            total_results: popularMovies.total_results
        }
    })
)

export const searchedMovies: MoviesResponseData = {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0
}

export const searchedMoviesReducer = createReducer(
    searchedMovies,
    on(setSearchedMovies, (state, { searchedMovies }) => {
        return {
            ...state,
            page: searchedMovies.page,
            results: searchedMovies.results,
            total_pages: searchedMovies.total_pages,
            total_results: searchedMovies.total_results
        }
    })
)
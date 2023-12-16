import { createAction, props } from '@ngrx/store';
import { Movie, MoviesResponseData } from '../../models/movie';

export const getPopularMovies = createAction(
  '[Movies] Get popular movies',
  props<{ page: number }>()
);

export const setPopularMovies = createAction(
  '[Movies] Set popular movies',
  props<{ popularMovies: MoviesResponseData }>()
);

export const getSearchedMovies = createAction(
  '[Movies] Get searched movies',
  props<{ query: string }>()
);

export const setSearchedMovies = createAction(
  '[Movies] Set searched movies',
  props<{ searchedMovies: MoviesResponseData }>()
);

export const clearSearchedMovies = createAction('[Movies] Clear Searched Movies');

export const getMovieDetail = createAction(
  '[Movie] Get movie detail',
  props<{ id: number }>()
);

export const setMovieDetail = createAction(
  '[Movie] Set movie detail',
  props<{ movieDetail: Movie }>()
);
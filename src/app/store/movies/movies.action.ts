import { createAction, props } from '@ngrx/store';
import { MoviesResponseData } from '../../models/movie';

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
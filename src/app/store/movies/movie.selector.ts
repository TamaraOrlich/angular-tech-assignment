import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Movie, MoviesResponseData } from '../../models/movie';


interface PopularMoviesState extends MoviesResponseData { }
interface SearchedMoviesState extends MoviesResponseData { }
interface MovieDetailState extends Movie { }
interface MovieRatingState { [x: string]: any; }


const selectPopularMoviesState = createFeatureSelector<PopularMoviesState>('popularMovies');
const selectSearchedMoviesState = createFeatureSelector<SearchedMoviesState>('searchedMovies');
const selectMovieDetailState = createFeatureSelector<MovieDetailState>('movieDetail');
const selectMovieRatingState = createFeatureSelector<MovieRatingState>('movieRating');


export const selectPopularMovies = createSelector(selectPopularMoviesState, state => state);
export const selectSearchedMovies = createSelector(selectSearchedMoviesState, state => state);
export const selectMovieDetail = createSelector(selectMovieDetailState, state => state);
export const selectMovieRating = createSelector(
    selectMovieRatingState,
    (state: MovieRatingState, props: { movieId: number; }) => state[props.movieId]
);
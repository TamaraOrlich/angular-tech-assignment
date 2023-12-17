import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from "../../services/api.service";
import { getMovieDetail, getPopularMovies, getSearchedMovies, setMovieDetail, setPopularMovies, setSearchedMovies } from "./movies.action";
import { Observable, map, switchMap, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MoviesResponseData } from "../../models/movie";
import { showToast } from "../toastManager/toast.action";

@Injectable()
export class MoviesEffect {
  constructor(
    private actions: Actions,
    private apiService: ApiService
  ) { }

  getPopularMovies$ = createEffect(() =>
    this.actions.pipe(
      ofType(getPopularMovies),
      switchMap((action) =>
        this.apiService.getPopularMovies(action.page).pipe(
          map((response: MoviesResponseData) =>
            setPopularMovies({ popularMovies: response })
          ),
          catchError((error) => {
            return of(showToast({ message: error.message }));
          })
        )
      )
    )
  );

  getSearchedMovies$ = createEffect(() =>
    this.actions.pipe(
      ofType(getSearchedMovies),
      switchMap(({ query }) =>
        this.apiService.getSearchedMovies(query).pipe(
          map(response => setSearchedMovies({ searchedMovies: response })),
          catchError((error) => {
            return of(showToast({ message: error.message }));
          })
        ),
      )
    )
  );

  getMovieDetail$ = createEffect(() =>
    this.actions.pipe(
      ofType(getMovieDetail),
      switchMap(({ id }) =>
        this.apiService.getMovieDetail(id).pipe(
          map(response => setMovieDetail({ movieDetail: response })),
          catchError((error) => {
            return of(showToast({ message: error.message }));
          })
        ),
      )
    )
  );

}
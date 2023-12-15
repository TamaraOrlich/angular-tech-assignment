import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from "../../services/api.service";
import { getPopularMovies, getSearchedMovies, setPopularMovies, setSearchedMovies } from "./movies.action";
import { EMPTY, Observable, debounceTime, distinctUntilChanged, finalize, map, switchMap, tap } from 'rxjs';
import { MoviesResponseData } from "../../models/movie";

@Injectable()
export class MoviesEffect {
  constructor(
    private actions: Actions,
    private apiService: ApiService
  ) { }

  getPopularMovies$ = createEffect(() =>
    this.actions.pipe(
      ofType(getPopularMovies),
      switchMap((action) => {
        let popularMovies$: Observable<MoviesResponseData>;
        popularMovies$ = this.apiService.getPopularMovies(action.page);
        return popularMovies$.pipe(
          map((response: MoviesResponseData) =>
            setPopularMovies({ popularMovies: response })
          ),
        );
      })
    )
  );

  getSearchedMovies$ = createEffect(() =>
    this.actions.pipe(
      ofType(getSearchedMovies),
      switchMap(({ query }) =>
        this.apiService.getSearchedMovies(query).pipe(
          map(response => setSearchedMovies({ searchedMovies: response }))
        )
      )
    )
  );
}
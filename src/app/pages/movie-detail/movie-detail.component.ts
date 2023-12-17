import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';
import { getMovieDetail, setMovieRating } from '../../store/movies/movies.action';
import { showToast } from '../../store/toastManager/toast.action';

const selectMovieRating = createSelector(
  (state: any) => state.movieRating,
  (movieRating: { [x: string]: any; }, props: { movieId: number; }) => movieRating[props.movieId]
);

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  id!: number;
  movie$: Observable<Movie>;
  userAuth$: Observable<string>;
  rating$: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.route.params.subscribe((param) => {
      this.id = Number(param['id']);
      this.getMovieInfo();
    })
    //@ts-ignore
    this.userAuth$ = store.select('email');
    //@ts-ignore
    this.movie$ = this.store.select('movieDetail')
    //@ts-ignore
    this.rating$ = this.store.select(selectMovieRating, { movieId: this.id });
  }

  ngOnInit(): void {
  }

  getMovieInfo() {
    this.store.dispatch(getMovieDetail({ id: this.id }))
  }

  getRuntime(runtime: number): string {
    return Math.floor(runtime / 60) + 'h ' + runtime % 60 + 'min';
  }

  getRating(event: number) {
    this.store.dispatch(setMovieRating({ movieId: this.id, rating: event }));
    this.store.dispatch(showToast({ message: 'Success! Your rating has been saved', isSuccessful: true }))
  }

}

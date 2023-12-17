import { Component, OnInit } from '@angular/core';
import { MoviesResponseData } from '../../models/movie';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { clearPopularMovies, getPopularMovies } from '../../store/movies/movies.action';
import { selectPopularMovies } from '../../store/movies/movie.selector';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies$: Observable<MoviesResponseData>;
  page: number = 1;

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.movies$ = store.select(selectPopularMovies);
  }

  ngOnInit(): void {
    this.page = 1;
    this.store.dispatch(getPopularMovies({ page: this.page }));
  }

  seeMoreMovies() {
    this.page = this.page + 1;
    this.store.dispatch(getPopularMovies({ page: this.page }));
  }
}

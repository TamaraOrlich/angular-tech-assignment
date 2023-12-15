import { Component, OnInit } from '@angular/core';
import { MoviesResponseData } from '../../models/movie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getPopularMovies } from '../../store/movies/movies.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies$: Observable<MoviesResponseData>;
  page: number = 1;

  constructor(
    private router: Router,
    private store: Store) {
    //@ts-ignore
    this.movies$ = store.select('popularMovies');
  }

  ngOnInit(): void {
    this.page = 1;
    this.store.dispatch(getPopularMovies({ page: this.page }))
  }

  seeMoreMovies() {
    this.page = this.page + 1;
    this.store.dispatch(getPopularMovies({ page: this.page }))
  }
}

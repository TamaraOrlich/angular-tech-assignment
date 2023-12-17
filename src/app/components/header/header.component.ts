import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MoviesResponseData } from '../../models/movie';
import { selectSearchedMovies } from '../../store/movies/movie.selector';
import { clearPopularMovies } from '../../store/movies/movies.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  movies$: Observable<MoviesResponseData | null>;
  userAuth$: Observable<string>;


  constructor(
    private router: Router,
    private store: Store) {
    this.movies$ = store.select(selectSearchedMovies);
    //@ts-expect-error
    this.userAuth$ = store.select('email');
  }


  login() {
    this.router.navigate(['/login']);
    this.store.dispatch(clearPopularMovies());
  }

  isLoginRoute() {
    return this.router.url.includes('login');
  }

  goToHome() {
    this.router.navigate(['']);
  }
}

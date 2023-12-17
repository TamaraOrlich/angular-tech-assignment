import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MoviesResponseData } from '../../models/movie';

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
    //@ts-ignore
    this.movies$ = store.select('searchedMovies');
    //@ts-ignore
    this.userAuth$ = store.select('email');
  }


  login() {
    this.router.navigate(['/login'])
  }

  isLoginRoute() {
    return this.router.url.includes('login');
  }

  goToHome() {
    this.router.navigate([''])
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getSearchedMovies } from '../../store/movies/movies.action';
import { MoviesResponseData } from '../../models/movie';
import { UserModel } from '../../models/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchTextChanged = new Subject<string>();
  searchText: string = '';
  movies$: Observable<MoviesResponseData | null>;
  userAuth$: Observable<string>;


  constructor(
    private router: Router,
    private store: Store) {
    //@ts-ignore
    this.movies$ = store.select('searchedMovies');
    //@ts-ignore
    this.userAuth$ = store.select('email');
    this.searchTextChanged.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe(model => {
        this.store.dispatch(getSearchedMovies({ query: model }));
      });
  }


  login() {
    this.router.navigate(['/login'])
  }

  isLoginRoute() {
    return this.router.url.includes('login');
  }

  search(ev: any) {
    this.searchTextChanged.next((ev.target as HTMLInputElement).value);
  }

  deleteSearch() {
    this.searchText = '';
    this.searchTextChanged.next('');
  }

  goToHome() {
    this.router.navigate([''])
  }
}

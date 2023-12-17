import { Component } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { getSearchedMovies } from '../../store/movies/movies.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent {

  searchTextChanged = new Subject<string>();
  searchText: string = '';

  constructor(private store: Store) {
    this.searchTextChanged.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe(model => {
        store.dispatch(getSearchedMovies({ query: model }));
      });
  }

  search(ev: KeyboardEvent) {
    this.searchTextChanged.next((ev.target as HTMLInputElement).value);
  }

  deleteSearch() {
    this.searchText = '';
    this.searchTextChanged.next('');
  }

}

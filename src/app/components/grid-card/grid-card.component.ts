import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearPopularMovies, clearSearchedMovies } from '../../store/movies/movies.action';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrl: './grid-card.component.scss'
})
export class GridCardComponent {
  @Input() movie!: Movie;

  constructor(private router: Router, private store: Store) { }

  goToDetail(id: number) {
    this.router.navigate(['detail/' + id]);
    this.store.dispatch(clearSearchedMovies());
    this.store.dispatch(clearPopularMovies());
  }

}

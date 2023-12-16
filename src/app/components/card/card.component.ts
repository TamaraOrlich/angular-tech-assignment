import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { clearSearchedMovies } from '../../store/movies/movies.action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() movie!: Movie;
  @Input() isList: boolean = false;

  constructor(
    private router: Router,
    private store: Store) { }

  goToDetail(id: number) {
    this.router.navigate(['detail/' + id]);
    this.store.dispatch(clearSearchedMovies());
  }

}

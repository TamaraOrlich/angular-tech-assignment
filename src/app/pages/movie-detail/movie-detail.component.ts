import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';
import { getMovieDetail } from '../../store/movies/movies.action';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  id!: number;
  movie$: Observable<Movie>;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.route.params.subscribe((param) => {
      this.id = Number(param['id']);
      this.getMovieInfo();
    })
    //@ts-ignore
    this.movie$ = this.store.select('movieDetail')
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
    console.log(event)
  }

}

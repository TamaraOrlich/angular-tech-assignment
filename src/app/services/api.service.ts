import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MoviesResponseData } from '../models/movie';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPopularMovies(page: number) {
    return this.http.get<MoviesResponseData>(`https://api.themoviedb.org/3/movie/popular?api_key=${environment.imdbApiKey}&page=${page}`);
  }

  getSearchedMovies(q: string) {
    return this.http.get<MoviesResponseData>(`
    https://api.themoviedb.org/3/search/movie?query=${q}&api_key=${environment.imdbApiKey}`);
  }

  getMovieDetail(id: number) {
    return this.http.get<Movie>(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${environment.imdbApiKey}`);
  }
}

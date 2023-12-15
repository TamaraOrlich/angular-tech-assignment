import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MoviesEffect } from './store/movies/movie.effect';
import { popularMoviesReducer, searchedMoviesReducer } from './store/movies/movie.reducer';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        popularMovies: popularMoviesReducer,
        searchedMovies: searchedMoviesReducer
      },
      {}
    ),
    EffectsModule.forRoot([MoviesEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}


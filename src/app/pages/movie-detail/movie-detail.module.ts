import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';
import { HeaderModule } from '../../components/header/header.module';
import { StarRatingModule } from '../../components/star-rating/star-rating.module';


@NgModule({
  declarations: [MovieDetailComponent],
  imports: [
    CommonModule,
    HeaderModule,
    StarRatingModule,
    MovieDetailRoutingModule
  ]
})
export class MovieDetailModule { }

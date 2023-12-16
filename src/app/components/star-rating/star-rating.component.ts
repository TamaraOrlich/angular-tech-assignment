import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  rating: number = 0;

  @Output() ratingValue = new EventEmitter<number>();

  emitRating(rating: number) {
    this.rating = rating;
    this.ratingValue.emit(rating);
  }
}

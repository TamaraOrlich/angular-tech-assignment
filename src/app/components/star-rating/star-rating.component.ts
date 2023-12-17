import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {

  hoveredRating = 0;
  @Input() rating: number = 0;
  @Output() ratingValue = new EventEmitter<number>();

  hoverStar(rating: number) {
    this.hoveredRating = rating;
  }

  leaveStar() {
    this.hoveredRating = 0;
  }

  emitRating(rating: number) {
    this.rating = rating;
    this.ratingValue.emit(rating);
  }
}

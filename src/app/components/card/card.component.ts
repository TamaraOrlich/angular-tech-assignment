import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() movie!: Movie;
  @Input() isList: boolean = false;

  constructor(private router: Router) { }

  goToDetail(id: number) {
    this.router.navigate(['detail/' + id])
  }

}

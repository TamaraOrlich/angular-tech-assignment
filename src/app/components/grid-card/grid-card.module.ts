import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCardComponent } from './grid-card.component';



@NgModule({
  declarations: [GridCardComponent],
  imports: [
    CommonModule
  ],
  exports: [GridCardComponent]
})
export class GridCardModule { }

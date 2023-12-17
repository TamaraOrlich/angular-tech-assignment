import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchbarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SearchbarComponent]
})
export class SearchbarModule { }

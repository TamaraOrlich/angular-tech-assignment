import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CardModule } from '../card/card.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }

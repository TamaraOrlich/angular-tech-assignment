import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CardModule } from '../card/card.module';
import { FormsModule } from '@angular/forms';
import { ToastModule } from '../toast/toast.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    CardModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }

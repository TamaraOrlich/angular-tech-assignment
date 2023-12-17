import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from '../toast/toast.module';
import { SearchbarModule } from '../searchbar/searchbar.module';
import { ListCardModule } from '../list-card/list-card.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ListCardModule,
    SearchbarModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }

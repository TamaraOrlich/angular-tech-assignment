import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../../components/header/header.module';
import { CardModule } from '../../components/card/card.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CardModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

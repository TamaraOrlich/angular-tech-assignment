import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HeaderModule } from '../../components/header/header.module';
import { InputModule } from '../../components/input/input.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HeaderModule,
    InputModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Store } from '@ngrx/store';
import { getUser } from '../../store/authentication/auth.action';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  userAuth$ = Observable<UserModel>;

  constructor(
    private store: Store,
  ) {
    //@ts-ignore
    this.userAuth$ = store.select('email')
  }

  ngOnInit(): void {
  }

  getEmail(ev: string) {
    this.email = ev;
  }

  getPassword(ev: string) {
    this.password = ev;
  }

  login() {
    this.store.dispatch(getUser({ email: this.email, password: this.password }))
  }

}

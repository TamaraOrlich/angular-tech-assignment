import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from '../../store/authentication/auth.action';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  userAuth$ = Observable<UserModel>;

  constructor(
    private store: Store,
  ) {
    //@ts-expect-error
    this.userAuth$ = store.select('email');
  }

  getEmail(ev: string) {
    this.email = ev;
  }

  getPassword(ev: string) {
    this.password = ev;
  }

  login($event: SubmitEvent) {
    $event.preventDefault();
    this.store.dispatch(getUser({ email: this.email, password: this.password }));
  }

}

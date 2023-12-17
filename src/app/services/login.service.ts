import { Injectable } from '@angular/core';
import { UserModel } from '../models/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: string): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      if (email === environment.email && password === environment.password) {
        resolve({ email: email } as UserModel);
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  }

}

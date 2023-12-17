import { Injectable } from '@angular/core';
import { UserModel } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: string): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      if (email === 'info@2coders.com' && password === 'password') {
        resolve({ email: email } as UserModel);
      } else {
        reject(new Error('Invalid credentials'))
      }
    });
  }

}

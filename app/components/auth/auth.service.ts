import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable.d';
import '../../../node_modules/rxjs/add/observable/of.d';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login() {
    return this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}

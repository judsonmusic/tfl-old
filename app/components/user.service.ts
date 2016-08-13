import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Subject} from "../../node_modules/rxjs/src/Subject";
import Observable = Rx.Observable;

@Injectable()
export class UserService {

  loggedIn = false;
  user: Subject<any>;
  user$: Observable<any>;

  constructor(private http: Http) {
    this.user = new Subject();
    this.user$ = this.user.asObservable();

  }

  createAccount(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    return this.http
      .post(
        '/api/accounts',
        JSON.stringify(user),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });
  }

  login(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        '/api/authenticate',
        JSON.stringify(user),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        console.log('Login Result:', res.user);
        if (res.success) {
          localStorage.setItem('jwt', res.token);
          //set user service info...
          this.loggedIn = true;
          this.user.next(res.user[0]);
        }
        return res;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Subject} from "../../node_modules/rxjs/src/Subject";
import {Observable} from "../../node_modules/rxjs/src/Observable";


@Injectable()
export class UserService {

  user: Subject<any>;
  user$: Observable<any>;
  loggedIn = new Subject<boolean>();
  loggedIn$: Observable<any>;


  constructor(private http: Http) {
    this.user = new Subject();
    this.user$ = this.user.asObservable();
    this.loggedIn = new Subject();
    this.loggedIn$ = this.loggedIn.asObservable();


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
        if (res['success']) {
          localStorage.setItem('jwt', res['jwt']);
           this.loggedIn.next(true);
        }

        return res['success'];
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
        if (res["success"]) {
          localStorage.setItem('jwt', res.token);
          //set user service info...
          this.user.next(res.user[0]);
          this.loggedIn.next(true);
        }
        return res;
      });
  }

  updateAccount(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', localStorage.getItem('jwt'));

    console.log('PAYLOAD FOR UPDATE USER: ' , user);

    return this.http
      .put(
        '/api/accounts/' + user._id,
        JSON.stringify(user),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res['success']) {
          //localStorage.setItem('jwt', res['jwt']);
          //this.loggedIn$ = true;
          this.loggedIn.next(true);
        }

        return res['success'];
      });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.loggedIn.next(false);
  }

}

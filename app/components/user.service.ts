import { Injectable } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Headers } from '@angular/http';
import {Subject} from "../../node_modules/rxjs/src/Subject";
import {Observable} from "../../node_modules/rxjs/src/Observable";
import {AuthService} from "./auth.service";


@Injectable()
export class UserService {

  userData:any;
  user:Subject<any>;
  user$:Observable<any>;
  loggedIn = new Subject<boolean>();
  loggedIn$:Observable<any>;


  constructor(private http:Http, public authService:AuthService, public router:Router) {

    this.user = new Subject();
    this.user$ = this.user.asObservable();
    this.loggedIn = new Subject();
    this.loggedIn$ = this.loggedIn.asObservable();

  }

  createAccount(user) {
    user.assessment = {

      1: {id: "1", answer: "", subs: []},
      2: {id: "2", answer: "", subs: []},
      3: {id: "3", answer: "", subs: []},
      4: {id: "4", answer: "", subs: []},
      5: {id: "5", answer: "", subs: []},
      6: {id: "6", answer: "", subs: []},
      7: {id: "7", answer: "", subs: []},
      8: {id: "8", answer: "", subs: []},
      9: {id: "9", answer: "", subs: []},
      10: {id: "10", answer: "", subs: []},
      11: {id: "11", answer: "", subs: []},
      12: {id: "12", answer: "", subs: []},
      13: {id: "13", answer: "", subs: []},
      14: {id: "14", answer: "", subs: []},
      15: {id: "15", answer: "", subs: []}

    };
    console.log('Attempting to create an account with', user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        '/api/accounts',
        JSON.stringify(user),
        {headers}
      )
      .map(res => res.json())
      .map((res) => {
        if (res['account']) {
          this.loggedIn.next(true);
          this.userData = res["account"];
          //this.user$ = res;
          //this.user.next('test');
          return res;
        }
      });
  }

  login(user) {

    console.log('Loggin you in...');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        '/api/authenticate',
        JSON.stringify(user),
        {headers}
      )
      .map(res => res.json())
      .map((res) => {
        console.log('Login Result:', res.user);

          localStorage.setItem('jwt', res.token);
          //set user service info...
          this.loggedIn.next(true);
          this.userData = res.user[0];
          this.user.next(res.user[0]);
          return res;
      });
  }

  updateAccount(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', localStorage.getItem('jwt'));

    console.log('PAYLOAD FOR UPDATE USER: ', user);

    return this.http
      .put(
        '/api/accounts/' + user._id,
        JSON.stringify(user),
        {headers}
      )
      .map(res => res.json())
      .map((res) => {

        console.log('!!!!!!!!!!!!user updated!', res);
        if (res['success']) {
          console.log('!!!!!!!!!!!!user updated!', res);
          //localStorage.setItem('jwt', res['jwt']);
          //this.loggedIn$ = true;
          //this.loggedIn.next(true);
        }

        //return res['success'];
      });
  }

  getUser(){

    console.log('GET USER:', this.user$);

    return this.user$;
  }

  logout() {
    localStorage.removeItem('jwt');
    this.loggedIn.next(false);
  }

}

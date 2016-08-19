import { Injectable, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { Http, Headers } from '@angular/http';
import {Subject} from "../../../node_modules/rxjs/src/Subject";
import {Observable} from "../../../node_modules/rxjs/src/Observable";
import {AuthService} from "../auth/auth.service";
import {SurveyService} from "../survey/survey.service";


@Injectable()
export class UserService{

  userData:any;
  user:Subject<any>;
  user$:Observable<any>;
  loggedIn = new Subject<boolean>();
  loggedIn$:Observable<any>;


  constructor(private http:Http, public authService:AuthService, public router:Router, public surveyService: SurveyService) {

    this.user = new Subject();
    this.user$ = this.user.asObservable();
    this.loggedIn = new Subject();
    this.loggedIn$ = this.loggedIn.asObservable();


  }

  getUser(){

      let headers = new Headers();
      //headers.append('Content-Type', 'application/json');

      headers.append('x-access-token', localStorage['jwt']);
      console.log('We have a user ID! Lets try to get a user!');
      return this.http
        .get('/api/accounts/' + localStorage['_id'], {headers : headers} )
        .map(res => res.json())
        .map((res) => {

          if(res.success === false){
            console.log('***THERE WAS AN ERROR!');
            this.authService.isLoggedIn = false;

          }else {
            console.log('USER FOUND!', res);
            this.authService.isLoggedIn = true;
            this.loggedIn.next(true);
            this.userData = res;
            this.user.next(res);
            return res;
          }
        }, (error) => console.log('There was an error', error));

  }

  createAccount(user) {
    user.assessment = this.surveyService.assessment;
    console.log('Build empty assessment: ' , user.assessment);
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
          console.log('Account created!', res["account"]);
          this.authService.isLoggedIn = true;
          this.loggedIn.next(true);
          this.userData = res["account"];
          //this.user$ = res;
          //this.user.next('test');
          return res;
        }else{

          this.authService.isLoggedIn = false;

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


          if(res['success'] == true) {
            localStorage.setItem('jwt', res.token);
            localStorage.setItem('_id', res.user[0]._id);
            //set user service info...
            this.loggedIn.next(true);
            this.userData = res.user[0];
            this.user.next(res.user[0]);
            return res;


          }else{

            return res;

        }
      });
  }


  logout() {
    localStorage.clear();
    this.userData = null;
    this.authService.isLoggedIn = false;
    this.loggedIn.next(false);
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

}

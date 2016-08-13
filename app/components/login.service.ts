import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {UserService} from "./user.service";

@Injectable()
export class LoginService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('jwt');
    this.userService = UserService;
    console.log('User is logged in?', this.loggedIn);
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

          //UserService.getUser(res.user[0]);
          console.log('THE USER IS SET AFTER LOGIN!');
          this.loggedIn = true;
        }

        return res.success;
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

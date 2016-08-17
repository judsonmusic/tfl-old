import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from "./auth.service";
import { Http, Headers } from '@angular/http';
import { UserService } from "./user.service";

@Component({

  selector:'login-component',
  templateUrl: '/app/components/login.component.html'
})

export class LoginComponent {

  message: string;
  loginData:any;


  constructor(public authService: AuthService, public router: Router, public http: Http, public userService: UserService) {
    this.setMessage();
    this.loginData = {email: "blah@blah.com", password: "password"};
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(user) {
    this.userService.login(user).subscribe(user => {
      this.authService.login();
      console.log(this.authService.isLoggedIn);
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
      // Redirect the user
      this.router.navigate([redirect]);

    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}

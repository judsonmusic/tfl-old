import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'login-component',
  templateUrl: "./app/components/login.component.html",
})
export class LoginComponent {

  user = {};

  constructor(private userService: UserService) {

    this.user = {email: "test@test.com", password: "Password"};

  }

  onSubmit(user) {

    this.userService.login(user).subscribe((result) => {
      if (result) {
        console.log('The result of the login is: ', result);
        this.userService.setUser(result.user[0]);
      }
    });
  }

}

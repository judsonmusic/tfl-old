import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'user-component',
  templateUrl: "./app/components/user.component.html"
})
export class UserComponent {

  user: any;
  loggedIn: any;

  constructor(private userService: UserService) {

    this.user = {};

    this.userService.user$.subscribe((userData) => {
      this.user = userData;
      console.log('We got some data!');
    });

    this.userService.loggedIn$.subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
      console.log('The user is logged in!');
    });

  }

  addAccount(user) {
    console.log(user);
    this.userService.createAccount(user).subscribe((result) => {
      if (result) {
        console.log('Account Created Succesfully!', result);
        //this.router.navigate(['Home']);
      }
    });
  }

  updateAccount(user) {

    this.userService.updateAccount(user).subscribe((result) => {
      if (result) {
        console.log('Account Updated Succesfully!', result);
        //this.router.navigate(['Home']);
      }
    });
  }

}

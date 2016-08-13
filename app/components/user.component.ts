import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'user-component',
  templateUrl: "./app/components/user.component.html"
})
export class UserComponent {

  user: any;

  constructor(private userService: UserService) {

    this.user = {};

    this.userService.user$.subscribe((userData) => {
      this.user = userData;
    });

  }



  onSubmit(user) {
    console.log(user);
    this.userService.createAccount(user).subscribe((result) => {
      if (result) {
        console.log('Account Created Succesfully!', result);
        //this.router.navigate(['Home']);
      }
    });
  }

}

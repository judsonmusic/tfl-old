import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'logout',
  templateUrl: "app/components/logout.component.html"
})
export class LogoutComponent {

  constructor(private userService: UserService){

    userService.logout();


  }
}

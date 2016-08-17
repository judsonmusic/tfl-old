import { Component } from '@angular/core';
import {UserService} from "../user-service/user.service.ts";

@Component({
  selector: 'logout',
  templateUrl: "app/components/logout.component.html"
})
export class LogoutComponent {

  constructor(private userService: UserService){

    userService.logout();


  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from "../login/login.component.ts";
import {UserComponent} from "../user/user.component.ts";
import {UserService} from "../user-service/user.service.ts";

@Component({
  selector: 'home-component',
  templateUrl: '/app/components/home/home.component.html',
  directives: [LoginComponent, UserComponent]
})
export class HomeComponent {


  constructor(public router: Router, public userService: UserService){


  }

  getStarted(){

    this.router.navigate(['/survey']);

  }

  getUser() {

    this.userService.getUser().subscribe();

  }
}

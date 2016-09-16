import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {HeaderComponent} from "./components/layout/header.component";
import {UserService} from "./components/user-service/user.service";
import {AuthService} from "./components/auth/auth.service";

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  directives: [HeaderComponent]
})
export class AppComponent implements OnInit{

  public viewContainerRef;
  public userService;
  public authService;
  public router;
  public location;

  public constructor(viewContainerRef:ViewContainerRef, userService: UserService, authService: AuthService, router: Router, location:Location) {

    this.viewContainerRef = viewContainerRef;
    this.userService = userService;
    this.authService = authService;
    this.router = router;
    this.location = location;

  }

  ngOnInit() {

    this.userService.getUser().subscribe((user) =>{
      console.log('APP FOUND USER WHILE CALLING GET USER', user);
      //this.authService.isLoggedIn = true;
      //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
      // Redirect the user
      //console.log('The location is: ', this.location.path());
      if(this.location.path() == '/' || this.location.path() == '') {

        this.router.navigate(['/dashboard']);
      }

    }, (error) => {
      console.log('Error! Redirecting!');
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
      // Redirect the user
      this.router.navigate(['/']);


    });

  }
}

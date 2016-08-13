import { Component } from '@angular/core';
import {LoginComponent} from "./login.component";
import {UserComponent} from "./user.component";

@Component({
  selector: 'home-component',
  template: '<div><login-component heading="123"></login-component></div><hr /><div><user-component></user-component></div>',
  directives: [LoginComponent, UserComponent]
})
export class HomeComponent {
}

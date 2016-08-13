import { Component } from '@angular/core';
import {LoginComponent} from "./login.component";
import {UserComponent} from "./user.component";

@Component({
  selector: 'my-hero-detail',
  template: "<div><login-component></login-component></div><hr /><div><user-component></user-component></div>",
  directives: [LoginComponent, UserComponent]
})
export class HomeComponent {
}

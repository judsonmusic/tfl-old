import { Component } from '@angular/core';
import {LoginComponent} from "./login.component";
import {UserComponent} from "./user.component";

@Component({
  selector: 'home-component',
  templateUrl: '/app/components/home.component.html',
  directives: [LoginComponent, UserComponent]
})
export class HomeComponent {
}

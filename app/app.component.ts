import { Component, ViewContainerRef } from '@angular/core';
import {HeaderComponent} from "./components/layout/header.component";

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  directives: [HeaderComponent]
})
export class AppComponent {

  public viewContainerRef;

  public constructor(viewContainerRef:ViewContainerRef) {

    this.viewContainerRef = viewContainerRef;

  }
}

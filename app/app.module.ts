import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

import { AboutComponent }  from './components/about.component';
import {UserService} from "./components/user.service";
import {LoginComponent} from "./components/login.component";
import {UserComponent} from "./components/user.component";
import {HomeComponent} from "./components/home.component";
import {PageNotFoundComponent} from "./components/pageNotFound.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent, LoginComponent, UserComponent, AboutComponent, HomeComponent, PageNotFoundComponent, DashboardComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

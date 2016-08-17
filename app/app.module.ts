import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing, appRoutingProviders}        from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';


import {AboutComponent}  from './components/about.component';
import {UserService} from "./components/user.service";
import {LoginComponent} from "./components/login.component";
import {UserComponent} from "./components/user.component";
import {HomeComponent} from "./components/home.component";
import {PageNotFoundComponent} from "./components/pageNotFound.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {SurveyComponent} from "./components/survey/survey.component";
import {ResourcesComponent} from "./components/resources.component";
import {LogoutComponent} from "./components/logout.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    SurveyComponent,
    ResourcesComponent,
    LogoutComponent
  ],
  providers: [
    UserService,
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

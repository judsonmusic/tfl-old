import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing, appRoutingProviders}        from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';


import {AboutComponent}  from './components/about/about.component';
import {UserService} from "./components/user-service/user.service";
import {LoginComponent} from "./components/login/login.component";
import {UserComponent} from "./components/user/user.component";
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "./components/not-found/pageNotFound.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AssessmentComponent} from "./components/assessment/assessment.component";
import {ResourcesComponent} from "./components/resources/resources.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {DimensionsComponent} from "./components/dimensions/dimensions.component";
import {SurveyService} from "./components/survey/survey.service";
import {BarChartComponent} from "./components/charts/barChart.component";
import {OnCreate} from "./components/directives/oncreate.directive";
import {ActionComponent} from "./components/action/action.component";
import {AssessmentService} from "./components/assessment/assessment.service";


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
    AssessmentComponent,
    ResourcesComponent,
    LogoutComponent,
    DimensionsComponent,
    BarChartComponent,
    OnCreate,
    ActionComponent
  ],
  providers: [
    UserService,
    AssessmentService,
    SurveyService,
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about.component';
import {PageNotFoundComponent} from "./components/pageNotFound.component";
import {HomeComponent} from "./components/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {SurveyComponent} from "./components/survey/survey.component";
import {ResourcesComponent} from "./components/resources.component";
import {LogoutComponent} from "./components/logout.component";
import {AuthGuard} from "./components/auth-guard.service";
import { loginRoutes, authProviders }      from './login.routing';
import {LoginComponent} from "./components/login.component";

const appRoutes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [
  authProviders
];
export const routing = RouterModule.forRoot(appRoutes);

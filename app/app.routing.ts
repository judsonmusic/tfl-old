import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import {PageNotFoundComponent} from "./components/not-found/pageNotFound.component";
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AssessmentComponent} from "./components/assessment/assessment.component";
import {ResourcesComponent} from "./components/resources/resources.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {AuthGuard} from "./components/auth/auth-guard.service";
import { authProviders }      from './login.routing';
import {LoginComponent} from "./components/login/login.component";
import {DimensionsComponent} from "./components/dimensions/dimensions.component";
import {ActionComponent} from "./components/action/action.component";


const appRoutes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'action', component: ActionComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent },
  { path: 'resources', component: ResourcesComponent},
  { path: 'assessment', component: AssessmentComponent },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},

  { path: 'dimensions/:id', component: DimensionsComponent},
  { path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [
  authProviders
];
export const routing = RouterModule.forRoot(appRoutes);

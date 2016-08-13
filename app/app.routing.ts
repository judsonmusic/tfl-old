import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about.component';
import {PageNotFoundComponent} from "./components/pageNotFound.component";
import {HomeComponent} from "./components/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {SurveyComponent} from "./components/survey/survey.component";
import {ResourcesComponent} from "./components/resources.component";

const appRoutes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'survey',
    component: SurveyComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

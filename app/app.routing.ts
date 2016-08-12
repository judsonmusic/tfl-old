import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about.component';
import {PageNotFoundComponent} from "./components/pageNotFound.component";
import {HomeComponent} from "./components/home.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

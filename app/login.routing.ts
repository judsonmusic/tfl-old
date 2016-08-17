import { Routes }         from '@angular/router';
import { AuthGuard }      from './components/auth-guard.service';
import { AuthService }    from './components/auth.service';
import { LoginComponent } from './components/login.component';
export const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];
export const authProviders = [
  AuthGuard,
  AuthService
];

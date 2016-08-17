import { Injectable }             from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { AuthService }            from './auth.service.ts';
import {UserService} from "../user-service/user.service.ts";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {



    if (this.authService.isLoggedIn){

      console.log('AUTH GUARD SAYS THEY ARE ALREADY LOGGED IN!');
      return true;


    }else {


      this.userService.getUser().subscribe((user) => {

        console.log('AUTH GUARD GETTING USER', user);

        if (user._id) {
        this.authService.isLoggedIn = true;
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = state.url || '/dashboard';
        this.router.navigate([state.url]);
        return true;
        }else{
          console.log('Validation Failed.');
          localStorage.clear();
          this.router.navigate(['/login']);
          return false;
        }


      }, (error) => {
        console.log('There was an error.');
        this.router.navigate(['/login']);
        return false

      });

    }


  }
}

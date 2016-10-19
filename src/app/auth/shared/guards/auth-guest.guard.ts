import {Injectable} from '@angular/core';
import {CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';

import {AuthService} from '../auth.service';

@Injectable()
export class AuthGuestGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.isLoggedIn();
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }

    isLoggedIn() {

        if (!this.authService.isAuth()) {
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }

}

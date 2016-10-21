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

        this.authService.isGuest().subscribe(r=> {

            if (!r) {
                this.router.navigate(['/']);
            }
        });

        return this.authService.isGuest();
    }

}

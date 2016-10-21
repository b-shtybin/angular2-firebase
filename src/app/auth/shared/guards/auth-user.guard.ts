import {Injectable} from '@angular/core';
import {CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';

import {AuthService} from '../auth.service';

@Injectable()
export class AuthUserGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let url: string = state.url;

        return this.isLoggedIn(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }

    isLoggedIn(url: string) {

        this.authService.isAuth().subscribe(r=> {
            if (!r) {
                this.authService.redirectUrl = url;
                this.router.navigate(['/sign-in']);
            }
        });

        return this.authService.isAuth();

    }

}

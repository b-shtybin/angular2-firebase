import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth-logout',
    template: ''
})
export class AuthLogoutComponent {

    constructor(private authService: AuthService,
                private route: Router) {

        this.authService.logout();
        this.route.navigate(['/']);
    }
}

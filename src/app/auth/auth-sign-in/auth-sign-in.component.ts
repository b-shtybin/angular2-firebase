import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

/**
 * Class for provide sign-in users
 */

@Component({
    selector: 'app-auth-sign-in',
    templateUrl: './auth-sign-in.component.html'
})
export class AuthSignInComponent {

    public user = {
        email: '',
        password: ''
    };

    constructor(private authService: AuthService,
                private router: Router) {
    }

    signIn() {

        if (!this.user.email || !this.user.password) {
            console.log('password or username cannot be empty');
            return;
        }

        this.authService.login(this.user)
            .then(
                r => {
                    this.router.navigate([this.authService.getRedirectUrl()]);
                }
            )
            .catch(r => console.log(r));
    }

}

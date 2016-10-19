import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Router} from "@angular/router";

/**
 * Class for provide sign-up users
 */

@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './auth-sign-up.component.html'
})
export class AuthSignUpComponent {

    user = {
        email: '',
        password: '',
        passwordRepeat: ''
    };

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    signUp() {

        if (this.user.password !== this.user.passwordRepeat) {
            console.log('passwords aren\'t ident');
            return;
        }

        this.authService.createUser(this.user.email, this.user.password)
            .then(r => {
                this.router.navigate([this.authService.getRedirectUrl()]);
            })
            .catch(r => console.log(r));

    }
}

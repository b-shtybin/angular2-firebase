import {Injectable, OnInit} from '@angular/core';
import {FirebaseAuthState, FirebaseAuth} from 'angularfire2';

@Injectable()
export class AuthService{

    private authState: FirebaseAuthState = null;
    redirectUrl: string;

    constructor(private fa: FirebaseAuth) {
        fa.subscribe(
            (state: FirebaseAuthState) => this.authState = state
        );
    }


    isAuth(): boolean {
        return this.authState !== null;
    }

    getRedirectUrl(): string {
        return (this.redirectUrl) ? this.redirectUrl : '/';
    }

    createUser(email: string, password: string) {

        return this.fa.createUser({email: email, password: password});
    }

    login(creds) {
        return this.fa.login(creds);
    }

    logout() {
        return this.fa.logout();
    }
}

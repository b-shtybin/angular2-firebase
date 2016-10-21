import {Injectable, OnInit} from '@angular/core';
import {FirebaseAuthState, FirebaseAuth} from 'angularfire2';
import {Subject} from "rxjs";

@Injectable()
export class AuthService {

    public authState:boolean = false;

    private auth: Subject<boolean>;
    private guest: Subject<boolean>;
    redirectUrl: string;

    constructor(private fa: FirebaseAuth) {

        this.auth = <Subject<boolean>>new Subject();
        this.guest = <Subject<boolean>>new Subject();

        fa.subscribe(
            (state: FirebaseAuthState) => {
                if (state) {
                    this.authState = true;
                    this.guest.next(false);
                    this.auth.next(true);

                } else {
                    this.authState = false;

                    this.guest.next(true);
                    this.auth.next(false);
                }

                this.guest.complete();
                this.auth.complete();
            }
        );
    }


    isAuth(): Subject<boolean> {
        return this.auth;
    }
    isGuest(): Subject<boolean> {
        return this.guest;
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

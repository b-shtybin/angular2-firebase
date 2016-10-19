import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {HttpModule} from '@angular/http';

import {authRouting} from './auth.routes';
import {AuthComponent} from './auth.component';
import {AuthSignInComponent} from './auth-sign-in/auth-sign-in.component';
import {AuthSignUpComponent} from './auth-sign-up/auth-sign-up.component';
import {BrowserModule} from '@angular/platform-browser';
import {AuthService} from './shared/auth.service';
import {AuthUserGuard} from './shared/guards/auth-user.guard';
import {AuthGuestGuard} from './shared/guards/auth-guest.guard';
import {AuthLogoutComponent} from './auth-logout/auth-logout.component';
import {environment} from "../../environments/environment";

export const firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password

};

/**
 * Module for work with Firebase Basic Auth.
 * It does all necessary operation for provide valid auth.
 * Also provides two router guards for check "is user guest" and "is user authenticated"
 */

@NgModule({
    declarations: [
        AuthComponent,
        AuthSignInComponent,
        AuthSignUpComponent,
        AuthLogoutComponent,
        AuthSignInComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(environment.firebase, firebaseAuthConfig),
        BrowserModule,
        authRouting,
    ],
    providers: [
        AuthService,
        AuthUserGuard,
        AuthGuestGuard
    ]
})
export class AuthModule {
}

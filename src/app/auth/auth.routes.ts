import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AuthComponent} from './auth.component';
import {AuthSignInComponent} from './auth-sign-in/auth-sign-in.component';
import {AuthSignUpComponent} from './auth-sign-up/auth-sign-up.component';
import {AuthGuestGuard} from './shared/guards/auth-guest.guard';
import {AuthUserGuard} from './shared/guards/auth-user.guard';
import {AuthLogoutComponent} from './auth-logout/auth-logout.component';

const authRoutes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: '',
                canActivateChild: [AuthGuestGuard],
                children: [
                    {
                        path: 'sign-in',
                        component: AuthSignInComponent,
                    },
                    {
                        path: 'sign-up',
                        component: AuthSignUpComponent
                    }
                ]
            },
            {
                path: 'logout',
                canActivate: [AuthUserGuard],
                component: AuthLogoutComponent
            }

        ]
    }
];

export const authRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);

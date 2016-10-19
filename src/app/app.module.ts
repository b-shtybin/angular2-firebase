import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {PostsModule} from './posts/posts.module';
import {routing} from './app.routing';
import {AuthModule} from './auth/auth.module';
import {SharedHelperService} from './shared/shared-helper.service';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PostsModule,
        routing,
        AuthModule,
    ],
    providers: [
        SharedHelperService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

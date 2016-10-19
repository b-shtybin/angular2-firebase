import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {PostListComponent} from './post-list/post-list.component';
import {postsRouting} from './posts.routes';
import {PostsComponent} from './posts.component';
import {PostComponent} from './post/post.component';
import {PostAddComponent} from './post-add/post-add.component';
import {PostEditComponent} from './post-edit/post-edit.component';
import {PostsService} from './posts.service';
import {PostDeleteComponent} from './post-delete/post-delete.component';

@NgModule({
    declarations: [
        PostsComponent,
        PostListComponent,
        PostComponent,
        PostAddComponent,
        PostEditComponent,
        PostDeleteComponent
    ],
    imports: [
        FormsModule,
        AngularFireModule,
        BrowserModule,
        HttpModule,
        postsRouting
    ],
    providers: [PostsService]
})

export class PostsModule {
}

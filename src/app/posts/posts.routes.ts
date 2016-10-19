import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {PostsComponent} from './posts.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostComponent} from './post/post.component';
import {PostAddComponent} from './post-add/post-add.component';
import {PostEditComponent} from './post-edit/post-edit.component';
import {AuthUserGuard} from '../auth/shared/guards/auth-user.guard';
import {PostDeleteComponent} from './post-delete/post-delete.component';

const postsRoutes: Routes = [
    {
        path: 'posts',
        component: PostsComponent,
        children: [
            {
                path: '',
                component: PostListComponent,
            },
            {
                path: '',
                canActivateChild: [AuthUserGuard],
                children: [
                    {
                        path: 'add',
                        component: PostAddComponent
                    },
                    {
                        path: ':id/edit',
                        component: PostEditComponent
                    },

                    {
                        path: ':id/delete',
                        component: PostDeleteComponent
                    },
                ]
            },
            {
                path: ':id',
                component: PostComponent
            }
        ]
    }
];

export const postsRouting: ModuleWithProviders = RouterModule.forChild(postsRoutes);

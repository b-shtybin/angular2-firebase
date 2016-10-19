import {Component} from '@angular/core';
import {FirebaseListObservable, AngularFire} from 'angularfire2';
import {Router} from '@angular/router';
import {SharedHelperService} from '../../shared/shared-helper.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html'
})

export class PostListComponent {

    posts: FirebaseListObservable<any>;

    constructor(af: AngularFire,
                private router: Router,
                public sharedService: SharedHelperService
    ) {

        this.posts = af.database.list('/posts');
    }

}

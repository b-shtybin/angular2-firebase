import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Router} from '@angular/router';

import {Post} from '../shared/post.model';

@Component({
    selector: 'app-post-add',
    templateUrl: './../shared/post-form.html'
})
export class PostAddComponent {

    actionTitle = 'Add';
    post: Post;

    private posts: FirebaseListObservable<Post[]>;

    constructor(af: AngularFire,
                private router: Router) {

        this.posts = af.database.list('/posts');
        this.post = new Post;
    }

    onSubmit() {
        this.posts.push(this.post).then(r => {
            this.router.navigate(['/posts']);
        });
    }

}

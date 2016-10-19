import {Component} from '@angular/core';
import {Post} from '../shared/post.model';
import {FirebaseObjectObservable, AngularFire} from 'angularfire2';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-post-edit',
    templateUrl: './../shared/post-form.html'
})

export class PostEditComponent {

    post: Post;
    actionTitle = 'Edit';

    private afPost: FirebaseObjectObservable<any>;

    constructor(private af: AngularFire,
                private route: Router,
                private activeRouter: ActivatedRoute) {
        this.afPost = this.af.database.object('/posts/' + this.activeRouter.snapshot.params['id']);
        this.post = new Post;

        this.afPost.subscribe(snap => {
            this.post = {
                title: snap.title,
                content: snap.content
            };
        });
    }

    onSubmit() {

        this.afPost.update(this.post).then(r => {
            this.route.navigate(['/posts']);
        });

    }

}

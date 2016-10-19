import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFire} from 'angularfire2';

@Component({
    selector: 'app-post-delete',
    template: ''
})
export class PostDeleteComponent {

    private post: any;

    constructor(private route: Router,
                private activeRoute: ActivatedRoute,
                private af: AngularFire) {

        this.post = this.af.database.object('/posts/' + this.activeRoute.snapshot.params['id']);
        this.post.remove().then(r => {
            this.route.navigate(['/posts']);
        });
    }
}

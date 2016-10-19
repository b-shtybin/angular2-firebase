import {Component, OnInit} from '@angular/core';
import {FirebaseObjectObservable, AngularFire} from 'angularfire2';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../shared/post.model';
import {Location} from '@angular/common';

@Component({
    selector: 'app-post-single',
    templateUrl: './post-single.component.html'
})

export class PostComponent implements OnInit {

    afPost: FirebaseObjectObservable<any>;
    post: Post;

    constructor(private af: AngularFire,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.afPost = this.af.database.object('/posts/' + this.route.snapshot.params['id']);

        this.post = new Post;
        this.afPost.subscribe(snap => {

            this.post = {
                title: snap.title,
                content: snap.content
            };
        });
    }


}

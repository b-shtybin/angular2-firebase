import {Injectable} from '@angular/core';
import {FirebaseListObservable, AngularFire} from 'angularfire2';

@Injectable()
export class PostsService {

    private posts: FirebaseListObservable<any>;

    constructor(af: AngularFire) {
        this.posts = af.database.list('/posts');
    }
}

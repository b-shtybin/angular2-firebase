import {Component} from '@angular/core';
import {SharedHelperService} from './shared/shared-helper.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(public sharedHelper: SharedHelperService) {
    }
}

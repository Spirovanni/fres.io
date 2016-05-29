import { Component }   from '@angular/core';
import { BaseFooter } from './base/base-footer/base-footer';
import { BaseNav } from './base/base-nav/base-nav';

@Component({
    selector: 'MainContent',
    templateUrl: '/client/imports/main.html',
    directives: [BaseFooter, BaseNav]
    
})

export class MainContent {
    constructor() {
    }
}

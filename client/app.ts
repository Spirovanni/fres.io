import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app',
    templateUrl: 'client/app.html'
})
class Socially {
    parties: Array<Object>;

    constructor() {
        this.parties = [
            {'name': 'Dubstep-Free Zone',
                'description': 'Can we please just for an evening not listen to dubstep.',
                'location': 'Palo Alto'
            },
            {'name': 'All dubstep all the time',
                'description': 'Get it on!',
                'location': 'Palo Alto'
            },
            {'name': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.',
                'location': 'San Francisco'
            }
        ];
    }
}

bootstrap(Socially);
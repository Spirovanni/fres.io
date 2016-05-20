import 'reflect-metadata';
import { Component} from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Parties } from '../../../collections/parties.ts';

@Component({
    selector: 'parties-form',
    templateUrl: '/client/imports/parties-form/parties-form.html'
})
export class PartiesForm {
    partiesForm: ControlGroup;

    constructor() {
        var fb = new FormBuilder();
        this.partiesForm = fb.group({
            name: ['', Validators.required],
            description: [''],
            location: ['', Validators.required]
        });
    }

    addParty(party) {
        if (this.partiesForm.valid) {
            Parties.insert({
                name: party.name,
                description: party.description,
                location: party.location
            });

            (<Control>this.partiesForm.controls['name']).updateValue('');
            (<Control>this.partiesForm.controls['description']).updateValue('');
            (<Control>this.partiesForm.controls['location']).updateValue('');
        }
    }
}

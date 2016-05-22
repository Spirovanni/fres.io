import { Component } from '@angular/core';
import { RouteParams, RouterLink } from '@angular/router-deprecated';
import {Parties} from '../../../collections/parties.ts';
import { Meteor } from 'meteor/meteor';
import { RequireUser } from 'angular2-meteor-accounts-ui';
import {CanActivate, ComponentInstruction} from '@angular/router-deprecated';
import { MeteorComponent } from 'angular2-meteor';
import { DisplayName } from '../pipes/pipes.ts';
import { Mongo } from 'meteor/mongo';

function checkPermissions(instruction: ComponentInstruction) {
    var partyId = instruction.params['partyId'];
    var party = Parties.findOne(partyId);
    return (party && party.owner == Meteor.userId());
}

@Component({
    selector: 'party-details',
    templateUrl: '/client/imports/party-details/party-details.html',
    directives: [RouterLink],
    pipes: [DisplayName]
})
@RequireUser()
@CanActivate(checkPermissions)
export class PartyDetails extends MeteorComponent {
    party: Party;
    users: Mongo.Cursor<Object>;

    constructor(params: RouteParams) {
        super();
        var partyId = params.get('partyId');

        this.subscribe('party', partyId, () => {
            this.party = Parties.findOne(partyId);
        }, true);

        this.subscribe('uninvited', partyId, () => {
            this.party = Meteor.users.find({_id: {$ne: Meteor.userid()}});
        }, true);
    }

    saveParty(party) {
        if (Meteor.userId()) {
            Parties.update(party._id, {
                $set: {
                    name: party.name,
                    description: party.description,
                    location: party.location
                }
            });
        } else {
            alert('Please log in to change this party');
        }
    }
}


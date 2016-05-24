import { Parties } from '../collections/parties.ts';

export function loadParties() {
    if (Parties.find().count() === 0) {

        var parties = [
            {
                'name': 'Dubstep-Free Zone',
                'description': 'Can we please just for an evening not listen to dubstep.',
                'public': true,
                'location': {
                    name: 'Palo Alto'
                }
            },
            {
                'name': 'All dubstep all the time',
                'description': 'Get it on!',
                'public': true,
                'location': {
                    name: 'Palo Alto'
                }
            },
            {
                'name': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.',
                'public': false,
                'location': {
                    name: 'Palo Alto'
                }
            }
        ];

        for (var i = 0; i < 27; i++) {
            Parties.insert({
                name: Fake.sentence(50),
                location: Fake.sentence(10),
                description: Fake.sentence(100),
                public: true
            });
        }
    }
}    

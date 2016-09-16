import { Component, OnInit }		from '@angular/core';
import { User }						from './user.interface';
import { Theme }					from './theme.interface';

@Component({
	moduleId:		module.id,
	selector:		'my-app',
	templateUrl:	'signup.ejs',
	directives: 	[]
})

export class AppComponent implements OnInit {
	public user: User;
	/* standing data goes here*/
    ...
    /* end standing data */
    ngOnInit() {
    	// initialize user model here
    	this.user = {
    		name:		'',
    		gender:		this.genders[0].value,		// default to 'F'
    		role:		null,
    		theme:		this.themes[0],				// default to dark
    		isActive:	false,
    		toggle:		this.toggles[1].value,		// default to Untoggled
    		topics:		this.topics[1].value		// default to Technology 
    	}
    }
    public save(isValid: boolean, f: User) {
    	console.log(f);
    }
}

/* standing data goes here*/

public	genders = [
	{ value: 'F', display: 'Female' },
	{ value: 'M', display: 'Male' }
];

public	roles = [
	{ value: 'admin', display: 'Administrator' },
	{ value: 'guest', display: 'Guest' },
	{ value: 'custom', display: 'Custom' }
];

public	topics = [
	{ value: 'game', display: 'Gaming' },
	{ value: 'tech', display: 'Technology' },
	{ value: 'life', display: 'Lifrstyle' }
];

public	toggles = [
	{ value: 'toggled', display: 'Toggled' },
	{ value: 'untoggled', display: 'UnToggled' }
];

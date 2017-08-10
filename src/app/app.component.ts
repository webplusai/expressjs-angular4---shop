import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<site-header></site-header>
		<router-outlet></router-outlet>
		<site-footer></site-footer>
	`
})
export class AppComponent { }

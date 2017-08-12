import { Component } from '@angular/core';

@Component({
	selector: 'site-content',
	template: `<site-header></site-header>
				<router-outlet name='front'></router-outlet>
				<site-footer></site-footer>`,
	host: {
		'class': 'layout-column'
	}
})
export class FrontComponent { }
import { Component } from '@angular/core';

@Component({
	selector: 'site-content',
	templateUrl: './front.component.html',
	host: {
		'class': 'layout-column'
	}
})
export class FrontComponent { }
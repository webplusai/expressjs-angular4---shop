import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'buyer',
	templateUrl: './buyer.component.html',
	styleUrls: [ './buyer.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class BuyerComponent {
	private page_alias;

	constructor(private router: Router) {
		router.events.subscribe((val) => {
			this.page_alias = router.url.split('/')[2];
		});
		
	}
}
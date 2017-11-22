import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
	styleUrls: [ './admin.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class AdminComponent {

	leftSideNavOpened = true;
	rightSideNavOpened = false;

	private title;
	private breadcrumb;

	constructor(private router: Router) {
		router.events.subscribe((val) => {
			this.title = router.url.split('/')[2];
			this.title = this.title.charAt(0).toUpperCase() + this.title.slice(1);
	    });
	}

	toggleLeftSidenav(leftSidenav, rightSidenav) {
		leftSidenav.toggle();
		this.leftSideNavOpened = leftSidenav.opened;
		rightSidenav.close();
	}

	toggleRightSidenav(leftSidenav, rightSidenav) {
		rightSidenav.toggle();
		this.rightSideNavOpened = rightSidenav.opened;

		if (rightSidenav.opened)
			leftSidenav.close();
		else if (this.leftSideNavOpened)
			leftSidenav.open();
	}

	ngOnInit() {
	}
}
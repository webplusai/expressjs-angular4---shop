import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'admin',
	templateUrl: './admin.component.html',
	styleUrls: [ './admin.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class AdminComponent {

	leftSideNavOpened = true;
	rightSideNavOpened = false;

	toggleLeftSidenav(leftSidenav, rightSidenav) {
		leftSidenav.toggle();
		this.leftSideNavOpened = leftSidenav.opened;
		if (rightSidenav.opened)
			rightSidenav.toggle();
	}

	toggleRightSidenav(leftSidenav, rightSidenav) {
		rightSidenav.toggle();
		this.rightSideNavOpened = rightSidenav.opened;

		if (rightSidenav.opened)
			leftSidenav.close();
		else if (this.leftSideNavOpened)
			leftSidenav.open();
	}
}
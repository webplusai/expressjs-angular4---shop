import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: [ './header.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

	public searchControl: FormControl;
	categories = [
		{ value: '1', viewValue: 'Category1' },
		{ value: '2', viewValue: 'Category2' },
		{ value: '3', viewValue: 'Category3' },
		{ value: '4', viewValue: 'Category4' },
		{ value: '5', viewValue: 'Category5' }
	];

	headerButtons = [
		{ icon: 'description', text: 'EMH Private Sale', link: 'private-sale' },
		{ icon: 'public', text: 'News', link: 'news' },
		{ icon: 'local_shipping', text: 'Free Delivery', link: 'free-delivery'  },
		{ icon: 'lock', text: 'Login', link: 'login' },
		{ icon: 'person', text: 'Sign Up', link: 'signup' }
	];

	ngOnInit() {
		this.searchControl = new FormControl('', [
			Validators.required
		]);
	}

	openLeftSidenav() {
		document.getElementById("leftSideNav").dispatchEvent(new Event("click"));
	}

	openRightSidenav() {
		document.getElementById("rightSideNav").dispatchEvent(new Event("click"));
	}
}
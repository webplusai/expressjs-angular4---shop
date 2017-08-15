import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-right-sidenav',
	templateUrl: './right.component.html',
	styleUrls: [ './right.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class RightSidenavComponent {

	public searchControl: FormControl;
	categories = [
		{ value: '1', viewValue: 'Category1' },
		{ value: '2', viewValue: 'Category2' },
		{ value: '3', viewValue: 'Category3' },
		{ value: '4', viewValue: 'Category4' },
		{ value: '5', viewValue: 'Category5' }
	];
	listButtons = [
		{ icon: 'description', text: 'EMH Private Sale' },
		{ icon: 'public', text: 'News' },
		{ icon: 'local_shipping', text: 'Free Delivery' },
		{ icon: 'lock', text: 'Login' },
		{ icon: 'person', text: 'Sign Up' }
	];

	ngOnInit() {
		this.searchControl = new FormControl('', [
			Validators.required
		]);
	}
}
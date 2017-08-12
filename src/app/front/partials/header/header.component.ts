import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'site-header',
	templateUrl: 'header.component.html'
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

	ngOnInit() {
		this.searchControl = new FormControl('', [
			Validators.required
		]);
	}

	openLeftSideNav() {
		document.getElementById("leftSideNav").dispatchEvent(new Event("click"));
	}
}
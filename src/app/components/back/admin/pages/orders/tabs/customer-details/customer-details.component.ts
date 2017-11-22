import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'admin-orders-tab-customer-details',
	templateUrl: './customer-details.component.html',
	styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

	firstName = new FormControl('', [
		Validators.required
	]);

	lastName = new FormControl('', [
		Validators.required
	]);

	email = new FormControl('', [
		Validators.required
	]);

	telephone = new FormControl('', [
		Validators.required
	]);

	constructor() { }

	ngOnInit() {
	}

}

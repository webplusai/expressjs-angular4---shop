import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
	selector: 'admin-buyers-form',
	templateUrl: 'buyers-form.component.html',
	styleUrls: [ 'buyers-form.component.scss' ]
})
export class BuyersFormComponent {

	firstName = new FormControl('', [
		Validators.required
	]);

	lastName=new FormControl('', [
		Validators.required
	]);

	email = new FormControl('', [
		Validators.required,
		Validators.pattern(EMAIL_REGEX)
	]);

	telephone = new FormControl('', [
		Validators.required
	]);

	password = new FormControl('', [
		Validators.required
	]);

	confirm = new FormControl('', [
		Validators.required
	]);

	form = new FormGroup({
		firstName	: this.firstName,
		lastName	: this.lastName,
		email 		: this.email,
		telephone	: this.telephone,
		password	: this.password,
		confirm		: this.confirm
	});

	createBuyer(buyersForm) {

	}
}
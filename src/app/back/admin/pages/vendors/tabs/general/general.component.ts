import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
	selector: 'admin-vendors-tab-general',
	templateUrl: './general.component.html',
	styleUrls: ['./general.component.scss']
})
export class VendorGeneralComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

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

	password = new FormControl('', [
		Validators.required
	]);

	confirm = new FormControl('', [
		Validators.required
	]);

	nickname = new FormControl('', [
		Validators.required
	]);

	tinyMCE = new FormControl('', []);

	form = new FormGroup({
		firstName	: this.firstName,
		lastName	: this.lastName,
		email 		: this.email,
		password	: this.password,
		confirm		: this.confirm,
		nickname	: this.nickname,
		tinyMCE		: this.tinyMCE
	});

}

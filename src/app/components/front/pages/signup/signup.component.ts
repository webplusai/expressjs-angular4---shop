import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

	nameInput = new FormControl('', [
		Validators.required
	]);
	emailInput = new FormControl('', [
		Validators.required,
		Validators.pattern(EMAIL_REGEX)
	]);
	passwordInput = new FormControl('', [
		Validators.required
	]);
	passwordConfirmInput = new FormControl('', [
		Validators.required
	]);
	tocCheckbox = new FormControl('', [
		Validators.requiredTrue
	]);

	form = new FormGroup({
		nameInput: this.nameInput,
		emailInput: this.emailInput,
		passwordInput: this.passwordInput,
		passwordConfirmInput: this.passwordConfirmInput,
		tocCheckbox: this.tocCheckbox
	});
	
	constructor() { }

	ngOnInit() {
	}

	signup(signupForm) {

	}

}

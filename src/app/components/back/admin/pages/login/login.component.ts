import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
	selector: 'admin-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	emailInput = new FormControl('', [
		Validators.required,
		Validators.pattern(EMAIL_REGEX)
	]);
	passwordInput = new FormControl('', [
		Validators.required
	]);

	form = new FormGroup({
		emailInput: this.emailInput,
		passwordInput: this.passwordInput
	});

	constructor(private router: Router) { }

	ngOnInit() {
	}

	signin(signinForm) {
		if (signinForm.valid) {
			this.router.navigateByUrl('/admin/dashboard');
		}
	}

}

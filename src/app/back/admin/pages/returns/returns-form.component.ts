import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'admin-returns-form',
	templateUrl: './returns-form.component.html',
	styleUrls: [ './returns-form.component.scss' ]
})
export class ReturnsFormComponent {
	orderIDInput = new FormControl('', [
		Validators.required
	]);

	firstNameInput = new FormControl('', [
		Validators.required
	]);

	lastNameInput = new FormControl('', [
		Validators.required
	]);

	emailInput = new FormControl('', [
		Validators.required
	]);

	telephoneInput = new FormControl('', [
		Validators.required
	]);

	productInput = new FormControl('', [
		Validators.required
	]);

	modelInput = new FormControl('', [
		Validators.required
	]);

	form = new FormGroup({
		orderIDInput: this.orderIDInput,
		firstNameInput: this.firstNameInput,
		lastNameInput: this.lastNameInput,
		emailInput: this.emailInput,
		telephoneInput: this.telephoneInput,
		productInput: this.productInput,
		modelInput: this.modelInput
	});
}
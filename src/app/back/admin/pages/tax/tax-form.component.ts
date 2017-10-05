import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'admin-tax-form',
	templateUrl: './tax-form.component.html',
	styleUrls: [ './tax-form.component.scss' ]
})
export class TaxFormComponent {
	taxName = new FormControl('', [
		Validators.required
	]);

	taxRate = new FormControl('', [
		Validators.required
	]);

	taxRateType = new FormControl('', [
		Validators.required
	]);

	taxAmount = new FormControl('', [
		Validators.required
	]);
}
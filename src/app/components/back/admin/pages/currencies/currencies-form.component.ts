import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'admin-currencies-form',
	templateUrl: './currencies-form.component.html',
	styleUrls: [ './currencies-form.component.scss' ]
})
export class CurrenciesFormComponent {
	currencyTitleInput = new FormControl('', [
		Validators.required
	]);

	valueInput = new FormControl('', [
		Validators.required
	]);

}
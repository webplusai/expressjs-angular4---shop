import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'admin-transactions-form',
	templateUrl: './transactions-form.component.html',
	styleUrls: [ './transactions-form.component.scss' ]
})
export class TransactionsFormComponent {
	amountInput = new FormControl('', [
		Validators.required
	]);

	form = new FormGroup({
		amountInput: this.amountInput
	});
}
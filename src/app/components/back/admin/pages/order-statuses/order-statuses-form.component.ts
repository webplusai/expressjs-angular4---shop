import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'admin-order-statuses-form',
	templateUrl: './order-statuses-form.component.html',
	styleUrls: [ './order-statuses-form.component.scss' ]
})
export class OrderStatusesFormComponent {
	orderStatusName = new FormControl('', [
		Validators.required
	]);
}
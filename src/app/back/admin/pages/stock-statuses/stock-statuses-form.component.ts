import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'admin-stock-statuses-form',
	templateUrl: './stock-statuses-form.component.html',
	styleUrls: [ './stock-statuses-form.component.scss' ]
})
export class StockStatusesFormComponent { 
	stockStatusName = new FormControl('', [
		Validators.required
	]);
}
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'admin-store-locations-form',
	templateUrl: './store-locations-form.component.html',
	styleUrls: [ './store-locations-form.component.scss' ]
})
export class StoreLocationsFormComponent { 
	storeName = new FormControl('', [
		Validators.required
	]);

	address = new FormControl('', [
		Validators.required
	]);
}
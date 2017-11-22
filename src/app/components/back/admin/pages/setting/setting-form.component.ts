import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'admin-setting-form',
	templateUrl: './setting-form.component.html',
	styleUrls: [ './setting-form.component.scss' ]
})
export class SettingFormComponent {
	storeName = new FormControl('', [
		Validators.required
	]);

	storeUrl = new FormControl('', [
		Validators.required
	]);
}
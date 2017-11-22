import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'admin-languages-form',
	templateUrl: './languages-form.component.html',
	styleUrls: [ './languages-form.component.scss' ]
})
export class LanguagesFormComponent {
	languageName = new FormControl('', [
		Validators.required
	]);

	sortOrder = new FormControl('', [
		Validators.required
	]);
}
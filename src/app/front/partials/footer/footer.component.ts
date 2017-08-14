import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'site-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent {
	public emailFormControl: FormControl;

	ngOnInit() {
		this.emailFormControl = new FormControl('', [
			Validators.required
		]);
	}
}
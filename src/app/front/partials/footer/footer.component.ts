import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'site-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent {
	public emailFormControl: FormControl;

	slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 3000 };
	ngOnInit() {
		this.emailFormControl = new FormControl('', [
			Validators.required
		]);
	}
}
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'admin-products-form',
	templateUrl: './products-form.component.html',
	styleUrls: [ './products-form.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class ProductsFormComponent {

	form = new FormGroup({});
}
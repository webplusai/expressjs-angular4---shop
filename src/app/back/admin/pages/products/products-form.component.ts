import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'admin-products-form',
	templateUrl: './products-form.component.html',
	styleUrls: [ './products-form.component.scss' ]
})
export class ProductsFormComponent {

	form = new FormGroup({});
	category = new FormControl();
	filter = new FormControl();
	download = new FormControl();
	relatedProduct = new FormControl();

	categoriesList = [];
	filtersList = [];
	downloadsList = [];
	relatedProductsList = [];

	selectChange(component, list) {
		if (list.indexOf(component.value) == -1)
			list.push(component.value);
		component.setValue('');
	}

	removeItem(list, index) {
		list.splice(index, 1);
	}
}
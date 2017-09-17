import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'admin-product-tab-links',
	templateUrl: './links.component.html',
	styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

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

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'admin-category-tab-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.scss']
})
export class CategoryDataComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	filter = new FormControl();

	filtersList = [];

	selectChange(component, list) {
		if (list.indexOf(component.value) == -1)
			list.push(component.value);
		component.setValue('');
	}

	removeItem(list, index) {
		list.splice(index, 1);
	}

}

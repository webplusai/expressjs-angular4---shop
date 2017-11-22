import { Component, OnInit, Input } 		from '@angular/core';
import { FormControl, FormGroup } 			from '@angular/forms';

import { CRUDService } 						from 	'../../../../../../../services/crud.service';

@Component({
	selector: 'admin-category-tab-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.scss']
})
export class CategoryDataComponent implements OnInit {

	@Input() data: FormGroup;

	filter = new FormControl();
	filters = [];
	categories = [];
	stores = [];

	selectedFilters = [];

	constructor(private crudService: CRUDService) { }

	isAlreadySelected(obj, list) {
		for (var i = 0; i < list.length; i++) {
			if (obj._id == list[i]._id)
				return true;
		}
		return false;
	}

	ngOnInit() {
		this.crudService.retrieve( 'Filter' ).subscribe( result => {
			if (result.status == 'ok') {
				this.filters = result.content;
			}
		});

		this.crudService.retrieve( 'Category' ).subscribe( result => {
			if (result.status == 'ok') {
				this.categories = result.content;
			}
		});

		this.crudService.retrieve( 'Store' ).subscribe( result => {
			if (result.status == 'ok') {
				this.stores = result.content;
			}
		});
	}

	selectChange(component, list) {
		var value = JSON.parse(component.value);
		if (!this.isAlreadySelected(value, list))
			list.push(value);
		component.setValue('');

		console.log(this.data);
		console.log(list);
	}

	removeItem(list, index) {
		list.splice(index, 1);
	}

}

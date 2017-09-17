import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as $ from 'jquery';

@Component({
	selector: 'admin-product-tab-option',
	templateUrl: './option.component.html',
	styleUrls: ['./option.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class OptionComponent implements OnInit {

	constructor() { }

	optionType: string;

	optionsList = [];

	selectedIndex = 0;

	ngOnInit() {
	}

	clicked(e) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	addNewTab(e) {
		this.optionsList.push({ type: $(e.target).find('option:selected').val() });
		$(e.target).val("");
		this.selectedIndex = this.optionsList.length - 1;
	}

	removeTab(index) {
		this.optionsList.splice(index, 1);
		this.selectedIndex = this.optionsList.length - 1;
	}

}

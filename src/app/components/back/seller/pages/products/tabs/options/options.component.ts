import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'seller-product-tab-options',
	templateUrl: './options.component.html',
	styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

	option = '+ Add option';
	size = '+ Add value';
	color = '+ Add value';

	colors = null;
	sizes = null;

	constructor() { }

	ngOnInit() {

	}

	addOption(e) {
		if (this.option == 'Colors' && this.colors == null)
			this.colors = [];
		else if (this.option == 'Sizes' && this.sizes == null)
			this.sizes = [];

		this.option = '+ Add option';
		$(e.target).find('option:first-child').prop('selected', 'true');
	}

	addSize(e) {
		$(e.target).find('option:first-child').prop('selected', true);
		for (var i = 0; i < this.sizes.length; i++) {
			if (this.sizes[i].size == this.size)
				return;
		}

		this.sizes.push({ size: this.size, price: '', quantity: '' });
		this.size = '+ Add value';
	}

	addColor(e) {
		$(e.target).find('option:first-child').prop('selected', true);
		for (var i = 0; i < this.colors.length; i++) {
			if (this.colors[i].color == this.color)
				return;
		}

		this.colors.push({ color: this.color, price: '', quantity: '' });
		this.color = '+ Add value';
	}

	removeColor(i) {
		this.colors.splice(i, 1);
	}

	removeSize(i) {
		this.sizes.splice(i, 1);
	}

}

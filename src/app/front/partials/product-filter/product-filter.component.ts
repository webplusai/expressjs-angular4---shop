import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-product-filter',
	templateUrl: './product-filter.component.html',
	styleUrls: ['./product-filter.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProductFilterComponent implements OnInit {

	constructor() { }

	priceList = [ '$0 - $200', '$200 - $1000', '$1000 - $5000', '$5000 - $10000' ];
	colorList = [ 'Red', 'Green', 'Blue' ];
	brandList = [ 'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5' ];

	ngOnInit() {
	}

}

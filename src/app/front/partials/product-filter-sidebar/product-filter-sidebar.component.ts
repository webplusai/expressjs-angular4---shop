import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-product-filter-sidebar',
	templateUrl: './product-filter-sidebar.component.html',
	styleUrls: ['./product-filter-sidebar.component.scss']
})
export class ProductFilterSidebarComponent implements OnInit {

	sidebarItems = [
		{ 
			title: 'Category', 
			items: [ 'Denim Shirt', 'Short Sleeve', 'Blazers', 'Co-Ords', 'Jacket', 'Denim Shirt', 'Short Sleeve', 'Blazers', 'Co-Ords', 'Jacket', 'Denim Shirt' ]
		},
		{
			title: 'Price',
			items: [ '$0 - $200', '$200 - $1000', '$1000 - $5000', '$5000 - $10000' ]
		},
		{
			title: 'Brand',
			items: [ 'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5' ]
		}
	];

	colors = [
		'#ffa200', '#34cc67', '#2ab9d9', '#333', '#898989', '#fff'
	]

	constructor() { }

	ngOnInit() {
		$(document).ready(function() {

			// Set the max-height of each filter card using Javascript. This is for slidedown and slideup transition.
			$('.mat-card-content').each(function() {
				$(this).css('max-height', $(this).outerHeight());
			});
		});
	}

	toggleFilterCard($event) {
		var e = $($event.target).closest('.mat-card');
		e.toggleClass('closed');
	}

}

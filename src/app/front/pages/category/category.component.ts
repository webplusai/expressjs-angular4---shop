import { Component, OnInit } from '@angular/core';

import { ProductFilterComponent } from '../../partials/category/product-filter/product-filter.component';
import { SidebarComponent } from '../../partials/category/sidebar/sidebar.component';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}

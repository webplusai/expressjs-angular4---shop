import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
	selector: 'admin-category-tab-design',
	templateUrl: './design.component.html',
	styleUrls: ['./design.component.scss']
})
export class CategoryDesignComponent implements OnInit {

	layouts = [ 'Account', 'Affiliate', 'Category', 'Checkout', 'Compare', 'Contact', 'Default', 'Home', 'Information', 'Manufacturer', 'Product', 'Search', 'Sitemap' ];

	displayedColumns = ['stores', 'layout'];
	dataSource = new CategoriesDataSource();
	constructor() { }

	ngOnInit() {
	}

}

export class CategoriesDataSource extends DataSource<any> {
	connect(): Observable<any> {
		return Observable.of( [{stores: 'Default'}] );
	}

	disconnect() {}
}
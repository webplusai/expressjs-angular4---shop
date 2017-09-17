import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-product-tab-design',
	templateUrl: './design.component.html',
	styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

	displayedColumns = ['stores', 'layout_override'];
	tableData = new TableData();
	dataSource : DesignDataSource | null;

	designList = [ {stores: 'Default', layout_override: ''} ];

	layoutList = [ 'Account', 'Affiliate', 'Category', 'Checkout', 'Compare', 'Contact', 'Default', 'Home', 'Information', 'Manufacturer', 'Product', 'Search', 'Sitemap' ];

	constructor() { }

	ngOnInit() {
		this.tableData = new TableData();
		this.tableData.setData( this.designList );
		this.dataSource = new DesignDataSource(this.tableData);
	}
}

export class DesignDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			return this._tableData.data;
		});
	}

	disconnect() {

	}
}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MdPaginator } from '@angular/material';
import { MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { TableData } from '../../../../helper/table-data/table-data';

const productsList = [];

@Component({
	selector: 'seller-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: [ './products-list.component.scss' ]
})
export class ProductsListComponent implements OnInit {

	displayedColumns = [ 'product', 'price', 'sales', 'earnings', 'status', 'date_added', 'listing_until', 'action' ];

	tableData = new TableData();
	dataSource: ProductsDataSource | null;

	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(productsList);
		this.dataSource = new ProductsDataSource(this.tableData, this.sort);
	}
}

export class ProductsDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_sort.mdSortChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			return this.getSortedData();
		});
	}

	getSortedData(): any {
		const data = this._tableData.data.slice();
		if (!this._sort.active || this._sort.direction == '') { return data; }

		return data.sort((a, b) => {
			let propertyA: number|string = '';
			let propertyB: number|string = '';

			[propertyA, propertyB] = [a[this._sort.active], b[this._sort.active]];

			let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
			let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

			return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
		});
	}

	disconnect() {

	}
}
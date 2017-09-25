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

const returnsList = [
	{ return_id: '1', order_id: '1', customer: 'Customer 1', product: 'Product 1', model: 'Model 1', status: 'Awaiting', date_added: '2017-09-25', date_modified: '2017-09-25' },
	{ return_id: '2', order_id: '2', customer: 'Customer 2', product: 'Product 2', model: 'Model 2', status: 'Awaiting', date_added: '2017-09-25', date_modified: '2017-09-25' },
	{ return_id: '3', order_id: '3', customer: 'Customer 3', product: 'Product 3', model: 'Model 3', status: 'Awaiting', date_added: '2017-09-25', date_modified: '2017-09-25' },
	{ return_id: '4', order_id: '4', customer: 'Customer 4', product: 'Product 4', model: 'Model 4', status: 'Awaiting', date_added: '2017-09-25', date_modified: '2017-09-25' },
	{ return_id: '5', order_id: '5', customer: 'Customer 5', product: 'Product 5', model: 'Model 5', status: 'Awaiting', date_added: '2017-09-25', date_modified: '2017-09-25' },
]

@Component({
	selector: 'buyer-returns',
	templateUrl: './returns.component.html',
	styleUrls: [ './returns.component.scss' ]
})
export class ReturnsComponent implements OnInit {

	displayedColumns = ['return_id', 'order_id', 'customer', 'product', 'model', 'status', 'date_added', 'date_modified', 'action'];

	tableData = new TableData();
	dataSource: ReturnsDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(returnsList);
		this.dataSource = new ReturnsDataSource(this.tableData, this.paginator, this.sort);
	}
}

export class ReturnsDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData, private  _paginator: MdPaginator, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_paginator.page,
			_sort.mdSortChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			const startIndex = this._paginator.pageIndex  * this._paginator.pageSize;
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
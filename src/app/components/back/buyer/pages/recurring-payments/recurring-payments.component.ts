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

const recurringPaymentList = [
	{ recurring_id: 1, order_id: 1, payment_reference: 'Reference1', customer: 'Customer1', status: 'Enabled', date_added: '2017-09-07'},
	{ recurring_id: 2, order_id: 2, payment_reference: 'Reference2', customer: 'Customer2', status: 'Enabled', date_added: '2017-09-07'},
	{ recurring_id: 3, order_id: 3, payment_reference: 'Reference3', customer: 'Customer3', status: 'Enabled', date_added: '2017-09-07'},
	{ recurring_id: 4, order_id: 4, payment_reference: 'Reference4', customer: 'Customer4', status: 'Enabled', date_added: '2017-09-07'},
	{ recurring_id: 5, order_id: 5, payment_reference: 'Reference5', customer: 'Customer5', status: 'Enabled', date_added: '2017-09-07'},
]

@Component({
	selector: 'buyer-recurring-payments',
	templateUrl: './recurring-payments.component.html',
	styleUrls: ['./recurring-payments.component.scss']
})
export class RecurringPaymentsComponent implements OnInit {

	displayedColumns = ['recurring_id', 'order_id', 'payment_reference', 'customer', 'status', 'date_added', 'action'];
	tableData = new TableData();
	dataSource: RecurringPaymentDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(recurringPaymentList);
		this.dataSource = new RecurringPaymentDataSource(this.tableData, this.paginator, this.sort);
	}
}

export class RecurringPaymentDataSource extends DataSource<any> {

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
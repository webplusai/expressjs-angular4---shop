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

const balanceList = [
	{ filter_record: true },
	{ order: 1, amount: '$5.00', description: 'Description', date_created: '16/04/2015' },
	{ order: 1, amount: '$5.00', description: 'Description', date_created: '16/04/2015' },
	{ order: 1, amount: '$5.00', description: 'Description', date_created: '16/04/2015' },
	{ order: 1, amount: '$5.00', description: 'Description', date_created: '16/04/2015' },
	{ order: 1, amount: '$5.00', description: 'Description', date_created: '16/04/2015' }
];

const paymentList = [
	{ filter_record: true },
	{ order: 1, type: 'Payout request', amount: '$100.00', description: 'Description', status: 'Paid', date_paid: '11/05/2015' }
];

@Component({
	selector: 'seller-financial-records',
	templateUrl: './financial-records.component.html',
	styleUrls: ['./financial-records.component.scss']
})
export class FinancialRecordsComponent implements OnInit {

	displayedColumnsBalance = ['order', 'amount', 'description', 'date_created'];
	displayedColumnsPayments = ['order', 'type', 'amount', 'description', 'status', 'date_paid'];
	tableDataBalance = new TableData();
	tableDataPayments = new TableData();
	dataSourceBalance: BalanceDataSource | null;
	dataSourcePayments: PaymentsDataSource | null;

	@ViewChild('mdPaginatorBalance') paginatorBalance: MdPaginator;
	@ViewChild(MdSort) sortBalance: MdSort;

	@ViewChild('mdPaginatorPayments') paginatorPayments: MdPaginator;
	@ViewChild(MdSort) sortPayments: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableDataBalance.setData(balanceList);
		this.dataSourceBalance = new BalanceDataSource(this.tableDataBalance, this.paginatorBalance, this.sortBalance);

		this.tableDataPayments.setData(paymentList);
		this.dataSourcePayments = new PaymentsDataSource(this.tableDataPayments, this.paginatorPayments, this.sortPayments);
	}
}

export class BalanceDataSource extends DataSource<any> {

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

export class PaymentsDataSource extends DataSource<any> {

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
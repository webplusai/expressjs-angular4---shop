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

const historicalOrderList = [
	{ reference_order: '#WDLKJKLJ', date: '3-5-2017', client: 'John Doe', commission_total: '$3.00', state_commission: 'Commission Not Yet Accepted', state_payment_commission: 'Payment Waiting' },
	{ reference_order: '#WDLKJKLJ', date: '3-5-2017', client: 'John Doe', commission_total: '$3.00', state_commission: 'Commission Not Yet Accepted', state_payment_commission: 'Payment Waiting' },
	{ reference_order: '#WDLKJKLJ', date: '3-5-2017', client: 'John Doe', commission_total: '$3.00', state_commission: 'Commission Accepted', state_payment_commission: 'Commission paid' },
	{ reference_order: '#WDLKJKLJ', date: '3-5-2017', client: 'John Doe', commission_total: '$3.00', state_commission: 'Commission Accepted', state_payment_commission: 'Commission paid' }
];

const totalList = [
	{ total: '$9.00', pay: '$5.00', waiting: '$4.00' }
];

@Component({
	selector: 'admin-affiliation-list',
	templateUrl: './affiliation-list.component.html',
	styleUrls: ['./affiliation-list.component.scss']
})
export class AffiliationListComponent implements OnInit {

	displayedColumnsHistoricalOrder = ['reference_order', 'date', 'client', 'commission_total', 'state_commission', 'state_payment_commission'];
	displayedColumnsTotal = [ 'total', 'pay', 'waiting' ];
	
	tableDataHistoricalOrder = new TableData();
	dataSourceHistoricalOrder: HistoricalOrderDataSource | null;

	tableDataTotal = new TableData();
	dataSourceTotal : TotalDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableDataHistoricalOrder.setData(historicalOrderList);
		this.dataSourceHistoricalOrder = new HistoricalOrderDataSource(this.tableDataHistoricalOrder, this.paginator, this.sort);

		this.tableDataTotal.setData(totalList);
		this.dataSourceTotal = new TotalDataSource(this.tableDataTotal);
	}
}

export class TotalDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
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

export class HistoricalOrderDataSource extends DataSource<any> {

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
			return this.getSortedData().splice(startIndex, this._paginator.pageSize);
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
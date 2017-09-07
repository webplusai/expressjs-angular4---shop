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

const recurringOrdersList = [
	{ recurring_id: 1, order_id: 1, payment_reference: 'Reference1', customer: 'Customer1', status: 'Enabled', date_added: '2017-09-07'},
	{ recurring_id: 2, order_id: 2, payment_reference: 'Reference2', customer: 'Customer2', status: 'Enabled', date_added: '2017-09-07'},
	{ recurring_id: 3, order_id: 3, payment_reference: 'Reference3', customer: 'Customer3', status: 'Enabled', date_added: '2017-09-07'},
	{ recurring_id: 4, order_id: 4, payment_reference: 'Reference4', customer: 'Customer4', status: 'Enabled', date_added: '2017-09-07'},
	{ recurring_id: 5, order_id: 5, payment_reference: 'Reference5', customer: 'Customer5', status: 'Enabled', date_added: '2017-09-07'},
]

@Component({
	selector: 'admin-recurring-orders-list',
	templateUrl: './recurring-orders-list.component.html',
	styleUrls: ['./recurring-orders-list.component.scss']
})
export class RecurringOrdersListComponent implements OnInit {

	displayedColumns = ['recurring_id', 'order_id', 'payment_reference', 'customer', 'status', 'date_added', 'action'];
	tableData = new TableData();
	dataSource: RecurringOrdersDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	@ViewChild('recurringIDFilter') 			recurringIDFilter			: 	ElementRef;
	@ViewChild('orderIDFilter') 				orderIdFilter				: 	ElementRef;
	@ViewChild('paymentReferenceFilter')		paymentReferenceFilter		: 	ElementRef;
	@ViewChild('customerFilter')				customerFilter				: 	ElementRef;
	@ViewChild('statusFilter')					statusFilter				: 	ElementRef;
	@ViewChild('dateAddedFilter')				dateAddedFilter				: 	ElementRef;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(recurringOrdersList);
		this.dataSource = new RecurringOrdersDataSource(this.tableData, this.paginator, this.sort);

		Observable.fromEvent(this.recurringIDFilter.nativeElement, 'keyup')
			.debounceTime(150)
			.distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) return;
				this.dataSource.recurringIDFilter = this.recurringIDFilter.nativeElement.value;
			});
	}
}

export class RecurringOrdersDataSource extends DataSource<any> {

	displayDataChanges: any;
	_recurringIDFilterChange 		= new BehaviorSubject('');
	_orderIDFilterChange 			= new BehaviorSubject('');
	_paymentReferenceFilterChange	= new BehaviorSubject('');
	_customerFilterChange 			= new BehaviorSubject('');
	_statusFilterChange				= new BehaviorSubject('');
	_dateAddedFilterChange 			= new BehaviorSubject('');

	get recurringIDFilter(): string { return this._recurringIDFilterChange.value; }
	set recurringIDFilter(filter: string) { this._recurringIDFilterChange.next(filter); }

	get orderIDFilter(): string { return this._orderIDFilterChange.value; }
	set orderIDFilter(filter: string) { this._orderIDFilterChange.next(filter); }

	get paymentReferenceFilter(): string { return this._paymentReferenceFilterChange.value; }
	set paymentReferenceFilter(filter: string) { this._paymentReferenceFilterChange.next(filter); }

	get customerFilter(): string { return this._customerFilterChange.value; }
	set customerFilter(filter: string) { this._customerFilterChange.next(filter); }

	get statusFilter(): string { return this._statusFilterChange.value; }
	set statusFilter(filter: string) { this._statusFilterChange.next(filter); }

	get dateAddedFilter(): string { return this._dateAddedFilterChange.value; }
	set dateAddedFilter(filter: string) { this._dateAddedFilterChange.next(filter); }

	constructor(private _tableData: TableData, private  _paginator: MdPaginator, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_paginator.page,
			_sort.mdSortChange,
			this._recurringIDFilterChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			const startIndex = this._paginator.pageIndex  * this._paginator.pageSize;
			return this.getSortedData().slice().filter((item) => {

				let searchStr = (item.recurring_id + ' ' + item.order_id + ' ' + item.payment_reference + ' ' + item.customer + ' ' + item.status + ' ' + item.date_added).toLowerCase();
				return searchStr.indexOf(this.recurringIDFilter.toLowerCase()) != -1;
			}).splice(startIndex, this._paginator.pageSize);
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
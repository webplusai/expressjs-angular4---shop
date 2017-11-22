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

const ordersList = [
	{ order_id: 1, customer: 'Customer1', seller: 'Seller1', status: 'Completed', total: '$100', date_added: '2017-09-08', date_modified: '2017-09-08' },
	{ order_id: 2, customer: 'Customer2', seller: 'Seller2', status: 'Completed', total: '$200', date_added: '2017-09-08', date_modified: '2017-09-08' },
	{ order_id: 3, customer: 'Customer3', seller: 'Seller3', status: 'Completed', total: '$300', date_added: '2017-09-08', date_modified: '2017-09-08' },
	{ order_id: 4, customer: 'Customer4', seller: 'Seller4', status: 'Completed', total: '$400', date_added: '2017-09-08', date_modified: '2017-09-08' },
	{ order_id: 5, customer: 'Customer5', seller: 'Seller5', status: 'Completed', total: '$500', date_added: '2017-09-08', date_modified: '2017-09-08' },
]

@Component({
	selector: 'admin-orders-list',
	templateUrl: './orders-list.component.html',
	styleUrls: [ './orders-list.component.scss' ]
})
export class OrdersListComponent implements OnInit {

	displayedColumns = ['order_id', 'customer', 'seller', 'status', 'total', 'date_added', 'date_modified', 'action'];

	orderStatuses = [ 'Missing Orders', 'Canceled', 'Canceled Reversal', 'Chargeback', 'Complete', 'Denied', 'Expired', 'Failed', 'Pending', 'Processed', 'Processing', 'Refunded', 'Reversed', 'Shipped', 'Voided' ];

	tableData = new TableData();
	dataSource: OrdersDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	@ViewChild('orderIDFilter') 			orderIDFilter			: 	ElementRef;
	@ViewChild('orderStatusFilter')			orderStatusFilter		: 	ElementRef;
	@ViewChild('dateAddedFilter')			dateAddedFilter			: 	ElementRef;
	@ViewChild('customerFilter')			customerFilter			: 	ElementRef;
	@ViewChild('totalFilter')				totalFilter				: 	ElementRef;
	@ViewChild('dateModifiedFilter')		dateModifiedFilter		: 	ElementRef;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(ordersList);
		this.dataSource = new OrdersDataSource(this.tableData, this.paginator, this.sort);

		Observable.fromEvent(this.orderIDFilter.nativeElement, 'keyup')
			.debounceTime(150)
			.distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) return;
				this.dataSource.orderIDFilter = this.orderIDFilter.nativeElement.value;
			});
	}
}

export class OrdersDataSource extends DataSource<any> {

	displayDataChanges: any;

	_orderIDFilterChange 			= new BehaviorSubject('');
	_orderStatusFilterChange		= new BehaviorSubject('');
	_dateAddedFilterChange 			= new BehaviorSubject('');
	_customerFilterChange			= new BehaviorSubject('');
	_totalFilterChange 				= new BehaviorSubject('');
	_dateModifiedFilterChange 		= new BehaviorSubject('');

	get orderIDFilter(): string { return this._orderIDFilterChange.value; }
	set orderIDFilter(filter: string) { this._orderIDFilterChange.next(filter); }

	get orderStatusFilter(): string { return this._orderStatusFilterChange.value; }
	set orderStatusFilter(filter: string) { this._orderStatusFilterChange.next(filter); }

	get dateAddedFilter(): string { return this._dateAddedFilterChange.value; }
	set dateAddedFilter(filter: string) { this._dateAddedFilterChange.next(filter); }

	get customerFilter(): string { return this._customerFilterChange.value; }
	set customerFilter(filter: string) { this._customerFilterChange.next(filter); }

	get totalFilter(): string { return this._totalFilterChange.value; }
	set totalFilter(filter: string) { this._totalFilterChange.next(filter); }

	get dateModifiedFilter(): string { return this._dateModifiedFilterChange.value; }
	set dateModifiedFilter(filter: string) { this._dateModifiedFilterChange.next(filter); }

	constructor(private _tableData: TableData, private  _paginator: MdPaginator, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_paginator.page,
			_sort.mdSortChange,
			this._orderIDFilterChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			const startIndex = this._paginator.pageIndex  * this._paginator.pageSize;
			return this.getSortedData().slice().filter((item) => {

				let searchStr = (item.order_id + ' ' + item.customer + ' ' + item.seller + ' ' + item.total + ' ' + item.date_added + ' ' + item.date_modified).toLowerCase();
				return searchStr.indexOf(this.orderIDFilter.toLowerCase()) != -1;
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
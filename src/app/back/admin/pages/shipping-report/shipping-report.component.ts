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

const shippingReportList = [
	{ date_start: '06/10/2014', date_end: '11/10/2014', shipping_title: 'Flat Shipping Rate', 'no_orders': '159', 'total': '$795' },
	{ date_start: '06/10/2014', date_end: '11/10/2014', shipping_title: 'Flat Shipping Rate', 'no_orders': '159', 'total': '$795' },
	{ date_start: '06/10/2014', date_end: '11/10/2014', shipping_title: 'Flat Shipping Rate', 'no_orders': '159', 'total': '$795' },
	{ date_start: '06/10/2014', date_end: '11/10/2014', shipping_title: 'Flat Shipping Rate', 'no_orders': '159', 'total': '$795' },
	{ date_start: '06/10/2014', date_end: '11/10/2014', shipping_title: 'Flat Shipping Rate', 'no_orders': '159', 'total': '$795' }
];

@Component({
	selector: 'admin-shipping-report',
	templateUrl: './shipping-report.component.html',
	styleUrls: ['./shipping-report.component.scss']
})
export class ShippingReportComponent implements OnInit {

	displayedColumns = [ 'date_start', 'date_end', 'shipping_title', 'no_orders', 'total' ];
	tableData = new TableData();
	dataSource: ShippingReportDataSource | null;

	orderStatuses = [ 'Missing Orders', 'Canceled', 'Canceled Reversal', 'Chargeback', 'Complete', 'Denied', 'Expired', 'Failed', 'Pending', 'Processed', 'Processing', 'Refunded', 'Reversed', 'Shipped', 'Voided' ];

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	@ViewChild('dateStartFilter') 		dateStartFilter		: 	ElementRef;
	@ViewChild('dateEndFilter') 		dateEndFilter		: 	ElementRef;
	@ViewChild('groupByFilter') 		groupByFilter		: 	ElementRef;
	@ViewChild('orderStatusFilter') 	orderStatusFilter	: 	ElementRef;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(shippingReportList);
		this.dataSource = new ShippingReportDataSource(this.tableData, this.paginator, this.sort);

		Observable.fromEvent(this.dateStartFilter.nativeElement, 'keyup')
			.debounceTime(150)
			.distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) return;
				this.dataSource.dateStartFilter = this.dateStartFilter.nativeElement.value;
			});
	}
}

export class ShippingReportDataSource extends DataSource<any> {

	displayDataChanges: any;
	_dateStartFilterChange 		= new BehaviorSubject('');
	_dateEndFilterChange 		= new BehaviorSubject('');
	_groupByFilterChange 		= new BehaviorSubject('');
	_orderStatusFilterChange 	= new BehaviorSubject('');

	get dateStartFilter(): string { return this._dateStartFilterChange.value; }
	set dateStartFilter(filter: string) { this._dateStartFilterChange.next(filter); }

	get dateEndFilter(): string { return this._dateEndFilterChange.value; }
	set dateEndFilter(filter: string) { this._dateEndFilterChange.next(filter); }

	get groupByFilter(): string { return this._groupByFilterChange.value; }
	set groupByFilter(filter: string) { this._groupByFilterChange.next(filter); }

	get orderStatusFilter(): string { return this._orderStatusFilterChange.value; }
	set orderStatusFilter(filter: string) { this._orderStatusFilterChange.next(filter); }

	constructor(private _tableData: TableData, private  _paginator: MdPaginator, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_paginator.page,
			_sort.mdSortChange,
			this._dateStartFilterChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			const startIndex = this._paginator.pageIndex  * this._paginator.pageSize;
			return this.getSortedData().slice().filter((item) => {
				let searchStr = (item.date_start + ' ' + item.date_end + ' ' + item.shipping_title + ' ' + item.no_orders + ' ' + item.total).toLowerCase();
				return searchStr.indexOf(this.dateStartFilter.toLowerCase()) != -1;
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
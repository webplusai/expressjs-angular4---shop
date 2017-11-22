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

const sellerList = [
	{seller: 'Seller1', image: 'avatar1.jpg', email: 'user1@email.com', products: 'Product1', sales: '1', earnings: '$100', balance: '$200', status: 'Enabled', date_created: '2017-09-03'},
	{seller: 'Seller2', image: 'avatar1.jpg', email: 'user2@email.com', products: 'Product2', sales: '2', earnings: '$200', balance: '$300', status: 'Enabled', date_created: '2017-09-03'},
	{seller: 'Seller3', image: 'avatar1.jpg', email: 'user3@email.com', products: 'Product3', sales: '3', earnings: '$300', balance: '$400', status: 'Enabled', date_created: '2017-09-03'},
	{seller: 'Seller4', image: 'avatar1.jpg', email: 'user4@email.com', products: 'Product4', sales: '4', earnings: '$400', balance: '$500', status: 'Enabled', date_created: '2017-09-03'},
	{seller: 'Seller5', image: 'avatar1.jpg', email: 'user5@email.com', products: 'Product5', sales: '5', earnings: '$500', balance: '$600', status: 'Enabled', date_created: '2017-09-03'},
	{seller: 'Seller6', image: 'avatar1.jpg', email: 'user6@email.com', products: 'Product6', sales: '6', earnings: '$600', balance: '$700', status: 'Enabled', date_created: '2017-09-03'},
	{seller: 'Seller7', image: 'avatar1.jpg', email: 'user7@email.com', products: 'Product7', sales: '7', earnings: '$700', balance: '$800', status: 'Enabled', date_created: '2017-09-03'},
	{seller: 'Seller8', image: 'avatar1.jpg', email: 'user7@email.com', products: 'Product8', sales: '8', earnings: '$800', balance: '$900', status: 'Enabled', date_created: '2017-09-03'}
];

@Component({
	selector: 'admin-bloggers-list',
	templateUrl: './bloggers-list.component.html',
	styleUrls: ['./bloggers-list.component.scss']
})
export class BloggersListComponent implements OnInit {

	displayedColumns = ['seller', 'image', 'email', 'product', 'sales', 'earnings', 'balance', 'status', 'date_created', 'action'];
	tableData = new TableData();
	dataSource: UserDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	@ViewChild('sellerFilter') 		sellerFilter	: 	ElementRef;
	@ViewChild('emailFilter') 		emailFilter		: 	ElementRef;
	@ViewChild('productFilter') 	productFilter	: 	ElementRef;
	@ViewChild('salesFilter') 		salesFilter		: 	ElementRef;
	@ViewChild('earningsFilter')	earningsFilter	: 	ElementRef;
	@ViewChild('balanceFilter')		balanceFilter	: 	ElementRef;
	@ViewChild('statusFilter')		statusFilter	: 	ElementRef;
	@ViewChild('dateFilter')		dateFilter		: 	ElementRef;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(sellerList);
		this.dataSource = new UserDataSource(this.tableData, this.paginator, this.sort);

		Observable.fromEvent(this.sellerFilter.nativeElement, 'keyup')
			.debounceTime(150)
			.distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) return;
				this.dataSource.sellerFilter = this.sellerFilter.nativeElement.value;
			});
	}
}

export class UserDataSource extends DataSource<any> {

	displayDataChanges: any;
	_sellerFilterChange 		= new BehaviorSubject('');
	_emailFilterChange 			= new BehaviorSubject('');
	_productFilterChange 		= new BehaviorSubject('');
	_salesFilterChange 			= new BehaviorSubject('');
	_earningsFilterChange 		= new BehaviorSubject('');
	_balanceFilterChange 		= new BehaviorSubject('');
	_statusFilterChange 		= new BehaviorSubject('');
	_dateFilterChange 			= new BehaviorSubject('');

	get sellerFilter(): string { return this._sellerFilterChange.value; }
	set sellerFilter(filter: string) { this._sellerFilterChange.next(filter); }

	get emailFilter(): string { return this._emailFilterChange.value; }
	set emailFilter(filter: string) { this._emailFilterChange.next(filter); }

	get productFilter(): string { return this._productFilterChange.value; }
	set productFilter(filter: string) { this._productFilterChange.next(filter); }

	get salesFilter(): string { return this._salesFilterChange.value; }
	set salesFilter(filter: string) { this._salesFilterChange.next(filter); }

	get earningsFilter(): string { return this._earningsFilterChange.value; }
	set earningsFilter(filter: string) { this._earningsFilterChange.next(filter); }

	get balanceFilter(): string { return this._balanceFilterChange.value; }
	set balanceFilter(filter: string) { this._balanceFilterChange.next(filter); }

	get statusFilter(): string { return this._statusFilterChange.value; }
	set statusFilter(filter: string) { this._statusFilterChange.next(filter); }

	get dateFilter(): string { return this._dateFilterChange.value; }
	set dateFilter(filter: string) { this._dateFilterChange.next(filter); }

	constructor(private _tableData: TableData, private  _paginator: MdPaginator, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_paginator.page,
			_sort.mdSortChange,
			this._sellerFilterChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			const startIndex = this._paginator.pageIndex  * this._paginator.pageSize;
			return this.getSortedData().slice().filter((item) => {

				let searchStr = (item.seller + ' ' + item.email + ' ' + item.products + ' ' + item.sales + ' ' + item.earnings + ' ' + item.balance + ' ' + item.status + ' ' + item.date_created).toLowerCase();
				return searchStr.indexOf(this.sellerFilter.toLowerCase()) != -1;
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
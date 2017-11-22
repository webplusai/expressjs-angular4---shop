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

const transactionsList = [
	{ index: 1, image: 'avatar1.jpg', seller: 'Seller1', net_amount: '$100', description: 'Description', date: '2017-09-07'},
	{ index: 2, image: 'avatar1.jpg', seller: 'Seller2', net_amount: '$200', description: 'Description', date: '2017-09-07'},
	{ index: 3, image: 'avatar1.jpg', seller: 'Seller3', net_amount: '$300', description: 'Description', date: '2017-09-07'},
	{ index: 4, image: 'avatar1.jpg', seller: 'Seller4', net_amount: '$400', description: 'Description', date: '2017-09-07'},
	{ index: 5, image: 'avatar1.jpg', seller: 'Seller5', net_amount: '$500', description: 'Description', date: '2017-09-07'},
	{ index: 6, image: 'avatar1.jpg', seller: 'Seller6', net_amount: '$600', description: 'Description', date: '2017-09-07'},
	{ index: 7, image: 'avatar1.jpg', seller: 'Seller7', net_amount: '$700', description: 'Description', date: '2017-09-07'},
	{ index: 8, image: 'avatar1.jpg', seller: 'Seller8', net_amount: '$800', description: 'Description', date: '2017-09-07'},
	{ index: 9, image: 'avatar1.jpg', seller: 'Seller9', net_amount: '$900', description: 'Description', date: '2017-09-07'},
]

@Component({
	selector: 'admin-transactions-list',
	templateUrl: './transactions-list.component.html',
	styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

	displayedColumns = ['index', 'image', 'seller', 'net_amount', 'description', 'date'];
	tableData = new TableData();
	dataSource: TransactionsDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	@ViewChild('sellerFilter') 			sellerFilter			: 	ElementRef;
	@ViewChild('netAmountFilter') 		netAmountFilter			: 	ElementRef;
	@ViewChild('descriptionFilter')		descriptionFilter		: 	ElementRef;
	@ViewChild('dateFilter')			dateFilter				: 	ElementRef;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(transactionsList);
		this.dataSource = new TransactionsDataSource(this.tableData, this.paginator, this.sort);

		Observable.fromEvent(this.sellerFilter.nativeElement, 'keyup')
			.debounceTime(150)
			.distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) return;
				this.dataSource.sellerFilter = this.sellerFilter.nativeElement.value;
			});
	}
}

export class TransactionsDataSource extends DataSource<any> {

	displayDataChanges: any;
	_sellerFilterChange 		= new BehaviorSubject('');
	_netAmountFilterChange 		= new BehaviorSubject('');
	_descriptionFilterChange	= new BehaviorSubject('');
	_dateFilterChange 			= new BehaviorSubject('');

	get sellerFilter(): string { return this._sellerFilterChange.value; }
	set sellerFilter(filter: string) { this._sellerFilterChange.next(filter); }

	get netAmountFilter(): string { return this._netAmountFilterChange.value; }
	set netAmountFilter(filter: string) { this._netAmountFilterChange.next(filter); }

	get descriptionFilter(): string { return this._descriptionFilterChange.value; }
	set descriptionFilter(filter: string) { this._descriptionFilterChange.next(filter); }

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

				let searchStr = (item.seller + ' ' + item.net_amount + ' ' + item.description + ' ' + item.date).toLowerCase();
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
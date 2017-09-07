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
	{ return_id: 1, order_id: 1, customer: 'Customer1', product: 'Product1', model: 'Model1', status: 'Enabled', date_added: '2017-09-07', date_modified: '2017-09-07'},
	{ return_id: 2, order_id: 2, customer: 'Customer2', product: 'Product2', model: 'Model2', status: 'Enabled', date_added: '2017-09-07', date_modified: '2017-09-07'},
	{ return_id: 3, order_id: 3, customer: 'Customer3', product: 'Product3', model: 'Model3', status: 'Enabled', date_added: '2017-09-07', date_modified: '2017-09-07'},
	{ return_id: 4, order_id: 4, customer: 'Customer4', product: 'Product4', model: 'Model4', status: 'Enabled', date_added: '2017-09-07', date_modified: '2017-09-07'},
	{ return_id: 5, order_id: 5, customer: 'Customer5', product: 'Product5', model: 'Model5', status: 'Enabled', date_added: '2017-09-07', date_modified: '2017-09-07'}
]

@Component({
	selector: 'admin-returns-list',
	templateUrl: './returns-list.component.html',
	styleUrls: [ './returns-list.component.scss' ]
})
export class ReturnsListComponent implements OnInit {

	displayedColumns = ['return_id', 'order_id', 'customer', 'product', 'model', 'status', 'date_added', 'date_modified', 'action'];
	tableData = new TableData();
	dataSource: ReturnsDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	@ViewChild('returnIDFilter') 			returnIDFilter			: 	ElementRef;
	@ViewChild('orderIDFilter') 			orderIdFilter			: 	ElementRef;
	@ViewChild('customerFilter')			customerFilter			: 	ElementRef;
	@ViewChild('productFilter')				productFilter			: 	ElementRef;
	@ViewChild('modelFilter')				modelFilter				: 	ElementRef;
	@ViewChild('statusFilter')				statusFilter			: 	ElementRef;
	@ViewChild('dateAddedFilter')			dateAddedFilter		: 	ElementRef;
	@ViewChild('dateModifiedFilter')		dateModifiedFilter		: 	ElementRef;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(returnsList);
		this.dataSource = new ReturnsDataSource(this.tableData, this.paginator, this.sort);

		Observable.fromEvent(this.returnIDFilter.nativeElement, 'keyup')
			.debounceTime(150)
			.distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) return;
				this.dataSource.returnIDFilter = this.returnIDFilter.nativeElement.value;
			});
	}
}

export class ReturnsDataSource extends DataSource<any> {

	displayDataChanges: any;
	_returnIDFilterChange 			= new BehaviorSubject('');
	_orderIDFilterChange 			= new BehaviorSubject('');
	_customerFilterChange			= new BehaviorSubject('');
	_productFilterChange 			= new BehaviorSubject('');
	_modelFilterChange 			= new BehaviorSubject('');
	_statusFilterChange				= new BehaviorSubject('');
	_dateAddedFilterChange 			= new BehaviorSubject('');
	_dateModifiedFilterChange 		= new BehaviorSubject('');

	get returnIDFilter(): string { return this._returnIDFilterChange.value; }
	set returnIDFilter(filter: string) { this._returnIDFilterChange.next(filter); }

	get orderIDFilter(): string { return this._orderIDFilterChange.value; }
	set orderIDFilter(filter: string) { this._orderIDFilterChange.next(filter); }

	get customerFilter(): string { return this._customerFilterChange.value; }
	set customerFilter(filter: string) { this._customerFilterChange.next(filter); }

	get productFilter(): string { return this._productFilterChange.value; }
	set productFilter(filter: string) { this._productFilterChange.next(filter); }

	get modelFilter(): string { return this._modelFilterChange.value; }
	set modelFilter(filter: string) { this._modelFilterChange.next(filter); }

	get statusFilter(): string { return this._statusFilterChange.value; }
	set statusFilter(filter: string) { this._statusFilterChange.next(filter); }

	get dateAddedFilter(): string { return this._dateAddedFilterChange.value; }
	set dateAddedFilter(filter: string) { this._dateAddedFilterChange.next(filter); }

	get dateModifiedFilter(): string { return this._dateModifiedFilterChange.value; }
	set dateModifiedFilter(filter: string) { this._dateModifiedFilterChange.next(filter); }

	constructor(private _tableData: TableData, private  _paginator: MdPaginator, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_paginator.page,
			_sort.mdSortChange,
			this._returnIDFilterChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			const startIndex = this._paginator.pageIndex  * this._paginator.pageSize;
			return this.getSortedData().slice().filter((item) => {

				let searchStr = (item.return_id + ' ' + item.customer + ' ' + item.model + ' ' + item.date_added + ' ' + item.order_id + ' ' + item.product + ' ' + item.return_Status + ' ' +  item.date_modified).toLowerCase();
				return searchStr.indexOf(this.returnIDFilter.toLowerCase()) != -1;
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
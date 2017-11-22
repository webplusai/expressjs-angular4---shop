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

const newsLetterList = [
	{ id: 17, email: 'john@email.com', type: 'Customer', customer_first_name: 'John', customer_last_name: 'Doe', status: 'Subscribed', website: 'Main Website', store: 'Main Website Store', store_view: 'Default Store View' },
	{ id: 17, email: 'john@email.com', type: 'Customer', customer_first_name: 'John', customer_last_name: 'Doe', status: 'Subscribed', website: 'Main Website', store: 'Main Website Store', store_view: 'Default Store View' },
	{ id: 17, email: 'john@email.com', type: 'Customer', customer_first_name: 'John', customer_last_name: 'Doe', status: 'Subscribed', website: 'Main Website', store: 'Main Website Store', store_view: 'Default Store View' },
	{ id: 17, email: 'john@email.com', type: 'Customer', customer_first_name: 'John', customer_last_name: 'Doe', status: 'Subscribed', website: 'Main Website', store: 'Main Website Store', store_view: 'Default Store View' },
	{ id: 17, email: 'john@email.com', type: 'Customer', customer_first_name: 'John', customer_last_name: 'Doe', status: 'Subscribed', website: 'Main Website', store: 'Main Website Store', store_view: 'Default Store View' }
];

@Component({
	selector: 'admin-newsletter',
	templateUrl: './newsletter.component.html',
	styleUrls: ['./newsletter.component.scss']
})
export class NewsLetterComponent implements OnInit {

	displayedColumns = ['id', 'email', 'type', 'customer_first_name', 'customer_last_name', 'status', 'website', 'store', 'store_view'];
	tableData = new TableData();
	dataSource: NewsLetterDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;
	
	@ViewChild('idFilter') 					idFilter					: 	ElementRef;
	@ViewChild('emailFilter') 				emailFilter					: 	ElementRef;
	@ViewChild('typeFilter') 				typeFilter					: 	ElementRef;
	@ViewChild('customerFirstNameFilter') 	customerFirstNameFilter		: 	ElementRef;
	@ViewChild('customerLastNameFilter') 	customerLastNameFilter		: 	ElementRef;
	@ViewChild('statusFilter') 				statusFilter				: 	ElementRef;
	@ViewChild('websiteFilter') 			websiteFilter				: 	ElementRef;
	@ViewChild('storeFilter') 				storeFilter					: 	ElementRef;
	@ViewChild('storeViewFilter') 			storeViewFilter				: 	ElementRef;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(newsLetterList);
		this.dataSource = new NewsLetterDataSource(this.tableData, this.paginator, this.sort);

		Observable.fromEvent(this.idFilter.nativeElement, 'keyup')
			.debounceTime(150)
			.distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) return;
				this.dataSource.idFilter = this.idFilter.nativeElement.value;
			});
	}
}

export class NewsLetterDataSource extends DataSource<any> {

	displayDataChanges: any;

	_idFilterChange 					= new BehaviorSubject('');
	_emailFilterChange 					= new BehaviorSubject('');
	_typeFilterChange 					= new BehaviorSubject('');
	_customerFirstNameFilterChange 		= new BehaviorSubject('');
	_customerLastNameFilterChange 		= new BehaviorSubject('');
	_statusFilterChange 				= new BehaviorSubject('');
	_websiteFilterChange 				= new BehaviorSubject('');
	_storeFilterChange 					= new BehaviorSubject('');
	_storeViewFilterChange 				= new BehaviorSubject('');

	get idFilter(): string { return this._idFilterChange.value; }
	set idFilter(filter: string) { this._idFilterChange.next(filter); }

	get emailFilter(): string { return this._emailFilterChange.value; }
	set emailFilter(filter: string) { this._emailFilterChange.next(filter); }

	get typeFilter(): string { return this._typeFilterChange.value; }
	set typeFilter(filter: string) { this._typeFilterChange.next(filter); }

	get customerFirstNameFilter(): string { return this._customerFirstNameFilterChange.value; }
	set customerFirstNameFilter(filter: string) { this._customerFirstNameFilterChange.next(filter); }

	get customerLastNameFilter(): string { return this._customerLastNameFilterChange.value; }
	set customerLastNameFilter(filter: string) { this._customerLastNameFilterChange.next(filter); }

	get statusFilter(): string { return this._statusFilterChange.value; }
	set statusFilter(filter: string) { this._statusFilterChange.next(filter); }

	get websiteFilter(): string { return this._websiteFilterChange.value; }
	set websiteFilter(filter: string) { this._websiteFilterChange.next(filter); }

	get storeFilter(): string { return this._storeFilterChange.value; }
	set storeFilter(filter: string) { this._storeFilterChange.next(filter); }

	get storeViewFilter(): string { return this._storeViewFilterChange.value; }
	set storeViewFilter(filter: string) { this._storeViewFilterChange.next(filter); }

	constructor(private _tableData: TableData, private  _paginator: MdPaginator, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_paginator.page,
			_sort.mdSortChange,
			this._idFilterChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			const startIndex = this._paginator.pageIndex  * this._paginator.pageSize;
			return this.getSortedData().slice().filter((item) => {
				let searchStr = (item.id + ' ' + item.email + ' ' + item.type + ' ' + item.customer_first_name + ' ' + item.customer_last_name + ' ' + item.status + ' ' + item.website + ' ' + item.store + ' ' + item.store_view).toLowerCase();
				return searchStr.indexOf(this.idFilter.toLowerCase()) != -1;
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
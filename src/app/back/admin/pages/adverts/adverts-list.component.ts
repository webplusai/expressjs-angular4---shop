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

const advertsList = [
	{ 
		month: 'Dec 2017', 
		data: [ 
				{ date: 'Dec 23', description: 'Payment Issue', earning_credits: '$10,102,56', payments_debits: '($1,3089,45)', monthly_balance: ''},
			 	{ date: 'Dec 23', description: 'Payment Issue', earning_credits: '$10,102,56', payments_debits: '($1,3089,45)', monthly_balance: ''},
				{ date: 'Balance at End of Dec', description: 'Payment Issue', earning_credits: '$10,102,56', payments_debits: '', monthly_balance: '($1,3089,45)'}
			]
	},
	{ 
		month: 'Dec 2017', 
		data: [ 
				{ date: 'Dec 23', description: 'Payment Issue', earning_credits: '$10,102,56', payments_debits: '($1,3089,45)', monthly_balance: ''},
			 	{ date: 'Dec 23', description: 'Payment Issue', earning_credits: '$10,102,56', payments_debits: '($1,3089,45)', monthly_balance: ''},
				{ date: 'Balance at End of Dec', description: 'Payment Issue', earning_credits: '$10,102,56', payments_debits: '', monthly_balance: '($1,3089,45)'}
			]
	},
	{ 
		month: 'Dec 2017', 
		data: [ 
				{ date: 'Dec 23', description: 'Payment Issue', earning_credits: '$10,102,56', payments_debits: '($1,3089,45)', monthly_balance: ''},
			 	{ date: 'Dec 23', description: 'Payment Issue', earning_credits: '$10,102,56', payments_debits: '($1,3089,45)', monthly_balance: ''},
				{ date: 'Balance at End of Dec', description: 'Payment Issue', earning_credits: '$10,102,56', payments_debits: '', monthly_balance: '($1,3089,45)'}
			]
	}
];

@Component({
	selector: 'admin-adverts-list',
	templateUrl: './adverts-list.component.html',
	styleUrls: ['./adverts-list.component.scss']
})
export class AdvertsListComponent implements OnInit {

	
	displayedColumns = ['month', 'date', 'description', 'earning_credits', 'payments_debits', 'monthly_balance'];
	tableData = new TableData();
	dataSource: AdvertsDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(advertsList);
		this.dataSource = new AdvertsDataSource(this.tableData, this.paginator, this.sort);
	}
}

export class AdvertsDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData, private  _paginator: MdPaginator, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_paginator.page,
			_sort.mdSortChange,
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
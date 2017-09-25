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

const downloadsList = [
	{ download_name: 'Download 1', date_added: '2017-09-25' },
	{ download_name: 'Download 2', date_added: '2017-09-25' },
	{ download_name: 'Download 3', date_added: '2017-09-25' },
	{ download_name: 'Download 4', date_added: '2017-09-25' },
	{ download_name: 'Download 5', date_added: '2017-09-25' }
]

@Component({
	selector: 'buyer-downloads',
	templateUrl: './downloads.component.html',
	styleUrls: [ './downloads.component.scss' ]
})
export class DownloadsComponent implements OnInit {

	displayedColumns = ['download_name', 'date_added', 'action'];

	tableData = new TableData();
	dataSource: DownloadsDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(downloadsList);
		this.dataSource = new DownloadsDataSource(this.tableData, this.paginator, this.sort);
	}
}

export class DownloadsDataSource extends DataSource<any> {

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
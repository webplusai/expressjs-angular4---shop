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

const productList = [
	{
		index: 1, title: 'McDonald\'s offers', description: 'Description', author: 'Jhon', category: 'Food', date_posted: '4/26/2017'
	},
	{
		index: 2, title: 'McDonald\'s offers', description: 'Description', author: 'Jhon', category: 'Food', date_posted: '4/26/2017'
	},
	{
		index: 3, title: 'McDonald\'s offers', description: 'Description', author: 'Jhon', category: 'Food', date_posted: '4/26/2017'
	},
	{
		index: 4, title: 'McDonald\'s offers', description: 'Description', author: 'Jhon', category: 'Food', date_posted: '4/26/2017'
	},
	{
		index: 5, title: 'McDonald\'s offers', description: 'Description', author: 'Jhon', category: 'Food', date_posted: '4/26/2017'
	},
	{
		index: 6, title: 'McDonald\'s offers', description: 'Description', author: 'Jhon', category: 'Food', date_posted: '4/26/2017'
	}
];

@Component({
	selector: 'admin-news-list',
	templateUrl: './news-list.component.html',
	styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

	displayedColumns = ['index', 'title', 'description', 'author', 'category', 'date_posted', 'action'];
	tableData = new TableData();
	dataSource: ProductDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(productList);
		this.dataSource = new ProductDataSource(this.tableData, this.paginator, this.sort);
	}
}

export class ProductDataSource extends DataSource<any> {

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
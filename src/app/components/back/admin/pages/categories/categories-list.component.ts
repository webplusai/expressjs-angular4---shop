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

const categoryList = [
	{ category_name: 'Cameras', 							sort_order: 6 },
	{ category_name: 'Components', 							sort_order: 3 },
	{ category_name: 'Components > Mice and Trackballs', 	sort_order: 1 },
	{ category_name: 'Components > Monitors', 				sort_order: 1 },
	{ category_name: 'Components > Monitors > test1', 		sort_order: 0 },
	{ category_name: 'Components > Monitors > test2', 		sort_order: 0 },
	{ category_name: 'Components > Printers', 				sort_order: 1 },
	{ category_name: 'Components > Scanners', 				sort_order: 1 },
	{ category_name: 'Components > Web Cameras', 			sort_order: 1 },
	{ category_name: 'Desktops', 							sort_order: 1 },
	{ category_name: 'Desktops > Mac', 						sort_order: 2 },
	{ category_name: 'Desktops > PC', 						sort_order: 1 },
	{ category_name: 'Laptops & Notebooks', 				sort_order: 2 },
	{ category_name: 'Laptops & Notebooks > Macs', 			sort_order: 0 },
	{ category_name: 'Laptops & Notebooks > Windows', 		sort_order: 0 },
	{ category_name: 'MP3 Players', 						sort_order: 7 },
	{ category_name: 'MP3 Players > test11', 				sort_order: 0 },
	{ category_name: 'MP3 Players > test12', 				sort_order: 0 },
	{ category_name: 'MP3 Players > test15', 				sort_order: 0 },
	{ category_name: 'MP3 Players > test16', 				sort_order: 0 },
];

@Component({
	selector: 'admin-categories-list',
	templateUrl: './categories-list.component.html',
	styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

	displayedColumns = ['category_name', 'sort_order', 'action'];
	tableData = new TableData();
	dataSource: UserDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(categoryList);
		this.dataSource = new UserDataSource(this.tableData, this.paginator, this.sort);
	}
}

export class UserDataSource extends DataSource<any> {

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
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

const customerGroupList = [
	{ customer_group_name: 'Group1', sort_order: 1 },
	{ customer_group_name: 'Group2', sort_order: 2 },
	{ customer_group_name: 'Group3', sort_order: 3 },
	{ customer_group_name: 'Group4', sort_order: 4 },
	{ customer_group_name: 'Group5', sort_order: 5 },
];

@Component({
	selector: 'admin-customer-groups-list',
	templateUrl: './customer-groups-list.component.html',
	styleUrls: ['./customer-groups-list.component.scss']
})
export class CustomerGroupsListComponent implements OnInit {

	displayedColumns = ['customer_group_name', 'sort_order', 'action'];
	tableData = new TableData();
	dataSource: CustomerGroupDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(customerGroupList);
		this.dataSource = new CustomerGroupDataSource(this.tableData, this.paginator, this.sort);
	}
}

export class CustomerGroupDataSource extends DataSource<any> {

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
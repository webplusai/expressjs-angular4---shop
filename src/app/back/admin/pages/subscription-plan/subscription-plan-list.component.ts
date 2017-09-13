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

const groupList = [
	{ group_image: 'assets/img/gold.png', membership_group: 'Gold',  membership_type: 'One time Membership', no_of_products: '99', price: 199 },
	{ group_image: 'assets/img/silver.png', membership_group: 'Silver',  membership_type: 'One time Membership', no_of_products: '50', price: 99 },
	{ group_image: 'assets/img/bronze.png', membership_group: 'Bronze',  membership_type: 'One time Membership', no_of_products: '30', price: 15 }
];

@Component({
	selector: 'admin-subscription-plan-list',
	templateUrl: './subscription-plan-list.component.html',
	styleUrls: [ './subscription-plan-list.component.scss' ]
})
export class SubscriptionPlanListComponent implements OnInit {

	displayedColumns = ['group_image', 'membership_group', 'membership_type', 'no_of_products', 'price', 'action'];
	tableData = new TableData();
	dataSource: SubscriptionPlanDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(groupList);
		this.dataSource = new SubscriptionPlanDataSource(this.tableData, this.paginator, this.sort);
	}
}

export class SubscriptionPlanDataSource extends DataSource<any> {

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
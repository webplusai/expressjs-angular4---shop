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

const orderStatusesList = [
	{ order_status_name: 'Cancelled' }
];

@Component({
	selector: 'admin-order-statuses-list',
	templateUrl: './order-statuses-list.component.html',
	styleUrls: [ './order-statuses-list.component.scss' ]
})
export class OrderStatusesListComponent implements OnInit {

	displayedColumns = ['order_status_name', 'action'];

	tableData = new TableData();
	dataSource: OrderStatusesDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(orderStatusesList);
		this.dataSource = new OrderStatusesDataSource(this.tableData);
	}
}

export class OrderStatusesDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
		]
	}

	connect(): Observable<any> {
		return Observable.merge(...this.displayDataChanges).map(() => {
			return this._tableData.data;
		});
	}

	disconnect() {

	}
}
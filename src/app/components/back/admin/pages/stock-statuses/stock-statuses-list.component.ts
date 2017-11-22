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

const stockStatusesList = [
	{ stock_status_name: '2-3 Days' }
];

@Component({
	selector: 'admin-stock-statuses-list',
	templateUrl: './stock-statuses-list.component.html',
	styleUrls: [ './stock-statuses-list.component.scss' ]
})
export class StockStatusesListComponent implements OnInit {

	displayedColumns = ['stock_status_name', 'action'];

	tableData = new TableData();
	dataSource: StockStatusesDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(stockStatusesList);
		this.dataSource = new StockStatusesDataSource(this.tableData);
	}
}

export class StockStatusesDataSource extends DataSource<any> {

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
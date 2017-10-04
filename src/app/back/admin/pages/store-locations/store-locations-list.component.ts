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

const storeLocationsList = [
	{ store_name: 'Store', address: 'Address' }
];

@Component({
	selector: 'admin-store-locations-list',
	templateUrl: './store-locations-list.component.html',
	styleUrls: [ './store-locations-list.component.scss' ]
})
export class StoreLocationsListComponent implements OnInit {

	displayedColumns = ['store_name', 'address', 'action'];

	tableData = new TableData();
	dataSource: StoreLocationsDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(storeLocationsList);
		this.dataSource = new StoreLocationsDataSource(this.tableData);
	}
}

export class StoreLocationsDataSource extends DataSource<any> {

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
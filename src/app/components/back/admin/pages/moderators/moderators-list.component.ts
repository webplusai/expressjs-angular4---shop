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

const usersList = [
	{ username: 'Admin', status: 'Enabled', date_added: '2017-09-09' },
	{ username: 'User', status: 'Enabled', date_added: '2017-09-09' },
];

@Component({
	selector: 'admin-moderators-list',
	templateUrl: './moderators-list.component.html',
	styleUrls: [ './moderators-list.component.scss' ]
})
export class ModeratorsListComponent implements OnInit {

	displayedColumns = ['username', 'status', 'date_added', 'action'];

	tableData = new TableData();
	dataSource: UsersDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(usersList);
		this.dataSource = new UsersDataSource(this.tableData);
	}
}

export class UsersDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
		]
	}

	connect(): Observable<any> {
		return Observable.of(usersList);
	}

	disconnect() {

	}
}
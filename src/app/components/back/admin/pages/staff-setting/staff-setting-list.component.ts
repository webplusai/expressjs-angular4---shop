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

const userGroupList = [
	{ user_group_name: 'Administrator' },
	{ user_group_name: 'Demonstration' }
];

@Component({
	selector: 'admin-staff-setting-list',
	templateUrl: './staff-setting-list.component.html',
	styleUrls: [ './staff-setting-list.component.scss' ]
})
export class StaffSettingListComponent implements OnInit {

	displayedColumns = ['user_group_name', 'action'];

	tableData = new TableData();
	dataSource: UserGroupDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(userGroupList);
		this.dataSource = new UserGroupDataSource(this.tableData);
	}
}

export class UserGroupDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
		]
	}

	connect(): Observable<any> {
		return Observable.of(userGroupList);
	}

	disconnect() {

	}
}
import { Component, OnInit, ElementRef, ViewChild }						from '@angular/core';
import { DataSource } 													from '@angular/cdk/table';
import { MdPaginator } 													from '@angular/material';
import { MdSort } 														from '@angular/material';
import { BehaviorSubject } 												from 'rxjs/BehaviorSubject';
import { Observable } 													from 'rxjs/Observable';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { TableData } 													from '../../../../helper/table-data/table-data';
import { CRUDService } 													from '../../../../../services/crud.service';

const settingList = [
	{ store_name: 'The OpenCart demo store(Default)', store_url: 'http://usama.com' }
];

@Component({
	selector: 'admin-setting-list',
	templateUrl: './setting-list.component.html',
	styleUrls: [ './setting-list.component.scss' ]
})
export class SettingListComponent implements OnInit {

	displayedColumns = ['name', 'url', 'action'];

	tableData = new TableData();
	dataSource: SettingDataSource | null;

	constructor(private crudService: CRUDService) { }

	ngOnInit() {
		this.crudService.retrieve( 'Store' ).subscribe( result => {
			if (result.status == 'ok') {
				this.tableData.setData(result.content);
				this.dataSource = new SettingDataSource(this.tableData);
			}
		});
	}
}

export class SettingDataSource extends DataSource<any> {

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
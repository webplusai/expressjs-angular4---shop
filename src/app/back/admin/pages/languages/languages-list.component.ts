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

const languagesList = [
	{ language_name: 'English(Default)', code: 'en', sort_order: 1 }
];

@Component({
	selector: 'admin-languages-list',
	templateUrl: './languages-list.component.html',
	styleUrls: [ './languages-list.component.scss' ]
})
export class LanguagesListComponent implements OnInit {

	displayedColumns = ['language_name', 'code', 'sort_order', 'action'];

	tableData = new TableData();
	dataSource: LanguagesDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(languagesList);
		this.dataSource = new LanguagesDataSource(this.tableData);
	}
}

export class LanguagesDataSource extends DataSource<any> {

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
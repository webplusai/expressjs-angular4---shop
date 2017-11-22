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

import { TableData } from '../../../../../helper/table-data/table-data';

const languageList = [
	{ module_name: 'Easy Language Editor' },
	{ module_name: 'Account' },
	{ module_name: 'Affiliate' },
	{ module_name: 'Banner' },
	{ module_name: 'Bestsellers' },
	{ module_name: 'Carousel' }
];

@Component({
	selector: 'admin-english-list',
	templateUrl: './english-list.component.html',
	styleUrls: [ './english-list.component.scss' ]
})
export class EnglishListComponent implements OnInit {

	displayedColumns = ['module_name', 'action'];

	tableData = new TableData();
	dataSource: LanguageDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(languageList);
		this.dataSource = new LanguageDataSource(this.tableData);
	}
}

export class LanguageDataSource extends DataSource<any> {

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
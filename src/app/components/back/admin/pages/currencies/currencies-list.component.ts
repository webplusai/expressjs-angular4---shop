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

const currenciesList = [
	{ currency_title: 'Euro', code: 'EUR', value: 0.91009998, last_updated: '17/10/2016' }
];

@Component({
	selector: 'admin-currencies-list',
	templateUrl: './currencies-list.component.html',
	styleUrls: [ './currencies-list.component.scss' ]
})
export class CurrenciesListComponent implements OnInit {

	displayedColumns = ['currency_title', 'code', 'value', 'last_updated'];

	tableData = new TableData();
	dataSource: CurrenciesDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(currenciesList);
		this.dataSource = new CurrenciesDataSource(this.tableData);
	}
}

export class CurrenciesDataSource extends DataSource<any> {

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
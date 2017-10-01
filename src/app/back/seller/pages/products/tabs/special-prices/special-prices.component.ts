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

import { TableData } from '../../../../../../helper/table-data/table-data';

@Component({
	selector: 'seller-product-tab-special-prices',
	templateUrl: './special-prices.component.html',
	styleUrls: ['./special-prices.component.scss']
})
export class SpecialPricesComponent implements OnInit {

	specialPriceList = [];
	list = [];

	displayedColumns = ['priority', 'price', 'start_date', 'end_date', 'action'];
	tableData = new TableData();
	dataSource: SpecialPriceDataSource | null;

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.tableData.setData(this.specialPriceList);
		this.dataSource = new SpecialPriceDataSource(this.tableData);
	}

	addRow() {
		this.specialPriceList.push( {priority: '', price: '', start_date: new Date(), end_date: new Date()} );
		this.redrawTable();
	}

	removeRow(index) {
		this.specialPriceList.splice(index, 1);
		this.redrawTable();
	}
}

export class SpecialPriceDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange
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
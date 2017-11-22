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
	selector: 'seller-product-tab-quantity-discounts',
	templateUrl: './quantity-discounts.component.html',
	styleUrls: ['./quantity-discounts.component.scss']
})
export class QuantityDiscountsComponent implements OnInit {

	quantityDiscountList = [];
	list = [];

	displayedColumns = ['priority', 'quantity', 'price', 'start_date', 'end_date', 'action'];
	tableData = new TableData();
	dataSource: QuantityDiscountDataSource | null;

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.tableData.setData(this.quantityDiscountList);
		this.dataSource = new QuantityDiscountDataSource(this.tableData);
	}

	addRow() {
		this.quantityDiscountList.push( {priority: '', quantity: '', price: '', start_date: new Date(), end_date: new Date()} );
		this.redrawTable();
	}

	removeRow(index) {
		this.quantityDiscountList.splice(index, 1);
		this.redrawTable();
	}
}

export class QuantityDiscountDataSource extends DataSource<any> {

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
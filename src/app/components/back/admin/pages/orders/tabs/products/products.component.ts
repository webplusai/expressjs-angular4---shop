import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

const ordersList = [ { product: '', model: '', quantity: 'No results!', unit_price: '', total: '' } ];

@Component({
	selector: 'admin-orders-tab-products',
	templateUrl: './products.component.html',
	styleUrls: [ './products.component.scss' ]
})
export class ProductsComponent implements OnInit {

	displayedColumns = ['product', 'model', 'quantity', 'unit_price', 'total', 'action'];
	tableData = new TableData();
	dataSource: OrdersDataSource | null;

	receipientName = new FormControl('', [
		Validators.required
	]);

	receipientEmail = new FormControl('', [
		Validators.required
	]);

	senderName = new FormControl('', [
		Validators.required
	]);

	senderEmail = new FormControl('', [
		Validators.required
	]);

	certificateTheme = new FormControl('', [
		Validators.required
	]);

	amount = new FormControl('', [
		Validators.required
	]);

	constructor() { }

	ngOnInit() {
		this.tableData.setData(ordersList);
		this.dataSource = new OrdersDataSource(this.tableData);
	}
}

export class OrdersDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
		]
	}

	connect(): Observable<any> {
		return Observable.of(ordersList);
	}

	disconnect() {

	}
}
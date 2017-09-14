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

const paymentsList = [
	{ payment_method: 'Amazon Payments', 		logo_url: 'assets/img/amazon.png', 			status: 'Disabled', sort_order: 0 },
	{ payment_method: 'Authroize.net(AIM)', 	logo_url: 'assets/img/authorizenet.png', 	status: 'Disabled', sort_order: 0 },
	{ payment_method: 'BluePay Hosted From', 	logo_url: 'assets/img/bluepay.jpg', 		status: 'Disabled', sort_order: 0 },
	{ payment_method: 'First Data', 			logo_url: 'assets/img/firstdata.png', 		status: 'Disabled', sort_order: 0 },
	{ payment_method: 'Klarna Account', 		logo_url: 'assets/img/klarna.png', 			status: 'Disabled', sort_order: 0 },
	{ payment_method: 'LIQPAY', 				logo_url: 'assets/img/liqpay.png', 			status: 'Disabled', sort_order: 0 },
	{ payment_method: 'Moneybookers', 			logo_url: 'assets/img/moneybookers.png', 	status: 'Disabled', sort_order: 0 },
	{ payment_method: 'NOCHEX', 				logo_url: 'assets/img/nochex.png',			status: 'Disabled', sort_order: 0 },
	{ payment_method: 'Paypal Pro', 			logo_url: 'assets/img/paypal.png', 			status: 'Disabled', sort_order: 0 },
	{ payment_method: 'Realex Remote', 			logo_url: 'assets/img/realex.png', 			status: 'Disabled', sort_order: 0 },
	{ payment_method: 'SagePay Direct', 		logo_url: 'assets/img/sagepay.png', 		status: 'Disabled', sort_order: 0 },
	{ payment_method: 'Secure Trading', 		logo_url: 'assets/img/secure_trading.png', 	status: 'Disabled', sort_order: 0 },
	{ payment_method: '2Checkout', 				logo_url: 'assets/img/2checkout.png', 		status: 'Disabled', sort_order: 0 },
	{ payment_method: 'Web Payment Software', 	logo_url: 'assets/img/wps-logo.jpg', 		status: 'Disabled', sort_order: 0 },
	{ payment_method: 'World Pay', 				logo_url: 'assets/img/worldpay.png', 		status: 'Disabled', sort_order: 0 }
];

@Component({
	selector: 'admin-payments-list',
	templateUrl: './payments-list.component.html',
	styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {

	displayedColumns = ['payment_method', 'logo', 'status', 'sort_order', 'action'];
	tableData = new TableData();
	dataSource: PaymentsDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(paymentsList);
		this.dataSource = new PaymentsDataSource(this.tableData, this.paginator, this.sort);
	}
}

export class PaymentsDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData, private  _paginator: MdPaginator, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_paginator.page,
			_sort.mdSortChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			const startIndex = this._paginator.pageIndex  * this._paginator.pageSize;
			return this.getSortedData().splice(startIndex, this._paginator.pageSize);
		});
	}

	getSortedData(): any {
		const data = this._tableData.data.slice();
		if (!this._sort.active || this._sort.direction == '') { return data; }

		return data.sort((a, b) => {
			let propertyA: number|string = '';
			let propertyB: number|string = '';

			[propertyA, propertyB] = [a[this._sort.active], b[this._sort.active]];

			let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
			let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

			return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
		});
	}

	disconnect() {

	}
}
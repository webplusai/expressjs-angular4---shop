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

const ordersList = [];
const commentsList = [];

@Component({
	selector: 'seller-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

	navigationList = [
		{ icon: 'icon-seller-profile.png', link: 'profile', text: 'Modify your seller profile' },
		{ icon: 'icon-new-product.png', link: 'products/create', text: 'Create a new product' },
		{ icon: 'icon-manage-products.png', link: 'products', text: 'Manage your products' },
		{ icon: 'icon-shipping-settings.png', link: 'shipping-settings', text: 'Shipping settings' },
		{ icon: 'icon-view-orders.png', link: 'orders', text: 'View your orders' },
		{ icon: 'icon-financial-records.png', link: 'financial-records', text: 'View your financial records' },
		{ icon: 'icon-messages.png', link: 'messages', text: 'Message' }
	]

	displayedColumnsOrder = ['order_id', 'customer',  'products', 'shipping', 'date_created', 'total_amount'];
	displayedColumnsComment = ['name', 'product', 'comment', 'date'];

	tableDataOrder = new TableData();
	tableDataComment = new TableData();
	dataSourceOrder: OrdersDataSource | null;
	dataSourceComment: CommentsDataSource | null;

	@ViewChild(MdSort) sortOrder: MdSort;
	@ViewChild(MdSort) sortComment: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableDataOrder.setData(ordersList);
		this.tableDataComment.setData(commentsList);
		this.dataSourceOrder = new OrdersDataSource(this.tableDataOrder, this.sortOrder);
		this.dataSourceComment = new CommentsDataSource(this.tableDataComment, this.sortComment);
	}
}

export class OrdersDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_sort.mdSortChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			return this.getSortedData();
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

export class CommentsDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_sort.mdSortChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			return this.getSortedData();
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
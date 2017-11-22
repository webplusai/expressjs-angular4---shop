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

const wishList = [
	{ image: 'assets/img/product1.png', product_name: 'iMac', model: 'Product 14', stock: 'Out of Stock', unit_price: '$100.00' },
	{ image: 'assets/img/product1.png', product_name: 'iMac', model: 'Product 14', stock: 'Out of Stock', unit_price: '$100.00' },
	{ image: 'assets/img/product1.png', product_name: 'iMac', model: 'Product 14', stock: 'Out of Stock', unit_price: '$100.00' },
	{ image: 'assets/img/product1.png', product_name: 'iMac', model: 'Product 14', stock: 'Out of Stock', unit_price: '$100.00' },
	{ image: 'assets/img/product1.png', product_name: 'iMac', model: 'Product 14', stock: 'Out of Stock', unit_price: '$100.00' }
];

@Component({
	selector: 'buyer-wish-list',
	templateUrl: './wish-list.component.html',
	styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

	displayedColumns = ['image', 'product_name', 'model', 'stock', 'unit_price', 'action'];
	tableData = new TableData();
	dataSource: WishListDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(wishList);
		this.dataSource = new WishListDataSource(this.tableData);
	}
}

export class WishListDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange
		];
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			return this._tableData.data;
		});
	}

	disconnect() {

	}
}
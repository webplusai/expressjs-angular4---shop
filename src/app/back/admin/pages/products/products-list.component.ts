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

const productList = [
	{
		image: 'http://www.sharejesusgeneva.com/image/cache/catalog/demo/apple_cinema_30-40x40.jpg',
		product_name: 'Apple Cinema 30"', model: 'Product 15', price: '100.0000', discount_price: '90.0000', quantity: 990, status: 'Enabled'
	},
	{
		image: 'http://www.sharejesusgeneva.com/image/cache/catalog/demo/canon_eos_5d_1-40x40.jpg',
		product_name: 'Canon EOS 5D', model: 'Product 3', price: '100.0000', discount_price: '80.0000', quantity: 7, status: 'Enabled'
	},
	{
		image: 'http://www.sharejesusgeneva.com/image/cache/catalog/demo/hp_1-40x40.jpg',
		product_name: 'HP LP3065', model: 'Product 21', price: '100.0000', quantity: 1000, status: 'Enabled'
	},
	{
		image: 'http://www.sharejesusgeneva.com/image/cache/catalog/demo/htc_touch_hd_1-40x40.jpg',
		product_name: 'HTC Touch HD', model: 'Product 1', price: '100.0000', quantity: 939, status: 'Enabled'
	},
	{
		image: 'http://www.sharejesusgeneva.com/image/cache/catalog/demo/imac_1-40x40.jpg',
		product_name: 'iMac', model: 'Product 14', price: '100.0000', quantity: 977, status: 'Enabled'
	}
];

@Component({
	selector: 'admin-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

	displayedColumns = ['image', 'product_name', 'model', 'price', 'quantity', 'status', 'action'];
	tableData = new TableData();
	dataSource: ProductDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	@ViewChild('productNameFilter') 	productNameFilter	: 	ElementRef;
	@ViewChild('priceFilter') 			priceFilter			: 	ElementRef;
	@ViewChild('statusFilter') 			statusFilter		: 	ElementRef;
	@ViewChild('modelFilter') 			modelFilter			: 	ElementRef;
	@ViewChild('quantity')				quantityFilter		: 	ElementRef;
	@ViewChild('imageFilter')			imageFilter			: 	ElementRef;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(productList);
		this.dataSource = new ProductDataSource(this.tableData, this.paginator, this.sort);

		Observable.fromEvent(this.productNameFilter.nativeElement, 'keyup')
			.debounceTime(150)
			.distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) return;
				this.dataSource.productNameFilter = this.productNameFilter.nativeElement.value;
			});
	}
}

export class ProductDataSource extends DataSource<any> {

	displayDataChanges: any;
	_productNameFilterChange 	= new BehaviorSubject('');
	_modelFilterChange 			= new BehaviorSubject('');
	_priceFilterChange 			= new BehaviorSubject('');
	_quantityFilterChange 		= new BehaviorSubject('');
	_statusFilterChange 		= new BehaviorSubject('');
	_imageFilterChange 			= new BehaviorSubject('');

	get productNameFilter(): string { return this._productNameFilterChange.value; }
	set productNameFilter(filter: string) { this._productNameFilterChange.next(filter); }

	get modelFilter(): string { return this._modelFilterChange.value; }
	set modelFilter(filter: string) { this._modelFilterChange.next(filter); }

	get priceFilter(): string { return this._priceFilterChange.value; }
	set priceFilter(filter: string) { this._priceFilterChange.next(filter); }

	get quantityFilter(): string { return this._quantityFilterChange.value; }
	set quantityFilter(filter: string) { this._quantityFilterChange.next(filter); }

	get statusFilter(): string { return this._statusFilterChange.value; }
	set statusFilter(filter: string) { this._statusFilterChange.next(filter); }

	get imageFilter(): string { return this._imageFilterChange.value; }
	set imageFilter(filter: string) { this._imageFilterChange.next(filter); }

	constructor(private _tableData: TableData, private  _paginator: MdPaginator, private _sort: MdSort) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_paginator.page,
			_sort.mdSortChange,
			this._productNameFilterChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			const startIndex = this._paginator.pageIndex  * this._paginator.pageSize;
			return this.getSortedData().slice().filter((item) => {

				let searchStr = (item.product_name + ' ' + item.model + ' ' + item.price + ' ' + item.quantity + ' ' + item.status).toLowerCase();
				return searchStr.indexOf(this.productNameFilter.toLowerCase()) != -1;
			}).splice(startIndex, this._paginator.pageSize);
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
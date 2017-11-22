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

@Component({
	selector: 'seller-shipping-settings',
	templateUrl: './shipping-settings.component.html',
	styleUrls: ['./shipping-settings.component.scss']
})
export class ShippingSettingsComponent implements OnInit {

	shippingList = [];
	list = [];

	displayedColumns = ['destination', 'shipping_company', 'delivery_time', 'weight', 'cost', 'action'];
	tableData = new TableData();
	dataSource: ShippingDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(this.shippingList);
		this.dataSource = new ShippingDataSource(this.tableData);
	}

	redrawTable() {
		this.tableData.setData(this.shippingList);
		this.dataSource = new ShippingDataSource(this.tableData);
	}

	addRow() {
		this.shippingList.push( {destination: '', shipping_list: '', delivery_time: '', weight_from: '', weight_to: '',cost_fixed: '',  cost_per_weight: ''} );
		this.redrawTable();
	}

	removeRow(index) {
		this.shippingList.splice(index, 1);
		this.redrawTable();
	}
}

export class ShippingDataSource extends DataSource<any> {

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
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

const totalsList = [ 
	{ product: 'Canon EOS 5D', model: 'Product 3', quantity: 1, unit_price: '$80.00', total: '$80.00' },
	{ product: '', model: '', quantity: '', unit_price: 'Sub-Total:', total: '$80.00' },
	{ product: '', model: '', quantity: '', unit_price: 'Flat Shipping Rate:', total: '$5.00' },
	{ product: '', model: '', quantity: '', unit_price: 'Total:', total: '$85.00' }
];

@Component({
	selector: 'admin-orders-tab-totals',
	templateUrl: './totals.component.html',
	styleUrls: [ './totals.component.scss' ]
})
export class TotalsComponent implements OnInit {

	displayedColumns = ['product', 'model', 'quantity', 'unit_price', 'total'];

	orderStatuses = [ 'Missing Orders', 'Canceled', 'Canceled Reversal', 'Chargeback', 'Complete', 'Denied', 'Expired', 'Failed', 'Pending', 'Processed', 'Processing', 'Refunded', 'Reversed', 'Shipped', 'Voided' ];

	tableData = new TableData();
	dataSource: TotalsDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(totalsList);
		this.dataSource = new TotalsDataSource(this.tableData);
	}
}

export class TotalsDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
		]
	}

	connect(): Observable<any> {
		return Observable.of(totalsList);
	}

	disconnect() {

	}
}
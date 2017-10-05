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

const taxList = [
	{ tax_name: 'Safe Tax', tax_rate: 'Charges', tax_rate_type: 'recovery', 'tax_amount': '$10' },
	{ tax_name: 'Safe Tax', tax_rate: 'Charges', tax_rate_type: 'recovery', 'tax_amount': '$10' },
	{ tax_name: 'Safe Tax', tax_rate: 'Charges', tax_rate_type: 'recovery', 'tax_amount': '$10' },
	{ tax_name: 'Safe Tax', tax_rate: 'Charges', tax_rate_type: 'recovery', 'tax_amount': '$10' },
	{ tax_name: 'Safe Tax', tax_rate: 'Charges', tax_rate_type: 'recovery', 'tax_amount': '$10' }
];

@Component({
	selector: 'admin-tax-list',
	templateUrl: './tax-list.component.html',
	styleUrls: [ './tax-list.component.scss' ]
})
export class TaxListComponent implements OnInit {

	displayedColumns = ['tax_name', 'tax_rate', 'tax_rate_type', 'tax_amount'];

	tableData = new TableData();
	dataSource: TaxDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(taxList);
		this.dataSource = new TaxDataSource(this.tableData);
	}
}

export class TaxDataSource extends DataSource<any> {

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
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

const taxRateList = [
	{ tax_name: 'Eco Tax(-2.00)', tax_rate: '2.0000', type: 'Fixed Amount', geo_zone: 'UK VAT Zone', date_added: '21/09/2011', date_modified: '23/09/2011' },
	{ tax_name: 'VAT (20%)', tax_rate: '20.0000', type: 'Percentage', geo_zone: 'UK VAT Zone', date_added: '21/09/2011', date_modified: '23/09/2011' },
];

@Component({
	selector: 'admin-tax-rates-list',
	templateUrl: './tax-rates-list.component.html',
	styleUrls: ['./tax-rates-list.component.scss']
})
export class TaxRateListComponent implements OnInit {

	displayedColumns = ['tax_name', 'tax_rate', 'type', 'geo_zone', 'date_added', 'date_modified', 'action'];
	tableData = new TableData();
	dataSource: TaxRateDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(taxRateList);
		this.dataSource = new TaxRateDataSource(this.tableData, this.paginator, this.sort);
	}
}

export class TaxRateDataSource extends DataSource<any> {

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
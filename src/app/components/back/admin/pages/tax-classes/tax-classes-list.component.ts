import { Component, OnInit, ElementRef, ViewChild } 		from '@angular/core';
import { DataSource } 										from '@angular/cdk/table';
import { MdPaginator } 										from '@angular/material';
import { MdSort } 											from '@angular/material';
import { BehaviorSubject } 									from 'rxjs/BehaviorSubject';
import { Observable } 										from 'rxjs/Observable';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { TableData } 										from '../../../../helper/table-data/table-data';
import { CRUDService } 										from '../../../../../services/crud.service';

@Component({
	selector: 'admin-tax-classes-list',
	templateUrl: './tax-classes-list.component.html',
	styleUrls: ['./tax-classes-list.component.scss']
})
export class TaxClassListComponent implements OnInit {

	displayedColumns = ['tax_class_title', 'action'];
	tableData = new TableData();
	dataSource: TaxClassDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor(private crudService: CRUDService) { }

	ngOnInit() {
		this.crudService.retrieve( 'TaxClass' ).subscribe( result => {
			if (result.status == 'ok') {
				this.tableData.setData(result.content);
				this.dataSource = new TaxClassDataSource(this.tableData, this.paginator, this.sort);
			}
		});
	}
}

export class TaxClassDataSource extends DataSource<any> {

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
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MdPaginator } from '@angular/material';
import { MdSort } 										from '@angular/material';
import { BehaviorSubject } 								from 'rxjs/BehaviorSubject';
import { Observable } 									from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { TableData } 									from '../../../../helper/table-data/table-data';
import { CRUDService } 									from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-zones-list',
	templateUrl: './zones-list.component.html',
	styleUrls: [ './zones-list.component.scss' ]
})
export class ZonesListComponent implements OnInit {

	displayedColumns = ['country', 'zone_name', 'zone_code', 'action'];

	tableData = new TableData();
	dataSource: ZonesDataSource | null;

	constructor(private crudService: CRUDService) { }

	ngOnInit() {
		this.crudService.retrieve( 'Zone' ).subscribe( result => {
			if (result.status == 'ok') {
				this.tableData.setData(result.content);
				this.dataSource = new ZonesDataSource(this.tableData);
			}
		});
	}
}

export class ZonesDataSource extends DataSource<any> {

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
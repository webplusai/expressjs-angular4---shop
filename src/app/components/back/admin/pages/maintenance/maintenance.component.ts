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
	selector: 'admin-maintenance',
	templateUrl: './maintenance.component.html',
	styleUrls: [ './maintenance.component.scss' ]
})
export class MaintenanceComponent implements OnInit {

	socialLinksList = [
		{ icon: 'facebook-square',		color: '#4867aa', 	link: '', 	text: '' },
		{ icon: 'google-plus-square', 	color: '#dc4a38',	link: '',  	text: '' },
		{ icon: 'twitter-square', 		color: '#5aafef',	link: '', 	text: '' },
		{ icon: 'pinterest-square',		color: '#bd081b',	link: '',	text: '' }
	];

	displayedColumns = ['icon', 'link', 'text', 'action'];

	tableData = new TableData();
	dataSource: SocialLinksDataSource | null;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(this.socialLinksList);
		this.dataSource = new SocialLinksDataSource(this.tableData);
	}

	orderUp(index) {
		if (index == 0)
			return;

		var tmp = this.socialLinksList[index - 1];
		this.socialLinksList[index - 1] = this.socialLinksList[index];
		this.socialLinksList[index] = tmp;
	}

	orderDown(index) {
		if (index == this.socialLinksList.length - 1)
			return;

		var tmp = this.socialLinksList[index + 1];
		this.socialLinksList[index + 1] = this.socialLinksList[index];
		this.socialLinksList[index] = tmp;
	}
}

export class SocialLinksDataSource extends DataSource<any> {

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
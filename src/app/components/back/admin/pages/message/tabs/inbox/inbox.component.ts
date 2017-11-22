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

import { TableData } from '../../../../../../helper/table-data/table-data';

const emailList = [
	{ star: true, sender: 'ABC Company', message: 'Lorem ipsum dolor sit amet set.', attachment: true, date: '12.10 AM' },
	{ star: true, sender: 'Mr Bean', message: 'Hi Bro, Lorem ipsum dolor amit', attachment: false, date: 'Jan 11'},
	{ star: false, sender: 'Jonathan Smith', message: 'Lorem ipsum dolor sit amet', attachment: false, date: 'March 15'},
	{ star: true, sender: 'Facebook', message: 'Dolor sit amet, consectetuer adipiscing', attachment: true, date: 'June 01'},
	{ star: false, sender: 'Tasi man', message: 'Lorem ipsum dolor sit amet', attachment: false, date: 'May 2'},
]

@Component({
	selector: 'admin-message-tab-inbox',
	templateUrl: './inbox.component.html',
	styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

	displayedColumns = [ 'checkbox', 'star', 'sender', 'message', 'attachment', 'date' ]
	tableData = new TableData();
	dataSource: EmailDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;

	@ViewChild('filter') 		filter		: 	ElementRef;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(emailList);
		this.dataSource = new EmailDataSource(this.tableData, this.paginator);

		Observable.fromEvent(this.filter.nativeElement, 'keyup')
			.debounceTime(150)
			.distinctUntilChanged()
			.subscribe(() => {
				if (!this.dataSource) return;
				this.dataSource.filter = this.filter.nativeElement.value;
			});
	}
}

export class EmailDataSource extends DataSource<any> {

	displayDataChanges: any;
	_filterChange 		= new BehaviorSubject('');

	get filter(): string { return this._filterChange.value; }
	set filter(filter: string) { this._filterChange.next(filter); }

	constructor(private _tableData: TableData, private  _paginator: MdPaginator) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange,
			_paginator.page,
			this._filterChange
		]
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			const startIndex = this._paginator.pageIndex  * this._paginator.pageSize;
			return this._tableData.data.slice().filter((item) => {
				let searchStr = (item.sender + ' ' + item.message + ' ' + item.date).toLowerCase();
				return searchStr.indexOf(this.filter.toLowerCase()) != -1;
			}).splice(startIndex, this._paginator.pageSize);
		});
	}

	disconnect() {

	}
}
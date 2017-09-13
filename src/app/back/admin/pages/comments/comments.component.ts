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

const commentsList = [
	{ rating: 4, date: '05/03/2017', customer: 'imdad16', 'content': 'Mobile responsive child themes include media' },
	{ rating: 4, date: '05/03/2017', customer: 'imdad16', 'content': 'Mobile responsive child themes include media' },
	{ rating: 4, date: '05/03/2017', customer: 'imdad16', 'content': 'Mobile responsive child themes include media' },
	{ rating: 4, date: '05/03/2017', customer: 'imdad16', 'content': 'Mobile responsive child themes include media' }
];

@Component({
	selector: 'admin-comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

	displayedColumns = [ 'rating', 'content' ];
	tableData = new TableData();
	dataSource: CommentDataSource | null;

	@ViewChild(MdPaginator) paginator: MdPaginator;
	@ViewChild(MdSort) sort: MdSort;

	constructor() { }

	ngOnInit() {
		this.tableData.setData(commentsList);
		this.dataSource = new CommentDataSource(this.tableData, this.paginator, this.sort);
	}
}

export class CommentDataSource extends DataSource<any> {

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
			return this._tableData.data;
		});
	}

	disconnect() {

	}
}
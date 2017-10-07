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
	selector: 'admin-slideshow-form',
	templateUrl: './slideshow-form.component.html',
	styleUrls: ['./slideshow-form.component.scss']
})
export class SlideshowFormComponent implements OnInit {

	slideshowList = [
		{ locale: 'gb', title: '', link: '', image: '', sort_order: '' },
		{ locale: 'fr', title: '', link: '', image: '', sort_order: '' },
		{ locale: 'de', title: '', link: '', image: '', sort_order: '' },
		{ locale: 'es', title: '', link: '', image: '', sort_order: '' }
	];

	displayedColumns = ['title', 'flag', 'link', 'image', 'sort_order', 'action'];
	tableData = new TableData();
	dataSource: SlideshowDataSource | null;

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.tableData = new TableData();
		this.tableData.setData(this.slideshowList);
		this.dataSource = new SlideshowDataSource(this.tableData);
	}

	removeRow(index) {
		this.slideshowList.splice(index, 1);
		this.redrawTable();
	}

	togglePopover(e) {
		var f = $(e.target).closest(".image").find(".popover").is(":visible");
		$(".popover").addClass('hidden');
		if (!f) {
			$(e.target).closest(".image").find(".popover").toggleClass('hidden');
		}
	}

	uploadImage(e) {
		$(e.target).closest(".image").find("#imgInput").trigger('click');
	}

	removeImage(e) {
		$(e.target).closest(".image").find("img").attr('src', 'http://www.sharejesusgeneva.com/image/cache/no_image-100x100.png');
	}

	readURL(event) {
		if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (e) => {
            	$(event.target).closest(".image").find('img')
                    .attr('src', (e.target as any).result)
                    .width(100)
                    .height(100);
            };

            reader.readAsDataURL(event.target.files[0]);
        }
	}
}

export class SlideshowDataSource extends DataSource<any> {

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
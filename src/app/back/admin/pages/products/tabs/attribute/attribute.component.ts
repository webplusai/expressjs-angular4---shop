import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
	selector: 'admin-product-tab-attribute',
	templateUrl: './attribute.component.html',
	styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

	displayedColumns = ['attribute', 'text', 'action'];
	dataSource = new AttributeDataSource();

	constructor() { }

	ngOnInit() {
	}

	addAttribute() {
		this.dataSource.addAttribute();
		console.log(this.dataSource);
	}

	removeAttribute(index) {

	}

}

export class AttributeDataSource extends DataSource<any> {

	data = [
		{
			index: 0,
			isLast: true,
			attribute: '',
			text: ''
		},
		{
			index: 1,
			attribute: '',
			text: ''
		}
	];

	connect(): Observable<any> {
		return Observable.of(this.data);
	}

	disconnect() { }

	addAttribute() {
		this.data.push({
			index: this.data.length,
			isLast: false,
			attribute: '',
			text: ''
		});
		console.log(this.data);
	}

	removeAttribute() {

	}
}

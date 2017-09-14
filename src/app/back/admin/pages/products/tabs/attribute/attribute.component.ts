import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-product-tab-attribute',
	templateUrl: './attribute.component.html',
	styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

	displayedColumns = ['attribute', 'text', 'action'];
	tableData = new TableData();
	dataSource : AttributeDataSource | null;

	attributeList = [ ];
	list = [];

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.attributeList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new AttributeDataSource(this.tableData);
	}

	addRow() {
		this.attributeList.push( {attribute: '', text: ''} );
		this.redrawTable();
	}

	removeRow(index) {
		this.attributeList.splice(index, 1);
		this.redrawTable();
	}

}

export class AttributeDataSource extends DataSource<any> {

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

import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-product-tab-special',
	templateUrl: './special.component.html',
	styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {

	displayedColumns = ['customer_group', 'quantity', 'priority', 'price', 'date_start', 'date_end', 'action'];
	tableData = new TableData();
	dataSource : SpecialDataSource | null;

	specialList = [ ];
	list = [];

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.specialList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new SpecialDataSource(this.tableData);
	}

	addRow() {
		this.specialList.push( {customer_group: '', quantity: '', priority: '', price: '', date_start: new Date(), date_end: new Date()} );
		this.redrawTable();
	}

	removeRow(index) {
		this.specialList.splice(index, 1);
		this.redrawTable();
	}

}

export class SpecialDataSource extends DataSource<any> {

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

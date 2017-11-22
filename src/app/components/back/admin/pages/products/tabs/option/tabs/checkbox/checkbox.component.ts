import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-product-tab-option-tab-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

	displayedColumns = ['option_value', 'quantity', 'subtract_stock', 'price', 'points', 'weight', 'action'];
	tableData = new TableData();
	dataSource : CheckboxDataSource | null;

	checkboxList = [ ];
	list = [];

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.checkboxList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new CheckboxDataSource(this.tableData);
	}

	addRow() {
		this.checkboxList.push( {option_value: '', quantity: '', 'subtract_stock': 'Yes', 'price': '', 'points': '', 'weight': '', 'price_direction': '+', 'points_direction': '+', 'weight_direction': '+'} );
		this.redrawTable();
	}

	removeRow(index) {
		this.checkboxList.splice(index, 1);
		this.redrawTable();
	}

}

export class CheckboxDataSource extends DataSource<any> {

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

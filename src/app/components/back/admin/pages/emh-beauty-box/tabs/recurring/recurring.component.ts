import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-product-tab-recurring',
	templateUrl: './recurring.component.html',
	styleUrls: ['./recurring.component.scss']
})
export class RecurringComponent implements OnInit {

	displayedColumns = ['recurring_profile', 'customer_group', 'action'];
	tableData = new TableData();
	dataSource : RecurringDataSource | null;

	recurringList = [ ];
	list = [];

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.recurringList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new RecurringDataSource(this.tableData);
	}

	addRow() {
		this.recurringList.push( {recurring_profile: '', customer_group: ''} );
		this.redrawTable();
	}

	removeRow(index) {
		this.recurringList.splice(index, 1);
		this.redrawTable();
	}

}

export class RecurringDataSource extends DataSource<any> {

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

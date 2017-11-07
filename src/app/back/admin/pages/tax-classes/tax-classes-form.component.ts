import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-tax-classes-form',
	templateUrl: './tax-classes-form.component.html',
	styleUrls: ['./tax-classes-form.component.scss']
})
export class TaxClassFormComponent implements OnInit {

	displayedColumns = ['tax_rate', 'based_on', 'priority', 'action'];
	tableData = new TableData();
	dataSource : TaxClassesDataSource | null;

	taxClassesList = [ ];
	list = [];

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.taxClassesList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new TaxClassesDataSource(this.tableData);
	}

	addRow() {
		this.taxClassesList.push( {tax_rate: '', based_on: '', priority: ''} );
		this.redrawTable();
	}

	removeRow(index) {
		this.taxClassesList.splice(index, 1);
		this.redrawTable();
	}

}

export class TaxClassesDataSource extends DataSource<any> {

	displayDataChanges: any;

	constructor(private _tableData: TableData) {
		super();

		this.displayDataChanges = [
			_tableData.dataChange
		];
	}

	connect(): Observable<any> {

		return Observable.merge(...this.displayDataChanges).map(() => {
			return this._tableData.data;
		});
	}

	disconnect() {

	}
}

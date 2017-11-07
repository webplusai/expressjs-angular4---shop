import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-filters-form',
	templateUrl: './filters-form.component.html',
	styleUrls: ['./filters-form.component.scss']
})
export class FiltersFormComponent implements OnInit {

	displayedColumns = ['filter_name', 'sort_order', 'action'];
	tableData = new TableData();
	dataSource : FiltersDataSource | null;

	filtersList = [ ];
	list = [];

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.filtersList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new FiltersDataSource(this.tableData);
	}

	addRow() {
		this.filtersList.push( {filter_name: '', sort_order: ''} );
		this.redrawTable();
	}

	removeRow(index) {
		this.filtersList.splice(index, 1);
		this.redrawTable();
	}

}

export class FiltersDataSource extends DataSource<any> {

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

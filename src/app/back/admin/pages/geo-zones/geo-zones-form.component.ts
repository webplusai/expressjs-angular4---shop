import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-geo-zones-form',
	templateUrl: './geo-zones-form.component.html',
	styleUrls: ['./geo-zones-form.component.scss']
})
export class GeoZoneFormComponent implements OnInit {

	displayedColumns = ['country', 'zone', 'action'];
	tableData = new TableData();
	dataSource : GeoZoneDataSource | null;

	geoZonesList = [ ];
	list = [];

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.geoZonesList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new GeoZoneDataSource(this.tableData);
	}

	addRow() {
		this.geoZonesList.push( {country: '', zone: ''} );
		this.redrawTable();
	}

	removeRow(index) {
		this.geoZonesList.splice(index, 1);
		this.redrawTable();
	}

}

export class GeoZoneDataSource extends DataSource<any> {

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

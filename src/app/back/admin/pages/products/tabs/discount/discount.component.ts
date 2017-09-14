import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-product-tab-discount',
	templateUrl: './discount.component.html',
	styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

	displayedColumns = ['customer_group', 'quantity', 'priority', 'price', 'date_start', 'date_end', 'action'];
	tableData = new TableData();
	dataSource : DiscountDataSource | null;

	discountList = [ ];
	list = [];

	constructor() { }

	ngOnInit() {
		this.redrawTable();
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.discountList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new DiscountDataSource(this.tableData);
	}

	addRow() {
		this.discountList.push( {customer_group: '', quantity: '', priority: '', price: '', date_start: new Date(), date_end: new Date()} );
		this.redrawTable();
	}

	removeRow(index) {
		this.discountList.splice(index, 1);
		this.redrawTable();
	}

}

export class DiscountDataSource extends DataSource<any> {

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

import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TableData } from '../../../../../../helper/table-data/table-data';

@Component({
	selector: 'admin-product-tab-reward-points',
	templateUrl: './reward-points.component.html',
	styleUrls: ['./reward-points.component.scss']
})
export class RewardPointsComponent implements OnInit {

	displayedColumns = ['customer_group', 'reward_points'];
	tableData = new TableData();
	dataSource : RewardPointsDataSource | null;

	rewardPointsList = [ {customer_group: 'Default', reward_points: ''} ];

	constructor() { }

	ngOnInit() {
		this.tableData = new TableData();
		this.tableData.setData( this.rewardPointsList );
		this.dataSource = new RewardPointsDataSource(this.tableData);
	}
}

export class RewardPointsDataSource extends DataSource<any> {

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

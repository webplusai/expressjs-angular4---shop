import { Component, OnInit, ViewChild }				from '@angular/core';
import { FormGroup, FormControl, Validators } 		from '@angular/forms';
import { DataSource } 								from '@angular/cdk/collections';
import { Router, ActivatedRoute, Params } 			from '@angular/router';
import { Observable } 								from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';

import { TableData }								from '../../../../helper/table-data/table-data';
import { CRUDService } 								from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-filters-form',
	templateUrl: './filters-form.component.html',
	styleUrls: ['./filters-form.component.scss']
})
export class FiltersFormComponent implements OnInit {

	private filterGroupId;

	@ViewChild('saveButton') saveButton: any;

	displayedColumns = ['name', 'sort_order', 'action'];
	tableData = new TableData();
	dataSource : FiltersDataSource | null;

	filtersList = [ ];
	list = [];

	name 			= 	new FormControl('', [ Validators.required ]);
	sort_order 		= 	new FormControl('', []);

	form = new FormGroup({
		name: 			this.name,
		sort_order:		this.sort_order
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute,
	) { }

	ngOnInit() {
		this.redrawTable();

		this.route.params.subscribe((params: Params) => {
			this.filterGroupId = params['id'];

			if (this.filterGroupId) {
				this.crudService.retrieveOne( 'FilterGroup', this.filterGroupId )
					.subscribe((result) => {
						this.form.patchValue(result.content);
					});

				this.crudService.retrieveCondition( 'Filter', { filter_group: this.filterGroupId } )
					.subscribe((result) => {
						this.filtersList = result.content;
						this.redrawTable();
					});
			}
		});
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.filtersList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new FiltersDataSource(this.tableData);
	}

	addRow() {
		this.filtersList.push( {name: '', sort_order: ''} );
		this.redrawTable();
	}

	removeRow(index) {
		this.filtersList.splice(index, 1);
		this.redrawTable();
	}

	saveFilterGroup() {
		if (this.form.valid) {
			this.form.value.model = 'FilterGroup';

			var queue = [];

			let action = this.filterGroupId ? this.crudService.update( this.form.value, this.filterGroupId ) : this.crudService.create( this.form.value );
			queue.push(action);

			for (var i = 0; i < this.filtersList.length; i++) {
				this.filtersList[i].model = 'Filter';
				let action = this.filtersList[i]._id ? this.crudService.update( this.filtersList[i], this.filtersList[i]._id, ) : this.crudService.create( this.filtersList[i] );
				queue.push(action);
			}

			Observable.forkJoin(queue).subscribe( res => {
				this.router.navigate(['/admin/filters']);
			});
		}
	}

	submitForm() {
		this.saveButton._elementRef.nativeElement.click();
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

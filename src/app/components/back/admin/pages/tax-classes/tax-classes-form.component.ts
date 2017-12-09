import { Component, OnInit, ViewChild, ElementRef, Renderer }					from 	'@angular/core';
import { DataSource } 															from 	'@angular/cdk/collections';
import { Observable } 															from 	'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormArray, FormGroupDirective } 	from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 										from 	'@angular/router';

import 'rxjs/add/observable/of';

import { TableData } 															from 	'../../../../helper/table-data/table-data';
import { CRUDService } 															from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-tax-classes-form',
	templateUrl: './tax-classes-form.component.html',
	styleUrls: ['./tax-classes-form.component.scss']
})
export class TaxClassFormComponent implements OnInit {

	private taxClassId;

	@ViewChild('saveButton') saveButton: any;

	displayedColumns = ['tax_rate', 'based_on', 'priority', 'action'];
	tableData = new TableData();
	dataSource : TaxClassesDataSource | null;

	taxRatesList = [ ];
	list = [];

	taxRates = [];

	name 			= 	new FormControl('', [ Validators.required ]);
	description 	= 	new FormControl('', [ Validators.required ]);

	form = new FormGroup({
		name: 			this.name,
		description: 	this.description
	});

	constructor(
		private crudService: 	CRUDService,
		private router: 		Router,
		private route:			ActivatedRoute
	) { }

	ngOnInit() {
		this.redrawTable();

		this.route.params.subscribe((params: Params) => {
			this.taxClassId = params['id'];

			if (this.taxClassId) {
				this.crudService.retrieveOne( 'TaxClass', this.taxClassId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
					if (result.content.tax_rates) {
						this.taxRatesList = result.content.tax_rates;
					}
					this.redrawTable();
				});
			}
		});

		this.crudService.retrieve( 'TaxRate' ).subscribe( result => {
			if (result.status == 'ok') {
				this.taxRates = result.content;
			}
		});
	}

	redrawTable() {
		this.list = JSON.parse(JSON.stringify(this.taxRatesList));
		this.list.push( {last: true} );

		this.tableData = new TableData();
		this.tableData.setData(this.list);
		this.dataSource = new TaxClassesDataSource(this.tableData);
	}

	addRow() {
		this.taxRatesList.push( {tax_rate: '', based_on: '', priority: ''} );
		this.redrawTable();
	}

	removeRow(index) {
		this.taxRatesList.splice(index, 1);
		this.redrawTable();
	}

	saveTaxClass() {
		if (this.form.valid) {
			this.form.value.model = 'TaxClass';
			this.form.value.tax_rates = this.taxRatesList;

			let action = this.taxClassId ? this.crudService.update( this.form.value, this.taxClassId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/tax-classes']);
			});
		}
	}

	submitForm() {
		this.saveButton._elementRef.nativeElement.click();
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

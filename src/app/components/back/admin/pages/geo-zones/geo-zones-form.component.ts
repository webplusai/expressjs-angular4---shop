import { Component, OnInit, ViewChild, ElementRef, Renderer }					from 	'@angular/core';
import { DataSource } 															from 	'@angular/cdk/collections';
import { Observable } 															from 	'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormArray, FormGroupDirective } 	from 	'@angular/forms';
import { Router, ActivatedRoute, Params } 										from 	'@angular/router';

import 'rxjs/add/observable/of';

import { TableData } 															from 	'../../../../helper/table-data/table-data';
import { CRUDService } 															from 	'../../../../../services/crud.service';

@Component({
	selector: 'admin-geo-zones-form',
	templateUrl: './geo-zones-form.component.html',
	styleUrls: ['./geo-zones-form.component.scss']
})
export class GeoZoneFormComponent implements OnInit {

	private geoZoneId;

	@ViewChild('saveButton') saveButton: any;

	displayedColumns = ['country', 'zone', 'action'];
	tableData = new TableData();
	dataSource : GeoZoneDataSource | null;

	geoZonesList = [ ];
	list = [];

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
			this.geoZoneId = params['id'];

			if (this.geoZoneId) {
				this.crudService.retrieveOne( 'GeoZone', this.geoZoneId )
				.subscribe((result) => {
					this.form.patchValue(result.content);
					if (result.content.geo_zones) {
						this.geoZonesList = result.content.geo_zones;
					}
					this.redrawTable();
				});
			}
		});
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

	saveGeoZone() {
		if (this.form.valid) {
			this.form.value.model = 'GeoZone';
			this.form.value.geo_zones = this.geoZonesList;

			let action = this.geoZoneId ? this.crudService.update( this.form.value, this.geoZoneId ) : this.crudService.create( this.form.value );
			action.subscribe( customerGroup => {
				this.router.navigate(['/admin/geo-zones']);
			});
		}
	}

	submitForm() {
		this.saveButton._elementRef.nativeElement.click();
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

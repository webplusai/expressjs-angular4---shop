import { Component } from '@angular/core';

@Component({
	selector: 'site-content',
	template: `
				<md-sidenav-container>
					<md-sidenav #leftsidenav>
						<left-sidenav> </left-sidenav>
					</md-sidenav>
					<button md-icon-button id="leftSideNav" fxHide (click)="leftsidenav.open()"><md-icon md-font-set="material-icons">menu</md-icon></button>
					<site-header></site-header>
					<router-outlet name='front'></router-outlet>
					<site-footer></site-footer>
				</md-sidenav-container>
			`,
	host: {
		'class': 'layout-column'
	}
})
export class FrontComponent { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from  './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BuyersListComponent } from './pages/buyers/buyers-list.component';
import { BuyersFormComponent } from './pages/buyers/buyers-form.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		component: AdminComponent,
		data: {
			title: 'Dashboard',
			breadcrumb: [ ['Home', 'dashboard'], ['Dashboard', 'dashboard'] ]
		},
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent,
				data: {
					title: 'Dashboard',
					breadcrumb: [ ['Home', 'dashboard'], ['Dashboard', 'dashboard'] ]
				}
			},
			{
				path: 'buyers',
				component: BuyersListComponent,
				data: {
					title: 'Buyers',
					breadcrumb: [ ['Home', 'dashboard'], ['Buyers', 'buyers'] ]
				}
			},
			{
				path: 'buyers/create',
				component: BuyersFormComponent,
				data: {
					title: 'Buyers',
					breadcrumb: [ ['Home', 'dashboard'], ['Buyers', 'buyers'] ]
				}
			}
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class AdminRoutingModule {
	constructor(private router: Router) {
	}
}
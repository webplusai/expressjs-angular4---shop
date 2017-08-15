import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
	{
		path: 'dashboard',
		component: AdminComponent,
		children: [
			{
				path: '',
				component: DashboardComponent,
				outlet: 'admin'
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class AdminRoutingModule { }
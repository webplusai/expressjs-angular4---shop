import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellerComponent } from './seller.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
	{
		path: '',
		component: SellerComponent,
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: 'profile',
				component: ProfileComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	declarations: [
	],
	exports: [
		RouterModule
	]
})
export class SellerRoutingModule { }
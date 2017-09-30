import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellerComponent } from './seller.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsListComponent } from './pages/products/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form.component';

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
			},
			{
				path: 'products',
				component: ProductsListComponent
			},
			{
				path: 'products/create',
				component: ProductsFormComponent
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
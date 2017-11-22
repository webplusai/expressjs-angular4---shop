import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SellerComponent } from './seller.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsListComponent } from './pages/products/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form.component';
import { ShippingSettingsComponent } from './pages/shipping-settings/shipping-settings.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { FinancialRecordsComponent } from './pages/financial-records/financial-records.component';

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
			},
			{
				path: 'shipping-settings',
				component: ShippingSettingsComponent
			},
			{
				path: 'orders',
				component: OrdersComponent
			},
			{
				path: 'messages',
				component: MessagesComponent
			},
			{
				path: 'financial-records',
				component: FinancialRecordsComponent
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
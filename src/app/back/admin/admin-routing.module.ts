import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from  './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BuyersListComponent } from './pages/buyers/buyers-list.component';
import { BuyersFormComponent } from './pages/buyers/buyers-form.component';
import { VendorsListComponent } from './pages/vendors/vendors-list.component';
import { VendorsFormComponent } from './pages/vendors/vendors-form.component';
import { CategoriesListComponent } from './pages/categories/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form.component';
import { ProductsListComponent } from './pages/products/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form.component';
import { BloggersListComponent } from './pages/bloggers/bloggers-list.component';
import { BloggersFormComponent } from './pages/bloggers/bloggers-form.component';
import { NewsListComponent } from './pages/news/news-list.component';
import { NewsFormComponent } from './pages/news/news-form.component';
import { TransactionsListComponent } from './pages/transactions/transactions-list.component';
import { TransactionsFormComponent } from './pages/transactions/transactions-form.component';
import { RecurringOrdersListComponent } from './pages/recurring-orders/recurring-orders-list.component';
import { RecurringOrdersFormComponent } from './pages/recurring-orders/recurring-orders-form.component';
import { ReturnsListComponent } from './pages/returns/returns-list.component';
import { ReturnsFormComponent } from './pages/returns/returns-form.component';
import { OrdersListComponent } from './pages/orders/orders-list.component';
import { OrdersFormComponent } from './pages/orders/orders-form.component';
import { SuperAdministratorListComponent } from './pages/super-administrator/super-administrator-list.component';
import { SuperAdministratorFormComponent } from './pages/super-administrator/super-administrator-form.component';
import { ModeratorsListComponent } from './pages/moderators/moderators-list.component';
import { ModeratorsFormComponent } from './pages/moderators/moderators-form.component';
import { StaffSettingListComponent } from './pages/staff-setting/staff-setting-list.component';

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
			},
			{
				path: 'vendors',
				component: VendorsListComponent,
				data: {
					title: 'Vendors',
					breadcrumb: [ ['Home', 'dashboard'], ['Vendors', 'vendors'] ]
				}
			},
			{
				path: 'vendors/create',
				component: VendorsFormComponent,
				data: {
					title: 'Vendors',
					breadcrumb: [ ['Home', 'dashboard'], ['Vendors', 'vendors'] ]
				}
			},
			{
				path: 'categories',
				component: CategoriesListComponent,
				data: {
					title: 'Categories',
					breadcrumb: [ ['Home', 'dashboard'], ['Categories', 'categories'] ]
				}
			},
			{
				path: 'categories/create',
				component: CategoriesFormComponent,
				data: {
					title: 'Categories',
					breadcrumb: [ ['Home', 'dashboard'], ['Categories', 'categories'] ]
				}
			},
			{
				path: 'products',
				component: ProductsListComponent,
				data: {
					title: 'Products',
					breadcrumb: [ ['Home', 'dashboard'], ['Products', 'products'] ]
				}
			},
			{
				path: 'products/create',
				component: ProductsFormComponent,
				data: {
					title: 'Products',
					breadcrumb: [ ['Home', 'dashboard'], ['Products', 'products'] ]
				}
			},
			{
				path: 'bloggers',
				component: BloggersListComponent,
				data: {
					title: 'Bloggers',
					breadcrumb: [ ['Home', 'dashboard'], ['Bloggers', 'bloggers'] ]
				}
			},
			{
				path: 'bloggers/create',
				component: BloggersFormComponent,
				data: {
					title: 'Bloggers',
					breadcrumb: [ ['Home', 'dashboard'], ['Bloggers', 'bloggers'] ]
				}
			},
			{
				path: 'news',
				component: NewsListComponent,
				data: {
					title: 'News',
					breadcrumb: [ ['Home', 'dashboard'], ['News', 'news'] ]
				}
			},
			{
				path: 'news/create',
				component: NewsFormComponent,
				data: {
					title: 'News',
					breadcrumb: [ ['Home', 'dashboard'], ['News', 'news'] ]
				}
			},
			{
				path: 'transactions',
				component: TransactionsListComponent,
				data: {
					title: 'Transactions',
					breadcrumb: [ ['Home', 'dashboard'], ['Transactions', 'transactions'] ]
				}
			},
			{
				path: 'transactions/create',
				component: TransactionsFormComponent,
				data: {
					title: 'Transactions',
					breadcrumbb: [ ['Home', 'dashboard'], ['Transactions', 'transactions'] ]
				}
			},
			{
				path: 'recurring-orders',
				component: RecurringOrdersListComponent,
				data: {
					title: 'Recurring Orders',
					breadcrumb: [ ['Home', 'dashboard'], ['Recurring Orders', 'recurring-orders'] ]
				}
			},
			{
				path: 'recurring-orders/create',
				component: RecurringOrdersFormComponent,
				data: {
					title: 'Recurring Order',
					breadcrumb: [ ['Home', 'dashboard'], ['Recurring Orders', 'recurring-orders'] ]
				}
			},
			{
				path: 'returns',
				component: ReturnsListComponent,
				data: {
					title: 'Returns',
					breadcrumb: [ ['Home', 'dashboard'], ['Returns', 'returns'] ]
				}
			},
			{
				path: 'returns/create',
				component: ReturnsFormComponent,
				data: {
					title: 'Returns',
					breadcrumb: [ ['Home', 'dashboard'], ['Returns', 'returns'] ]
				}
			},
			{
				path: 'orders',
				component: OrdersListComponent,
				data: {
					title: 'Orders',
					breadcrumb: [ ['Home', 'dashboard'], ['Orders', 'orders'] ]
				}
			},
			{
				path: 'orders/create',
				component: OrdersFormComponent,
				data: {
					title: 'Orders',
					breadcrumb: [ ['Home', 'dashboard'], ['Orders', 'orders'] ]
				}
			},
			{
				path: 'super-administrator',
				component: SuperAdministratorListComponent,
				data: {
					title: 'Super Administrator',
					breadcrumb: [ ['Home', 'dashboard'], ['Super Administrator', 'super-administrator'] ]
				}
			},
			{
				path: 'super-administrator/create',
				component: SuperAdministratorFormComponent,
				data: {
					title: 'Super Administrator',
					breadcrumb: [ ['Home', 'dashboard'], ['Super Administrator', 'super-administrator'] ]
				}
			},
			{
				path: 'moderators',
				component: ModeratorsListComponent,
				data: {
					title: 'Moderators',
					breadcrumb: [ ['Home', 'dashboard'], ['Moderators', 'moderators'] ]
				}
			},
			{
				path: 'moderators/create',
				component: ModeratorsFormComponent,
				data: {
					title: 'Moderators',
					breadcrumb: [ ['Home', 'dashboard'], ['Moderators', 'moderators'] ]
				}
			},
			{
				path: 'staff-setting',
				component: StaffSettingListComponent,
				data: {
					title: 'Staff Setting',
					breadcrumb: [ ['Home', 'dashboard'], ['Staff Setting', 'staff-setting'] ]
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
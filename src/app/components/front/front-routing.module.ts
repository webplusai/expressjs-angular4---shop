import { NgModule } 				from 	'@angular/core';
import { Routes, RouterModule } 	from 	'@angular/router';

import { FrontComponent } 			from 	'./front.component';
import { HomeComponent } 			from 	'./pages/home/home.component';
import { CategoryComponent }		from 	'./pages/category/category.component';
import { PrivateSaleComponent }		from 	'./pages/private-sale/private-sale.component';
import { StoreComponent }			from 	'./pages/store/store.component';
import { ProductComponent }			from 	'./pages/product/product.component';
import { LoginComponent }			from 	'./pages/login/login.component';
import { SignupComponent }			from 	'./pages/signup/signup.component';
import { LoginWrapperComponent }	from 	'./login-wrapper.component';
import { MaintenanceComponent }		from 	'./pages/maintenance/maintenance.component';

const routes: Routes = [
	{
		path: '',
		component: FrontComponent,
		children: [
			{
				path: '',
				component: HomeComponent,
				outlet: 'front'
			},
		]
	},
	{
		path: 'category',
		component: FrontComponent,
		children: [
			{
				path: '',
				component: CategoryComponent,
				outlet: 'front'
			}
		]
	},
	{
		path: 'private-sale',
		component: FrontComponent,
		children: [
			{
				path: '',
				component: PrivateSaleComponent,
				outlet: 'front'
			}
		]
	},
	{
		path: 'store',
		component: FrontComponent,
		children: [
			{
				path: '',
				component: StoreComponent,
				outlet: 'front'
			}
		]
	},
	{
		path: 'product',
		component: FrontComponent,
		children: [
			{
				path: '',
				component: ProductComponent,
				outlet: 'front'
			}
		]
	},
	{
		path: 'login',
		component: LoginWrapperComponent,
		children: [
			{
				path: '',
				component: LoginComponent,
				outlet: 'login'
			}
		]
	},
	{
		path: 'signup',
		component: LoginWrapperComponent,
		children: [
			{
				path: '',
				component: SignupComponent,
				outlet: 'login'
			}
		]
	},
	{
		path: 'maintenance',
		component: MaintenanceComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class FrontRoutingModule { }
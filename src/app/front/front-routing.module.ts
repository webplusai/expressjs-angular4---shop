import { NgModule } 				from 	'@angular/core';
import { Routes, RouterModule } 	from 	'@angular/router';

import { FrontComponent } 			from 	'./front.component';
import { HomeComponent } 			from 	'./pages/home/home.component';
import { CategoryComponent }		from 	'./pages/category/category.component';
import { PrivateSaleComponent }		from 	'./pages/private-sale/private-sale.component';
import { StoreComponent }			from 	'./pages/store/store.component';
import { ProductComponent }			from 	'./pages/product/product.component';

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
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class FrontRoutingModule { }
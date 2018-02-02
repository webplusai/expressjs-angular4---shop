import { NgModule } 				from 	'@angular/core';
import { Routes, RouterModule } 	from 	'@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: './components/front/front.module#FrontModule'
	},
	{
		path: 'admin',
		loadChildren: './components/back/admin/admin.module#AdminModule'
	},
	{
		path: 'buyer',
		loadChildren: './components/back/buyer/buyer.module#BuyerModule'
	},
	{
		path: 'seller',
		loadChildren: './components/back/seller/seller.module#SellerModule'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
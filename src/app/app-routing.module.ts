import { NgModule } 				from 	'@angular/core';
import { Routes, RouterModule } 	from 	'@angular/router';

const routes: Routes = [
	/*{
		path: '',
		loadChildren: './front/front.module#FrontModule'
	},
	{
		path: 'admin',
		loadChildren: './back/admin/admin.module#AdminModule'
	},*/
	{
		path: 'buyer',
		loadChildren: './back/buyer/buyer.module#BuyerModule'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
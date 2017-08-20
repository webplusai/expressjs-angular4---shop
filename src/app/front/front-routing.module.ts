import { NgModule } 				from 	'@angular/core';
import { Routes, RouterModule } 	from 	'@angular/router';

import { FrontComponent } 			from 	'./front.component';
import { HomeComponent } 			from 	'./pages/home/home.component';
import { CategoryComponent }		from 	'./pages/category/category.component';

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
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class FrontRoutingModule { }
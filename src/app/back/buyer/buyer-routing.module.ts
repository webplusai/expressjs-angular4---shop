import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { BuyerComponent } from './buyer.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';

const routes: Routes = [
	{
		path: '',
		component: BuyerComponent,
		children: [
			{
				path: 'my-account',
				component: MyAccountComponent
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
export class BuyerRoutingModule { }
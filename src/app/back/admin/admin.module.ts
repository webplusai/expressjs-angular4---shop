import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
	imports: [
		AdminRoutingModule
	],
	declarations: [
		AdminComponent,
		DashboardComponent
	]
})
export class AdminModule { }
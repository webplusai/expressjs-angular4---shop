import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './partials/header/header.component';
import { LeftSidenavComponent } from './partials/sidenav/left/left.component';

@NgModule({
	imports: [
		AdminRoutingModule,
		MaterialModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	declarations: [
		AdminComponent,
		DashboardComponent,
		LoginComponent,
		HeaderComponent,
		LeftSidenavComponent
	]
})
export class AdminModule { }
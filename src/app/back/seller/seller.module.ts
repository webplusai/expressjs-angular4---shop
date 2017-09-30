import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SellerRoutingModule } from './seller-routing.module';

import { SellerComponent } from './seller.component';
import { HeaderComponent } from './partials/header/header.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
	imports: [
		CommonModule,
		SellerRoutingModule,
		CdkTableModule,
		MaterialModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		SellerComponent,
		HeaderComponent,
		SidenavComponent,
		DashboardComponent,
		ProfileComponent
	]
})
export class SellerModule { }

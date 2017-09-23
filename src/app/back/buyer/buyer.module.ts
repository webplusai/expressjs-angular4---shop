import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BuyerRoutingModule } from './buyer-routing.module';

import { BuyerComponent } from './buyer.component';
import { HeaderComponent } from './partials/header/header.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';

@NgModule({
	imports: [
		BuyerRoutingModule,
		MaterialModule,
		FlexLayoutModule,
		CommonModule
	],
	declarations: [
		BuyerComponent,
		HeaderComponent,
		SidenavComponent,
		MyAccountComponent
	]
})
export class BuyerModule { }
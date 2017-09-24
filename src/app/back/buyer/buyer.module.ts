import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BuyerRoutingModule } from './buyer-routing.module';

import { BuyerComponent } from './buyer.component';
import { HeaderComponent } from './partials/header/header.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';
import { PasswordComponent } from './pages/password/password.component';

@NgModule({
	imports: [
		BuyerRoutingModule,
		MaterialModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	declarations: [
		BuyerComponent,
		HeaderComponent,
		SidenavComponent,
		MyAccountComponent,
		EditAccountComponent,
		PasswordComponent
	]
})
export class BuyerModule { }
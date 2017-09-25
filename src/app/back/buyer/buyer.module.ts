import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdDatepickerModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';

import { BuyerRoutingModule } from './buyer-routing.module';

import { BuyerComponent } from './buyer.component';
import { HeaderComponent } from './partials/header/header.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';
import { PasswordComponent } from './pages/password/password.component';
import { AddressBookListComponent } from './pages/address-book/address-book-list.component';
import { AddressBookFormComponent } from './pages/address-book/address-book-form.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { RewardPointsComponent } from './pages/reward-points/reward-points.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

@NgModule({
	imports: [
		BuyerRoutingModule,
		MaterialModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		CdkTableModule,
		MdDatepickerModule,
		MdNativeDateModule
	],
	declarations: [
		BuyerComponent,
		HeaderComponent,
		SidenavComponent,
		MyAccountComponent,
		EditAccountComponent,
		PasswordComponent,
		AddressBookListComponent,
		AddressBookFormComponent,
		WishListComponent,
		OrderHistoryComponent,
		DownloadsComponent,
		RewardPointsComponent,
		ReturnsComponent,
		TransactionsComponent
	]
})
export class BuyerModule { }
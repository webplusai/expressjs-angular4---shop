import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SellerRoutingModule } from './seller-routing.module';

import { ImageSelectorComponent } from '../../common/image-selector/image-selector.component';

import { SellerComponent } from './seller.component';
import { HeaderComponent } from './partials/header/header.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsListComponent } from './pages/products/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form.component';
import { GeneralComponent } from './pages/products/tabs/general/general.component';
import { ShippingComponent } from './pages/products/tabs/shipping/shipping.component';
import { DataComponent } from './pages/products/tabs/data/data.component';
import { OptionsComponent } from './pages/products/tabs/options/options.component';
import { SpecialPricesComponent } from './pages/products/tabs/special-prices/special-prices.component';
import { QuantityDiscountsComponent } from './pages/products/tabs/quantity-discounts/quantity-discounts.component';
import { EnglishComponent } from './pages/products/tabs/general/tabs/english/english.component';
import { FrenchComponent } from './pages/products/tabs/general/tabs/french/french.component';

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
		ImageSelectorComponent,

		SellerComponent,
		HeaderComponent,
		SidenavComponent,
		DashboardComponent,
		ProfileComponent,
		ProductsListComponent,
		ProductsFormComponent,
		GeneralComponent,
		ShippingComponent,
		DataComponent,
		OptionsComponent,
		SpecialPricesComponent,
		QuantityDiscountsComponent,
		EnglishComponent,
		FrenchComponent
	]
})
export class SellerModule { }

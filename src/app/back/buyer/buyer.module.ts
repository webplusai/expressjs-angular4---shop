import { NgModule } from '@angular/core';

import { BuyerRoutingModule } from './buyer-routing.module';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BuyerComponent } from './buyer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
	imports: [
		BuyerRoutingModule,
		MaterialModule,
		FlexLayoutModule
	],
	declarations: [
		BuyerComponent,
		HeaderComponent
	]
})
export class BuyerModule { }
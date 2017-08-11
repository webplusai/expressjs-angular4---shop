import { NgModule } from '@angular/core';

import { FrontRoutingModule } from './front-routing.module';
import { MaterialModule } from '@angular/material';

import { FrontComponent } from './front.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } 		from 	'./partials/header/header.component';
import { FooterComponent } 		from 	'./partials/footer/footer.component';

@NgModule({
	imports: [
		FrontRoutingModule,
		MaterialModule
	],
	declarations: [
		HomeComponent,
		FrontComponent,
		HeaderComponent,
		FooterComponent
	]
})
export class FrontModule { }
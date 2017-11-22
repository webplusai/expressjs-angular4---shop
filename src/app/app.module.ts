import { NgModule } 				from 	'@angular/core';
import { BrowserAnimationsModule } 	from 	'@angular/platform-browser/animations';
import { NativeDateAdapter } 		from 	'@angular/material';
import { HttpClientModule }    		from 	'@angular/common/http';

import { AppRoutingModule } 		from 	'./app-routing.module';
import { CRUDService }				from 	'./services/crud.service';

import { AppComponent } 			from 	'./app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [ 
		NativeDateAdapter,
		CRUDService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

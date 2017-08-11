import { NgModule } 			from 	'@angular/core';
import { BrowserAnimationsModule } 		from 	'@angular/platform-browser/animations';
import { AppRoutingModule } 	from 	'./app-routing.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } 		from 	'./app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserAnimationsModule,
		AppRoutingModule,
		MaterialModule
	],
	exports: [
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

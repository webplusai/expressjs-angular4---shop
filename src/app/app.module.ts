import { NgModule } 			from 	'@angular/core';
import { BrowserModule } 		from 	'@angular/platform-browser';
import { AppRoutingModule } 	from 	'./app-routing.module';

import { AppComponent } 		from 	'./app.component';
import { HeaderComponent } 		from 	'./front/partials/header/header.component';
import { FooterComponent } 		from 	'./front/partials/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

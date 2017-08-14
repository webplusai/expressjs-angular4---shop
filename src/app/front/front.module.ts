import { NgModule } 							from 	'@angular/core';
import { CommonModule } 						from 	'@angular/common';
import { MaterialModule } 						from 	'@angular/material';
import { FlexLayoutModule } 					from 	'@angular/flex-layout';
import { BrowserAnimationsModule } 				from 	'@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } 	from 	'@angular/forms';

import { SlickModule } 							from 	'ngx-slick';
import { FrontRoutingModule } 					from 	'./front-routing.module';

import { HomeComponent } 						from 	'./pages/home/home.component';
import { FrontComponent } 						from 	'./front.component';
import { HeaderComponent } 						from 	'./partials/header/header.component';
import { FooterComponent } 						from 	'./partials/footer/footer.component';
import { LeftSidenavComponent } 				from 	'./partials/sidenav/left.component';
import { RightSidenavComponent } 				from 	'./partials/sidenav/right.component';
import { SlideshowComponent } 					from 	'./partials/slideshow/slideshow.component';
import { MenuMegaComponent } 					from 	'./partials/menu-mega/menu-mega.component';
import { StoreFilterComponent } 				from 	'./partials/store-filter/store-filter.component';
import { StoreGridComponent } 					from 	'./partials/store-grid/store-grid.component';
import { ColloborationPanelComponent } 			from 	'./partials/colloboration-panel/colloboration-panel.component';

@NgModule({
	imports: [
		FrontRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		FlexLayoutModule,
		SlickModule.forRoot()
	],
	declarations: [
		HomeComponent,
		FrontComponent,
		HeaderComponent,
		FooterComponent,
		LeftSidenavComponent,
		RightSidenavComponent,
		SlideshowComponent,
		MenuMegaComponent,
		StoreFilterComponent,
		StoreGridComponent,
		ColloborationPanelComponent
	]
})
export class FrontModule { }
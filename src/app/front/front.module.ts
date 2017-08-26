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
import { LeftSidenavComponent } 				from 	'./partials/sidenav/left/left.component';
import { RightSidenavComponent } 				from 	'./partials/sidenav/right/right.component';
import { SlideshowComponent } 					from 	'./partials/slideshow/slideshow.component';
import { MenuMegaComponent } 					from 	'./partials/menu-mega/menu-mega.component';
import { StoreFilterComponent } 				from 	'./partials/store-filter/store-filter.component';
import { StoreGridComponent } 					from 	'./partials/store-grid/store-grid.component';
import { CollaboratorPanelComponent } 			from 	'./partials/collaborator-panel/collaborator-panel.component';
import { ActionPanelComponent } 				from 	'./partials/action-panel/action-panel.component';
import { PartnerPanelComponent } 				from 	'./partials/partner-panel/partner-panel.component';
import { CategoryComponent } 					from 	'./pages/category/category.component';
import { ProductFilterComponent } 				from 	'./partials/product-filter/product-filter.component';
import { ProductFilterSidebarComponent }		from 	'./partials/product-filter-sidebar/product-filter-sidebar.component';
import { ProductGridComponent } 				from 	'./partials/product-grid/product-grid.component';
import { PrivateSaleComponent } 				from 	'./pages/private-sale/private-sale.component';
import { StoreComponent } 						from 	'./pages/store/store.component';
import { StoreDetailComponent } 				from 	'./partials/store-detail/store-detail.component';
import { ProductComponent } 					from 	'./pages/product/product.component';
import { ProductExtraComponent } 				from 	'./partials/product-extra/product-extra.component';
import { StoreSummaryComponent } 				from 	'./partials/store-summary/store-summary.component';
import { ProductCardComponent } 				from 	'./partials/product-card/product-card.component';
import { LoginComponent } 						from 	'./pages/login/login.component';
import { LoginWrapperComponent } 				from 	'./login-wrapper.component';
import { SignupComponent } from './pages/signup/signup.component';

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
		CollaboratorPanelComponent,
		ActionPanelComponent,
		PartnerPanelComponent,
		CategoryComponent,
		ProductFilterComponent,
		ProductFilterSidebarComponent,
		ProductGridComponent,
		PrivateSaleComponent,
		StoreComponent,
		StoreDetailComponent,
		ProductComponent,
		ProductExtraComponent,
		StoreSummaryComponent,
		ProductCardComponent,
		LoginComponent,
		LoginWrapperComponent,
		SignupComponent
	]
})
export class FrontModule { }
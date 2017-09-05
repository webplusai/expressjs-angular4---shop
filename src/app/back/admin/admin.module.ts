import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MdDatepickerModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TinyMceModule } from 'angular-tinymce';
import { tinymceDefaultSettings } from 'angular-tinymce';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './partials/header/header.component';
import { LeftSidenavComponent } from './partials/sidenav/left/left.component';
import { RightSidenavComponent } from './partials/sidenav/right/right.component';
import { BuyersListComponent } from './pages/buyers/buyers-list.component';
import { BuyersFormComponent } from './pages/buyers/buyers-form.component';
import { VendorsListComponent } from './pages/vendors/vendors-list.component';
import { VendorsFormComponent } from './pages/vendors/vendors-form.component';
import { CategoriesListComponent } from './pages/categories/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form.component';
import { ProductsListComponent } from './pages/products/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form.component';

@NgModule({
	imports: [
		AdminRoutingModule,
		MaterialModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		CdkTableModule,
		MdDatepickerModule,
		MdNativeDateModule,
		TinyMceModule.forRoot(tinymceDefaultSettings())
	],
	declarations: [
		AdminComponent,
		LoginComponent,
		HeaderComponent,
		LeftSidenavComponent,
		RightSidenavComponent,
		BuyersListComponent,
		DashboardComponent,
		BuyersFormComponent,
		VendorsListComponent,
		VendorsFormComponent,
		CategoriesListComponent,
		CategoriesFormComponent,
		ProductsListComponent,
		ProductsFormComponent
	]
})
export class AdminModule { }
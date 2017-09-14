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
import { GeneralComponent } from './pages/products/tabs/general/general.component';
import { DataComponent } from './pages/products/tabs/data/data.component';
import { LinksComponent } from './pages/products/tabs/links/links.component';
import { AttributeComponent } from './pages/products/tabs/attribute/attribute.component';
import { BloggersListComponent } from './pages/bloggers/bloggers-list.component';
import { BloggersFormComponent } from './pages/bloggers/bloggers-form.component';
import { NewsListComponent } from './pages/news/news-list.component';
import { NewsFormComponent } from './pages/news/news-form.component';
import { TransactionsListComponent } from './pages/transactions/transactions-list.component';
import { TransactionsFormComponent } from './pages/transactions/transactions-form.component';
import { RecurringOrdersListComponent } from './pages/recurring-orders/recurring-orders-list.component';
import { RecurringOrdersFormComponent } from './pages/recurring-orders/recurring-orders-form.component';
import { ReturnsListComponent } from './pages/returns/returns-list.component';
import { ReturnsFormComponent } from './pages/returns/returns-form.component';
import { OrdersListComponent } from './pages/orders/orders-list.component';
import { OrdersFormComponent } from './pages/orders/orders-form.component';
import { CustomerDetailsComponent } from './pages/orders/tabs/customer-details/customer-details.component';
import { ProductsComponent } from './pages/orders/tabs/products/products.component';
import { PaymentDetailsComponent } from './pages/orders/tabs/payment-details/payment-details.component';
import { TotalsComponent } from './pages/orders/tabs/totals/totals.component';
import { ShippingDetailsComponent } from './pages/orders/tabs/shipping-details/shipping-details.component';
import { SuperAdministratorListComponent } from './pages/super-administrator/super-administrator-list.component';
import { SuperAdministratorFormComponent } from './pages/super-administrator/super-administrator-form.component';
import { ModeratorsListComponent } from './pages/moderators/moderators-list.component';
import { ModeratorsFormComponent } from './pages/moderators/moderators-form.component';
import { StaffSettingListComponent } from './pages/staff-setting/staff-setting-list.component';
import { StaffSettingFormComponent } from './pages/staff-setting/staff-setting-form.component';
import { AffiliationListComponent } from './pages/affiliation/affiliation-list.component';
import { AffiliationFormComponent } from './pages/affiliation/affiliation-form.component';
import { AdvertsListComponent } from './pages/adverts/adverts-list.component';
import { AdvertsFormComponent }  from './pages/adverts/adverts-form.component';
import { MessageComponent } from './pages/message/message.component';
import { ComposeEmailComponent } from './pages/message/tabs/compose-email/compose-email.component';
import { InboxComponent } from './pages/message/tabs/inbox/inbox.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { MediaComponent } from './pages/media/media.component';
import { NewsLetterComponent } from './pages/newsletter/newsletter.component';
import { SlideshowComponent } from './pages/slideshow/slideshow.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { CollaborationComponent } from './pages/collaboration/collaboration.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { SubscriptionPlanListComponent } from './pages/subscription-plan/subscription-plan-list.component';
import { SubscriptionPlanFormComponent } from './pages/subscription-plan/subscription-plan-form.component';
import { PaymentsListComponent } from './pages/payments/payments-list.component';

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
		ProductsFormComponent,
		GeneralComponent,
		DataComponent,
		LinksComponent,
		AttributeComponent,
		BloggersListComponent,
		BloggersFormComponent,
		NewsListComponent,
		NewsFormComponent,
		TransactionsListComponent,
		TransactionsFormComponent,
		RecurringOrdersListComponent,
		RecurringOrdersFormComponent,
		ReturnsListComponent,
		ReturnsFormComponent,
		OrdersListComponent,
		OrdersFormComponent,
		CustomerDetailsComponent,
		ProductsComponent,
		PaymentDetailsComponent,
		TotalsComponent,
		ShippingDetailsComponent,
		SuperAdministratorListComponent,
		SuperAdministratorFormComponent,
		ModeratorsListComponent,
		ModeratorsFormComponent,
		StaffSettingListComponent,
		StaffSettingFormComponent,
		AffiliationListComponent,
		AffiliationFormComponent,
		AdvertsListComponent,
		AdvertsFormComponent,
		MessageComponent,
		ComposeEmailComponent,
		InboxComponent,
		CommentsComponent,
		MediaComponent,
		NewsLetterComponent,
		SlideshowComponent,
		PartnersComponent,
		CollaborationComponent,
		ShippingComponent,
		SubscriptionPlanListComponent,
		SubscriptionPlanFormComponent,
		PaymentsListComponent
	]
})
export class AdminModule { }
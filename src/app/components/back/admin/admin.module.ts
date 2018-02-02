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
import { FileSelectDirective } from 'ng2-file-upload';

import { CalendarModule } from 'primeng/primeng';
import { FlotModule } from 'ng2modules-flot';

import { AdminRoutingModule } from './admin-routing.module';

import { ImageSelectorComponent } from '../../common/image-selector/image-selector.component';

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
import { EmhVoucherListComponent } from './pages/emh-voucher/emh-voucher-list.component';
import { EmhVoucherFormComponent } from './pages/emh-voucher/emh-voucher-form.component';
import { EmhBeautyBoxListComponent } from './pages/emh-beauty-box/emh-beauty-box-list.component';
import { EmhBeautyBoxFormComponent } from './pages/emh-beauty-box/emh-beauty-box-form.component';
import { ProductGeneralComponent } from './pages/products/tabs/general/general.component';
import { ProductDataComponent } from './pages/products/tabs/data/data.component';
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
import { ReturnActionsListComponent } from './pages/return-actions/return-actions-list.component';
import { ReturnActionsFormComponent } from './pages/return-actions/return-actions-form.component';
import { ReturnReasonsListComponent } from './pages/return-reasons/return-reasons-list.component';
import { ReturnReasonsFormComponent } from './pages/return-reasons/return-reasons-form.component';
import { ReturnStatusesListComponent } from './pages/return-statuses/return-statuses-list.component';
import { ReturnStatusesFormComponent } from './pages/return-statuses/return-statuses-form.component';
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
import { SlideshowListComponent } from './pages/slideshow/slideshow-list.component';
import { SlideshowFormComponent } from './pages/slideshow/slideshow-form.component';
import { PartnersListComponent } from './pages/partners/partners-list.component';
import { PartnersFormComponent } from './pages/partners/partners-form.component';
import { CollaborationComponent } from './pages/collaboration/collaboration.component';
import { ShippingSettingComponent } from './pages/shipping-setting/shipping-setting.component';
import { SubscriptionPlanListComponent } from './pages/subscription-plan/subscription-plan-list.component';
import { SubscriptionPlanFormComponent } from './pages/subscription-plan/subscription-plan-form.component';
import { PaymentsListComponent } from './pages/payments/payments-list.component';
import { PaymentsFormComponent } from './pages/payments/payments-form.component';
import { EMHTVComponent } from './pages/emhtv/emhtv.component';
import { OptionComponent } from './pages/products/tabs/option/option.component';
import { RecurringComponent } from './pages/products/tabs/recurring/recurring.component';
import { DiscountComponent } from './pages/products/tabs/discount/discount.component';
import { SpecialComponent } from './pages/products/tabs/special/special.component';
import { ImageComponent } from './pages/products/tabs/image/image.component';
import { RewardPointsComponent } from './pages/products/tabs/reward-points/reward-points.component';
import { CheckboxComponent } from './pages/products/tabs/option/tabs/checkbox/checkbox.component';
import { DateComponent } from './pages/products/tabs/option/tabs/date/date.component';
import { DateTimeComponent } from './pages/products/tabs/option/tabs/date-time/date-time.component';
import { DeliveryDateComponent } from './pages/products/tabs/option/tabs/delivery-date/delivery-date.component';
import { FileComponent } from './pages/products/tabs/option/tabs/file/file.component';
import { MiniStatisticsComponent } from './pages/dashboard/mini-statistics/mini-statistics.component';
import { CalendarComponent } from './pages/dashboard/calendar/calendar.component';
import { ChatComponent } from './pages/dashboard/chat/chat.component';
import { StatisticsComponent } from './pages/dashboard/statistics/statistics.component';
import { NotificationComponent } from './pages/dashboard/notification/notification.component';
import { LatestMembersComponent } from './pages/dashboard/latest-members/latest-members.component';
import { MorrisComponent } from './pages/dashboard/earning-graph/morris/morris.component';
import { VectorComponent } from './pages/dashboard/earning-graph/vector/vector.component';
import { MonthlyExpenseComponent } from './pages/dashboard/monthly-expense/monthly-expense.component';
import { DailyVisitorsComponent } from './pages/dashboard/daily-visitors/daily-visitors.component';
import { TopAdvertiseComponent } from './pages/dashboard/top-advertise/top-advertise.component';
import { DailySalesComponent } from './pages/dashboard/daily-sales/daily-sales.component';
import { MonthlyStatsComponent } from './pages/dashboard/monthly-stats/monthly-stats.component';
import { SellComponent } from './pages/dashboard/sell/sell.component';
import { ProspectiveLabelComponent } from './pages/dashboard/prospective-label/prospective-label.component';
import { WeatherComponent } from './pages/dashboard/weather/weather.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { StoreLocationsListComponent } from './pages/store-locations/store-locations-list.component';
import { StoreLocationsFormComponent } from './pages/store-locations/store-locations-form.component';
import { LanguagesListComponent } from './pages/languages/languages-list.component';
import { LanguagesFormComponent } from './pages/languages/languages-form.component';
import { CurrenciesListComponent } from './pages/currencies/currencies-list.component';
import { CurrenciesFormComponent } from './pages/currencies/currencies-form.component';
import { StockStatusesListComponent } from './pages/stock-statuses/stock-statuses-list.component';
import { StockStatusesFormComponent } from './pages/stock-statuses/stock-statuses-form.component';
import { OrderStatusesListComponent } from './pages/order-statuses/order-statuses-list.component';
import { OrderStatusesFormComponent } from './pages/order-statuses/order-statuses-form.component';
import { SettingListComponent } from './pages/setting/setting-list.component';
import { SettingFormComponent } from './pages/setting/setting-form.component';
import { SocialLinksComponent } from './pages/social-links/social-links.component';
import { BadgeComponent } from './pages/badge/badge.component';
import { TaxListComponent } from './pages/tax/tax-list.component';
import { TaxFormComponent } from './pages/tax/tax-form.component';
import { RestorationComponent } from './pages/restoration/restoration.component';
import { DebugErrorComponent } from './pages/debug-error/debug-error.component';
import { StatisticsReportComponent } from './pages/statistics-report/statistics-report.component';
import { ReportSummaryComponent } from './pages/statistics-report/report-summary/report-summary.component';
import { RevenueOverTimeComponent } from './pages/statistics-report/revenue-over-time/revenue-over-time.component';
import { StatisticRightSidebarComponent } from './pages/statistics-report/statistic-right-sidebar/statistic-right-sidebar.component';
import { SalesTeamPerformanceComponent } from './pages/statistics-report/sales-team-performance/sales-team-performance.component';
import { RevenueByQuarterComponent } from './pages/statistics-report/revenue-by-quarter/revenue-by-quarter.component';
import { ShippingReportComponent } from './pages/shipping-report/shipping-report.component';
import { EnglishListComponent } from './pages/language-editor/english/english-list.component';
import { FrenchListComponent } from './pages/language-editor/french/french-list.component';
import { GermanListComponent } from './pages/language-editor/german/german-list.component';
import { SpanishListComponent } from './pages/language-editor/spanish/spanish-list.component';
import { CategoryGeneralComponent } from './pages/categories/tabs/general/general.component';
import { CategoryDataComponent } from './pages/categories/tabs/data/data.component';
import { CategoryFeesComponent } from './pages/categories/tabs/fees/fees.component';
import { VendorGeneralComponent } from './pages/vendors/tabs/general/general.component';
import { VendorFeesComponent } from './pages/vendors/tabs/fees/fees.component';
import { BadgesComponent } from './pages/vendors/tabs/badges/badges.component';
import { UserSettingsComponent } from './pages/vendors/tabs/user-settings/user-settings.component';
import { FiltersListComponent } from './pages/filters/filters-list.component';
import { FiltersFormComponent } from './pages/filters/filters-form.component';
import { OptionsListComponent } from './pages/options/options-list.component';
import { OptionsFormComponent } from './pages/options/options-form.component';
import { CustomerGroupsListComponent } from './pages/customer-groups/customer-groups-list.component';
import { CustomerGroupsFormComponent } from './pages/customer-groups/customer-groups-form.component';
import { LengthClassListComponent } from './pages/length-classes/length-classes-list.component';
import { LengthClassFormComponent } from './pages/length-classes/length-classes-form.component';
import { WeightClassListComponent } from './pages/weight-classes/weight-classes-list.component';
import { WeightClassFormComponent } from './pages/weight-classes/weight-classes-form.component';
import { TaxClassListComponent } from './pages/tax-classes/tax-classes-list.component';
import { TaxClassFormComponent } from './pages/tax-classes/tax-classes-form.component';
import { TaxRateListComponent } from './pages/tax-rates/tax-rates-list.component';
import { TaxRateFormComponent } from './pages/tax-rates/tax-rates-form.component';
import { GeoZoneListComponent } from './pages/geo-zones/geo-zones-list.component';
import { GeoZoneFormComponent } from './pages/geo-zones/geo-zones-form.component';
import { SellerGroupsListComponent } from './pages/seller-groups/seller-groups-list.component';
import { SellerGroupsFormComponent } from './pages/seller-groups/seller-groups-form.component';
import { SellerGroupGeneralComponent } from './pages/seller-groups/tabs/general/general.component';
import { SellerGroupComissionsFeesComponent } from './pages/seller-groups/tabs/comissions-fees/comissions-fees.component';
import { SellerGroupBadgesComponent } from './pages/seller-groups/tabs/badges/badges.component';
import { CountriesListComponent } from './pages/countries/countries-list.component';
import { CountriesFormComponent } from './pages/countries/countries-form.component';
import { ZonesListComponent } from './pages/zones/zones-list.component';
import { ZonesFormComponent } from './pages/zones/zones-form.component';

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
		CalendarModule,
		FlotModule,
		TinyMceModule.forRoot(tinymceDefaultSettings())
	],

	declarations: [
		FileSelectDirective,
		ImageSelectorComponent,

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
		EmhVoucherListComponent,
		EmhVoucherFormComponent,
		EmhBeautyBoxListComponent,
		EmhBeautyBoxFormComponent,
		ProductGeneralComponent,
		ProductDataComponent,
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
		ReturnReasonsListComponent,
		ReturnReasonsFormComponent,
		ReturnActionsListComponent,
		ReturnActionsFormComponent,
		ReturnStatusesListComponent,
		ReturnStatusesFormComponent,
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
		SlideshowListComponent,
		SlideshowFormComponent,
		PartnersListComponent,
		PartnersFormComponent,
		CollaborationComponent,
		ShippingSettingComponent,
		SubscriptionPlanListComponent,
		SubscriptionPlanFormComponent,
		PaymentsListComponent,
		PaymentsFormComponent,
		EMHTVComponent,
		OptionComponent,
		RecurringComponent,
		DiscountComponent,
		SpecialComponent,
		ImageComponent,
		RewardPointsComponent,
		CheckboxComponent,
		DateComponent,
		DateTimeComponent,
		DeliveryDateComponent,
		FileComponent,
		MiniStatisticsComponent,
		CalendarComponent,
		ChatComponent,
		StatisticsComponent,
		NotificationComponent,
		LatestMembersComponent,
		MorrisComponent,
		VectorComponent,
		MonthlyExpenseComponent,
		DailyVisitorsComponent,
		TopAdvertiseComponent,
		DailySalesComponent,
		MonthlyStatsComponent,
		SellComponent,
		ProspectiveLabelComponent,
		WeatherComponent,
		MaintenanceComponent,
		StoreLocationsListComponent,
		StoreLocationsFormComponent,
		LanguagesListComponent,
		LanguagesFormComponent,
		CurrenciesListComponent,
		CurrenciesFormComponent,
		StockStatusesListComponent,
		StockStatusesFormComponent,
		OrderStatusesListComponent,
		OrderStatusesFormComponent,
		SettingListComponent,
		SettingFormComponent,
		SocialLinksComponent,
		BadgeComponent,
		TaxListComponent,
		TaxFormComponent,
		RestorationComponent,
		DebugErrorComponent,
		StatisticsReportComponent,
		ReportSummaryComponent,
		RevenueOverTimeComponent,
		StatisticRightSidebarComponent,
		SalesTeamPerformanceComponent,
		RevenueByQuarterComponent,
		ShippingReportComponent,
		EnglishListComponent,
		FrenchListComponent,
		GermanListComponent,
		SpanishListComponent,
		CategoryGeneralComponent,
		CategoryDataComponent,
		CategoryFeesComponent,
		VendorFeesComponent,
		VendorGeneralComponent,
		BadgesComponent,
		UserSettingsComponent,
		FiltersListComponent,
		FiltersFormComponent,
		OptionsListComponent,
		OptionsFormComponent,
		CustomerGroupsListComponent,
		CustomerGroupsFormComponent,
		LengthClassListComponent,
		LengthClassFormComponent,
		WeightClassListComponent,
		WeightClassFormComponent,
		TaxClassListComponent,
		TaxClassFormComponent,
		TaxRateListComponent,
		TaxRateFormComponent,
		GeoZoneListComponent,
		GeoZoneFormComponent,
		SellerGroupsListComponent,
		SellerGroupsFormComponent,
		SellerGroupBadgesComponent,
		SellerGroupGeneralComponent,
		SellerGroupComissionsFeesComponent,
		CountriesListComponent,
		CountriesFormComponent,
		ZonesListComponent,
		ZonesFormComponent,
	]
})
export class AdminModule { }

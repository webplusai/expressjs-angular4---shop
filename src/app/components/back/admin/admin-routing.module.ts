import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from  './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
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
import { SuperAdministratorListComponent } from './pages/super-administrator/super-administrator-list.component';
import { SuperAdministratorFormComponent } from './pages/super-administrator/super-administrator-form.component';
import { ModeratorsListComponent } from './pages/moderators/moderators-list.component';
import { ModeratorsFormComponent } from './pages/moderators/moderators-form.component';
import { StaffSettingListComponent } from './pages/staff-setting/staff-setting-list.component';
import { StaffSettingFormComponent } from './pages/staff-setting/staff-setting-form.component';
import { AffiliationListComponent } from './pages/affiliation/affiliation-list.component';
import { AffiliationFormComponent } from './pages/affiliation/affiliation-form.component';
import { AdvertsListComponent } from './pages/adverts/adverts-list.component';
import { AdvertsFormComponent } from './pages/adverts/adverts-form.component';
import { MessageComponent } from './pages/message/message.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { MediaComponent } from './pages/media/media.component';
import { NewsLetterComponent } from './pages/newsletter/newsletter.component';
import { SlideshowListComponent } from './pages/slideshow/slideshow-list.component';
import { SlideshowFormComponent } from './pages/slideshow/slideshow-form.component';
import { PartnersListComponent } from './pages/partners/partners-list.component';
import { PartnersFormComponent } from './pages/partners/partners-form.component';
import { CollaborationComponent } from './pages/collaboration/collaboration.component';
import { ShippingSettingComponent } from './pages/shipping-setting/shipping-setting.component';
import { ShippingReportComponent } from './pages/shipping-report/shipping-report.component';
import { SubscriptionPlanListComponent } from './pages/subscription-plan/subscription-plan-list.component';
import { SubscriptionPlanFormComponent } from './pages/subscription-plan/subscription-plan-form.component';
import { PaymentsListComponent } from './pages/payments/payments-list.component';
import { PaymentsFormComponent } from './pages/payments/payments-form.component';
import { EMHTVComponent } from './pages/emhtv/emhtv.component';
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
import { EnglishListComponent } from './pages/language-editor/english/english-list.component';
import { FrenchListComponent } from './pages/language-editor/french/french-list.component';
import { GermanListComponent } from './pages/language-editor/german/german-list.component';
import { SpanishListComponent } from './pages/language-editor/spanish/spanish-list.component';
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
import { CountriesListComponent } from './pages/countries/countries-list.component';
import { CountriesFormComponent } from './pages/countries/countries-form.component';
import { ZonesListComponent } from './pages/zones/zones-list.component';
import { ZonesFormComponent } from './pages/zones/zones-form.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		component: AdminComponent,
		data: {
			title: 'Dashboard',
			breadcrumb: [ ['Home', 'dashboard'], ['Dashboard', 'dashboard'] ]
		},
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent,
			},
			{
				path: 'buyers',
				component: BuyersListComponent,
			},
			{
				path: 'buyers/create',
				component: BuyersFormComponent,
			},
			{
				path: 'buyers/edit/:id',
				component: BuyersFormComponent
			},
			{
				path: 'vendors',
				component: VendorsListComponent,
			},
			{
				path: 'vendors/create',
				component: VendorsFormComponent,
			},
			{
				path: 'vendors/edit/:id',
				component: VendorsFormComponent
			},
			{
				path: 'categories',
				component: CategoriesListComponent,
			},
			{
				path: 'categories/create',
				component: CategoriesFormComponent,
			},
			{
				path: 'products',
				component: ProductsListComponent,
			},
			{
				path: 'products/create',
				component: ProductsFormComponent,
			},
			{
				path: 'emh-voucher',
				component: EmhVoucherListComponent,
			},
			{
				path: 'emh-voucher/create',
				component: EmhVoucherFormComponent,
			},
			{
				path: 'emh-beauty-box',
				component: EmhBeautyBoxListComponent,
			},
			{
				path: 'emh-beauty-box/create',
				component: EmhBeautyBoxFormComponent,
			},
			{
				path: 'products/create',
				component: ProductsFormComponent,
			},
			{
				path: 'products',
				component: ProductsListComponent,
			},
			{
				path: 'products/create',
				component: ProductsFormComponent,
			},
			{
				path: 'bloggers',
				component: BloggersListComponent,
			},
			{
				path: 'bloggers/create',
				component: BloggersFormComponent,
			},
			{
				path: 'news',
				component: NewsListComponent,
			},
			{
				path: 'news/create',
				component: NewsFormComponent,
			},
			{
				path: 'transactions',
				component: TransactionsListComponent,
			},
			{
				path: 'transactions/create',
				component: TransactionsFormComponent,
			},
			{
				path: 'recurring-orders',
				component: RecurringOrdersListComponent,
			},
			{
				path: 'recurring-orders/create',
				component: RecurringOrdersFormComponent,
			},
			{
				path: 'returns',
				component: ReturnsListComponent,
			},
			{
				path: 'returns/create',
				component: ReturnsFormComponent,
			},
			{
				path: 'return-actions',
				component: ReturnActionsListComponent,
			},
			{
				path: 'return-actions/create',
				component: ReturnActionsFormComponent,
			},
			{
				path: 'return-actions/edit/:id',
				component: ReturnActionsFormComponent,
			},
			{
				path: 'return-statuses',
				component: ReturnStatusesListComponent,
			},
			{
				path: 'return-statuses/create',
				component: ReturnStatusesFormComponent,
			},
			{
				path: 'return-statuses/edit/:id',
				component: ReturnStatusesFormComponent,
			},
			{
				path: 'return-reasons',
				component: ReturnReasonsListComponent,
			},
			{
				path: 'return-reasons/create',
				component: ReturnReasonsFormComponent,
			},
			{
				path: 'return-reasons/edit/:id',
				component: ReturnReasonsFormComponent,
			},
			{
				path: 'orders',
				component: OrdersListComponent,
			},
			{
				path: 'orders/create',
				component: OrdersFormComponent,
			},
			{
				path: 'super-administrator',
				component: SuperAdministratorListComponent,
			},
			{
				path: 'super-administrator/create',
				component: SuperAdministratorFormComponent,
			},
			{
				path: 'moderators',
				component: ModeratorsListComponent,
			},
			{
				path: 'moderators/create',
				component: ModeratorsFormComponent,
			},
			{
				path: 'staff-setting',
				component: StaffSettingListComponent,
			},
			{
				path: 'staff-setting/create',
				component: StaffSettingFormComponent,
			}, 
			{
				path: 'affiliation',
				component: AffiliationListComponent,
			},
			{
				path: 'affiliation/create',
				component: AffiliationFormComponent,
			},
			{
				path: 'adverts',
				component: AdvertsListComponent,
			},
			{
				path: 'adverts/create',
				component: AdvertsFormComponent,
			},
			{
				path: 'message',
				component: MessageComponent,
			},
			{
				path: 'comments',
				component: CommentsComponent,
			},
			{
				path: 'media',
				component: MediaComponent,
			},
			{
				path: 'newsletter',
				component: NewsLetterComponent,
			},
			{
				path: 'slideshow',
				component: SlideshowListComponent,
			},
			{
				path: 'slideshow/:id',
				component: SlideshowFormComponent
			},
			{
				path: 'partners',
				component: PartnersListComponent,
			},
			{
				path: 'partners/:id',
				component: PartnersFormComponent
			},
			{
				path: 'collaboration',
				component: CollaborationComponent,
			},
			{
				path: 'shipping-setting',
				component: ShippingSettingComponent,
			},
			{
				path: 'shipping-report',
				component: ShippingReportComponent
			},
			{
				path: 'subscription-plan',
				component: SubscriptionPlanListComponent,
			},
			{
				path: 'subscription-plan/create',
				component: SubscriptionPlanFormComponent,
			},
			{
				path: 'payments',
				component: PaymentsListComponent,
			},
			{
				path: 'payments/create',
				component: PaymentsFormComponent,
			},
			{
				path: 'payments/edit/:id',
				component: PaymentsFormComponent
			},
			{
				path: 'emh-tv',
				component: EMHTVComponent,
			},
			{
				path: 'landing-page',
				component: MaintenanceComponent,
			},
			{
				path: 'store-locations',
				component: StoreLocationsListComponent
			},
			{
				path: 'store-locations/create',
				component: StoreLocationsFormComponent
			},
			{
				path: 'store-locations/edit/:id',
				component: StoreLocationsFormComponent
			},
			{
				path: 'languages',
				component: LanguagesListComponent
			},
			{
				path: 'languages/create',
				component: LanguagesFormComponent
			},
			{
				path: 'languages/edit/:id',
				component: LanguagesFormComponent
			},
			{
				path: 'currencies',
				component: CurrenciesListComponent
			},
			{
				path: 'currencies/create',
				component: CurrenciesFormComponent
			},
			{
				path: 'currencies/edit/:id',
				component: CurrenciesFormComponent
			},
			{
				path: 'stock-statuses',
				component: StockStatusesListComponent
			},
			{
				path: 'stock-statuses/create',
				component: StockStatusesFormComponent
			},
			{
				path: 'stock-statuses/edit/:id',
				component: StockStatusesFormComponent
			},
			{
				path: 'order-statuses',
				component: OrderStatusesListComponent
			},
			{
				path: 'order-statuses/create',
				component: OrderStatusesFormComponent
			},
			{
				path: 'order-statuses/edit/:id',
				component: OrderStatusesFormComponent
			},
			{
				path: 'setting',
				component: SettingListComponent
			},
			{
				path: 'setting/create',
				component: SettingFormComponent
			},
			{
				path: 'social-links',
				component: SocialLinksComponent
			}, 
			{
				path: 'badge',
				component: BadgeComponent
			},
			{
				path: 'tax',
				component: TaxListComponent
			},
			{
				path: 'tax/create',
				component: TaxFormComponent
			},
			{
				path: 'restoration',
				component: RestorationComponent
			},
			{
				path: 'debug-error',
				component: DebugErrorComponent
			},
			{
				path: 'statistics',
				component: StatisticsReportComponent
			},
			{
				path: 'language-editor/english',
				component: EnglishListComponent
			},
			{
				path: 'language-editor/french',
				component: FrenchListComponent
			},
			{
				path: 'language-editor/german',
				component: GermanListComponent
			},
			{
				path: 'language-editor/spanish',
				component: SpanishListComponent
			},
			{
				path: 'filters',
				component: FiltersListComponent
			},
			{
				path: 'filters/create',
				component: FiltersFormComponent
			},
			{
				path: 'filters/edit/:id',
				component: FiltersFormComponent
			},
			{
				path: 'options',
				component: OptionsListComponent
			},
			{
				path: 'options/create',
				component: OptionsFormComponent
			},
			{
				path: 'customer-groups',
				component: CustomerGroupsListComponent
			},
			{
				path: 'customer-groups/create',
				component: CustomerGroupsFormComponent
			},
			{
				path: 'customer-groups/edit/:id',
				component: CustomerGroupsFormComponent
			},
			{
				path: 'length-classes',
				component: LengthClassListComponent
			},
			{
				path: 'length-classes/create',
				component: LengthClassFormComponent
			},
			{
				path: 'length-classes/edit/:id',
				component: LengthClassFormComponent
			},
			{
				path: 'weight-classes',
				component: WeightClassListComponent
			},
			{
				path: 'weight-classes/create',
				component: WeightClassFormComponent
			},
			{
				path: 'weight-classes/edit/:id',
				component: WeightClassFormComponent
			},
			{
				path: 'tax-classes',
				component: TaxClassListComponent
			},
			{
				path: 'tax-classes/create',
				component: TaxClassFormComponent
			},
			{
				path: 'tax-classes/edit/:id',
				component: TaxClassFormComponent
			},
			{
				path: 'tax-rates',
				component: TaxRateListComponent
			},
			{
				path: 'tax-rates/create',
				component: TaxRateFormComponent
			},
			{
				path: 'tax-rates/edit/:id',
				component: TaxRateFormComponent
			},
			{
				path: 'geo-zones',
				component: GeoZoneListComponent
			},
			{
				path: 'geo-zones/create',
				component: GeoZoneFormComponent
			},
			{
				path: 'geo-zones/edit/:id',
				component: GeoZoneFormComponent
			},
			{
				path: 'seller-groups',
				component: SellerGroupsListComponent
			},
			{
				path: 'seller-groups/create',
				component: SellerGroupsFormComponent
			},
			{
				path: 'seller-groups/edit/:id',
				component: SellerGroupsFormComponent
			},
			{
				path: 'countries',
				component: CountriesListComponent
			},
			{
				path: 'countries/create',
				component: CountriesFormComponent
			},
			{
				path: 'countries/edit/:id',
				component: CountriesFormComponent
			},
			{
				path: 'zones',
				component: ZonesListComponent
			},
			{
				path: 'zones/create',
				component: ZonesFormComponent,
			},
			{
				path: 'zones/edit/:id',
				component: ZonesFormComponent
			}
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class AdminRoutingModule {
	constructor(private router: Router) {
	}
}
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { BuyerComponent } from './buyer.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';
import { PasswordComponent } from './pages/password/password.component';
import { AddressBookListComponent } from './pages/address-book/address-book-list.component';
import { AddressBookFormComponent } from './pages/address-book/address-book-form.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { RewardPointsComponent } from './pages/reward-points/reward-points.component';
import { ReturnsComponent } from './pages/returns/returns.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { RecurringPaymentsComponent } from './pages/recurring-payments/recurring-payments.component';

const routes: Routes = [
	{
		path: '',
		component: BuyerComponent,
		children: [
			{
				path: 'my-account',
				component: MyAccountComponent
			},
			{
				path: 'edit-account',
				component: EditAccountComponent
			},
			{
				path: 'password',
				component: PasswordComponent
			},
			{
				path: 'address-book',
				component: AddressBookListComponent
			},
			{
				path: 'address-book/create',
				component: AddressBookFormComponent
			},
			{
				path: 'wish-list',
				component: WishListComponent
			},
			{
				path: 'order-history',
				component: OrderHistoryComponent
			},
			{
				path: 'downloads',
				component: DownloadsComponent
			},
			{
				path: 'reward-points',
				component: RewardPointsComponent
			},
			{
				path: 'returns',
				component: ReturnsComponent
			},
			{
				path: 'transactions',
				component: TransactionsComponent
			},
			{
				path: 'newsletter',
				component: NewsletterComponent
			},
			{
				path: 'recurring-payments',
				component: RecurringPaymentsComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class BuyerRoutingModule { }
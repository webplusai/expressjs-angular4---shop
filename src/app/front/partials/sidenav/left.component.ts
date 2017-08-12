import { Component } from '@angular/core';

@Component({
	selector: 'left-sidenav',
	templateUrl: './left.component.html'
})
export class LeftSidenavComponent { 
	menuItems = [ 'Accessory', 'Jewllery', 'Shoes', 'Cosmetic', 'Handmade', 'Haute Couture', 'Horology', 'Lingerle', 'Wedding', 'Perfumery', 'Ready To Wear', 'Bag', 'Wax Clothe', 'All Categories' ];
}
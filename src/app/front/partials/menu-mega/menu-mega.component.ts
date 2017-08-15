import { Component } from '@angular/core';

@Component({
	selector: 'menu-mega',
	templateUrl: './menu-mega.component.html',
	styleUrls: [ './menu-mega.component.scss' ]
})
export class MenuMegaComponent { 
	menuItems = [ 'Accessory', 'Jewllery', 'Shoes', 'Cosmetic', 'Handmade', 'Haute Couture', 'Horology', 'Lingerle', 'Wedding', 'Perfumery', 'Ready To Wear', 'Bag', 'Wax Clothe', 'All Categories' ];
}
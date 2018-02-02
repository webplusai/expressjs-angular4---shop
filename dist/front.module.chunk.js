webpackJsonp(["front.module"],{

/***/ "../../../../../src/app/components/front/front-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__front_component__ = __webpack_require__("../../../../../src/app/components/front/front.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__ = __webpack_require__("../../../../../src/app/components/front/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_category_category_component__ = __webpack_require__("../../../../../src/app/components/front/pages/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_private_sale_private_sale_component__ = __webpack_require__("../../../../../src/app/components/front/pages/private-sale/private-sale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_store_store_component__ = __webpack_require__("../../../../../src/app/components/front/pages/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_product_product_component__ = __webpack_require__("../../../../../src/app/components/front/pages/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login_component__ = __webpack_require__("../../../../../src/app/components/front/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/front/pages/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_wrapper_component__ = __webpack_require__("../../../../../src/app/components/front/login-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_maintenance_maintenance_component__ = __webpack_require__("../../../../../src/app/components/front/pages/maintenance/maintenance.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__front_component__["a" /* FrontComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__["a" /* HomeComponent */],
                outlet: 'front'
            },
        ]
    },
    {
        path: 'category',
        component: __WEBPACK_IMPORTED_MODULE_2__front_component__["a" /* FrontComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_category_category_component__["a" /* CategoryComponent */],
                outlet: 'front'
            }
        ]
    },
    {
        path: 'private-sale',
        component: __WEBPACK_IMPORTED_MODULE_2__front_component__["a" /* FrontComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_private_sale_private_sale_component__["a" /* PrivateSaleComponent */],
                outlet: 'front'
            }
        ]
    },
    {
        path: 'store',
        component: __WEBPACK_IMPORTED_MODULE_2__front_component__["a" /* FrontComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_store_store_component__["a" /* StoreComponent */],
                outlet: 'front'
            }
        ]
    },
    {
        path: 'product',
        component: __WEBPACK_IMPORTED_MODULE_2__front_component__["a" /* FrontComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_7__pages_product_product_component__["a" /* ProductComponent */],
                outlet: 'front'
            }
        ]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_10__login_wrapper_component__["a" /* LoginWrapperComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login_component__["a" /* LoginComponent */],
                outlet: 'login'
            }
        ]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_10__login_wrapper_component__["a" /* LoginWrapperComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup_component__["a" /* SignupComponent */],
                outlet: 'login'
            }
        ]
    },
    {
        path: 'maintenance',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_maintenance_maintenance_component__["a" /* MaintenanceComponent */]
    }
];
var FrontRoutingModule = (function () {
    function FrontRoutingModule() {
    }
    return FrontRoutingModule;
}());
FrontRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], FrontRoutingModule);

//# sourceMappingURL=front-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/front.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\r\n\t<md-sidenav #leftsidenav class=\"color-primary\">\r\n\t\t<app-left-sidenav> </app-left-sidenav>\r\n\t</md-sidenav>\r\n\t<md-sidenav #rightsidenav align=\"end\" class=\"color-primary\">\r\n\t\t<app-right-sidenav> </app-right-sidenav>\r\n\t</md-sidenav>\r\n\t<button md-icon-button id=\"leftSideNav\" fxHide (click)=\"leftsidenav.open()\"><md-icon md-font-set=\"material-icons\">menu</md-icon></button>\r\n\t<button md-icon-button id=\"rightSideNav\" fxHide (click)=\"rightsidenav.open()\"><md-icon md-font-set=\"material-icons\">menu</md-icon></button>\r\n\t<app-header></app-header>\r\n\t<router-outlet name=\"front\"> </router-outlet>\r\n\t<app-footer></app-footer>\r\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/components/front/front.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FrontComponent = (function () {
    function FrontComponent() {
    }
    return FrontComponent;
}());
FrontComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/components/front/front.component.html"),
    })
], FrontComponent);

//# sourceMappingURL=front.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/front.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontModule", function() { return FrontModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_slick__ = __webpack_require__("../../../../ngx-slick/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__front_routing_module__ = __webpack_require__("../../../../../src/app/components/front/front-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__ = __webpack_require__("../../../../../src/app/components/front/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__front_component__ = __webpack_require__("../../../../../src/app/components/front/front.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__partials_header_header_component__ = __webpack_require__("../../../../../src/app/components/front/partials/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__partials_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/front/partials/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__partials_sidenav_left_left_component__ = __webpack_require__("../../../../../src/app/components/front/partials/sidenav/left/left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__partials_sidenav_right_right_component__ = __webpack_require__("../../../../../src/app/components/front/partials/sidenav/right/right.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__partials_slideshow_slideshow_component__ = __webpack_require__("../../../../../src/app/components/front/partials/slideshow/slideshow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__partials_menu_mega_menu_mega_component__ = __webpack_require__("../../../../../src/app/components/front/partials/menu-mega/menu-mega.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__partials_store_filter_store_filter_component__ = __webpack_require__("../../../../../src/app/components/front/partials/store-filter/store-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__partials_store_grid_store_grid_component__ = __webpack_require__("../../../../../src/app/components/front/partials/store-grid/store-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__partials_collaborator_panel_collaborator_panel_component__ = __webpack_require__("../../../../../src/app/components/front/partials/collaborator-panel/collaborator-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__partials_action_panel_action_panel_component__ = __webpack_require__("../../../../../src/app/components/front/partials/action-panel/action-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__partials_partner_panel_partner_panel_component__ = __webpack_require__("../../../../../src/app/components/front/partials/partner-panel/partner-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_category_category_component__ = __webpack_require__("../../../../../src/app/components/front/pages/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__partials_product_filter_product_filter_component__ = __webpack_require__("../../../../../src/app/components/front/partials/product-filter/product-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__partials_product_filter_sidebar_product_filter_sidebar_component__ = __webpack_require__("../../../../../src/app/components/front/partials/product-filter-sidebar/product-filter-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__partials_product_grid_product_grid_component__ = __webpack_require__("../../../../../src/app/components/front/partials/product-grid/product-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_private_sale_private_sale_component__ = __webpack_require__("../../../../../src/app/components/front/pages/private-sale/private-sale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_store_store_component__ = __webpack_require__("../../../../../src/app/components/front/pages/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__partials_store_detail_store_detail_component__ = __webpack_require__("../../../../../src/app/components/front/partials/store-detail/store-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_product_product_component__ = __webpack_require__("../../../../../src/app/components/front/pages/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__partials_product_extra_product_extra_component__ = __webpack_require__("../../../../../src/app/components/front/partials/product-extra/product-extra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__partials_store_summary_store_summary_component__ = __webpack_require__("../../../../../src/app/components/front/partials/store-summary/store-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__partials_product_card_product_card_component__ = __webpack_require__("../../../../../src/app/components/front/partials/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_login_login_component__ = __webpack_require__("../../../../../src/app/components/front/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__login_wrapper_component__ = __webpack_require__("../../../../../src/app/components/front/login-wrapper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/front/pages/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_maintenance_maintenance_component__ = __webpack_require__("../../../../../src/app/components/front/pages/maintenance/maintenance.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var FrontModule = (function () {
    function FrontModule() {
    }
    return FrontModule;
}());
FrontModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__front_routing_module__["a" /* FrontRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_slick__["a" /* SlickModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__front_component__["a" /* FrontComponent */],
            __WEBPACK_IMPORTED_MODULE_9__partials_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__partials_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__partials_sidenav_left_left_component__["a" /* LeftSidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_12__partials_sidenav_right_right_component__["a" /* RightSidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_13__partials_slideshow_slideshow_component__["a" /* SlideshowComponent */],
            __WEBPACK_IMPORTED_MODULE_14__partials_menu_mega_menu_mega_component__["a" /* MenuMegaComponent */],
            __WEBPACK_IMPORTED_MODULE_15__partials_store_filter_store_filter_component__["a" /* StoreFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__partials_store_grid_store_grid_component__["a" /* StoreGridComponent */],
            __WEBPACK_IMPORTED_MODULE_17__partials_collaborator_panel_collaborator_panel_component__["a" /* CollaboratorPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_18__partials_action_panel_action_panel_component__["a" /* ActionPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_19__partials_partner_panel_partner_panel_component__["a" /* PartnerPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_21__partials_product_filter_product_filter_component__["a" /* ProductFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_22__partials_product_filter_sidebar_product_filter_sidebar_component__["a" /* ProductFilterSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_23__partials_product_grid_product_grid_component__["a" /* ProductGridComponent */],
            __WEBPACK_IMPORTED_MODULE_24__pages_private_sale_private_sale_component__["a" /* PrivateSaleComponent */],
            __WEBPACK_IMPORTED_MODULE_25__pages_store_store_component__["a" /* StoreComponent */],
            __WEBPACK_IMPORTED_MODULE_26__partials_store_detail_store_detail_component__["a" /* StoreDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pages_product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_28__partials_product_extra_product_extra_component__["a" /* ProductExtraComponent */],
            __WEBPACK_IMPORTED_MODULE_29__partials_store_summary_store_summary_component__["a" /* StoreSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_30__partials_product_card_product_card_component__["a" /* ProductCardComponent */],
            __WEBPACK_IMPORTED_MODULE_31__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_32__login_wrapper_component__["a" /* LoginWrapperComponent */],
            __WEBPACK_IMPORTED_MODULE_33__pages_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_34__pages_maintenance_maintenance_component__["a" /* MaintenanceComponent */]
        ]
    })
], FrontModule);

//# sourceMappingURL=front.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/login-wrapper.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\">\r\n\t<div fxFlex.lt-md=\"0\" class=\"login-intro\">\r\n\t\t<img class=\"logo\" src=\"assets/img/logo.jpg\">\r\n\t\t<h2 [ngStyle]=\"{'color': '#000', 'font-size': '20px'}\">\r\n\t\t\tWelcome to the Manage System <br>\r\n\t\t\t<small [ngStyle]=\"{'color': '#000', 'font-size': '75%'}\">\r\n\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nism erat, vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\r\n\t\t\t</small>\r\n\t\t</h2>\r\n\t</div>\r\n\t<div class=\"form-login\" fxFlex.lt-md=\"100\">\r\n\t\t<router-outlet name=\"login\"> </router-outlet>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/login-wrapper.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-login {\n  width: 400px;\n  max-width: 400px;\n  min-width: 400px;\n  height: 100%;\n  background: #fff;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n@media (min-width: 960px) {\n  .login-intro {\n    padding: 30px 10%; } }\n\n.login-wrapper {\n  background: url(/assets/img/bg-login.jpg) no-repeat center center;\n  background-size: cover;\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/login-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginWrapperComponent = (function () {
    function LoginWrapperComponent() {
    }
    return LoginWrapperComponent;
}());
LoginWrapperComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-wrapper',
        template: __webpack_require__("../../../../../src/app/components/front/login-wrapper.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/login-wrapper.component.scss")]
    })
], LoginWrapperComponent);

//# sourceMappingURL=login-wrapper.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/pages/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<app-product-filter> </app-product-filter>\r\n<div fxLayout=\"row\">\r\n\t<app-product-filter-sidebar> </app-product-filter-sidebar>\r\n\t<app-product-grid> </app-product-grid>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/pages/category/category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/pages/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryComponent = (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-category',
        template: __webpack_require__("../../../../../src/app/components/front/pages/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/pages/category/category.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CategoryComponent);

//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n\t<div fxLayout=\"row\">\r\n\t\t<app-menu-mega> </app-menu-mega>\r\n\t\t<app-slideshow> </app-slideshow>\r\n\t</div>\r\n\t<div fxLayout=\"column\" style=\"padding: 10px;\">\r\n\t\t<app-store-filter> </app-store-filter>\r\n\t\t<app-store-grid [ngStyle]=\"{'padding': '10px', 'margin-top': '10px'}\"> </app-store-grid>\r\n\t</div>\r\n\t<app-collaborator-panel> </app-collaborator-panel>\r\n\t<app-action-panel> </app-action-panel>\r\n\t<app-partner-panel> </app-partner-panel>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/front/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/pages/home/home.component.scss")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"start\" [ngStyle]=\"{'padding': '15% 10%'}\">\n\t<img fxHide.gt-sm src=\"assets/img/logo.jpg\" [ngStyle]=\"{'width': '40%'}\">\n\n\t<h2 [ngStyle]=\"{'font-size': '20px', 'color': '#000'}\">\n\t\tLogin to your account <br>\n\t\t<small [ngStyle]=\"{'font-size': '75%', 'color': '#000'}\">\n\t\t\tSed mollis velit facilisis facilisis viverra\n\t\t</small>\n\t</h2>\n\n\t<form #signinForm=\"ngForm\" (submit)=\"signin(signinForm)\" [formGroup]=\"form\">\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"input-wrapper\">\n\t\t\t<md-icon [ngStyle]=\"{'margin-right': '15px'}\">email</md-icon>\n\t\t\t<md-input-container [ngStyle]=\"{'width': '100%'}\">\n\t\t\t\t<input mdInput placeholder=\"Email *\" [formControl]=\"emailInput\">\n\t\t\t\t<md-error *ngIf=\"emailInput.hasError('required')\">\n\t\t\t\t\tYour email must be between 10 and 100 characters long and look like an e-mail address\n\t\t\t\t</md-error>\n\t\t\t\t<md-error *ngIf=\"emailInput.hasError('email')\">\n\t\t\t\t\tYour email must be between 10 and 100 characters long and look like an e-mail address\n\t\t\t\t</md-error>\n\t\t\t</md-input-container>\n\t\t</div>\n\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\"  class=\"input-wrapper\">\n\t\t\t<md-icon [ngStyle]=\"{'margin-right': '15px'}\">vpn_key</md-icon>\n\t\t\t<md-input-container [ngStyle]=\"{'width': '100%'}\">\n\t\t\t\t<input mdInput placeholder=\"Password *\" [formControl]=\"passwordInput\">\n\t\t\t\t<md-error *ngIf=\"passwordInput.hasError('required')\">\n\t\t\t\t\tThis is required\n\t\t\t\t</md-error>\n\t\t\t</md-input-container>\n\t\t</div>\n\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" [ngStyle]=\"{'margin-top': '30px', 'justify-content': 'space-between'}\">\n\t\t\t<md-checkbox [ngStyle]=\"{'margin-top': '5px'}\"> Remember Me </md-checkbox>\n\t\t\t<button type=\"button\" md-button> FORGOT PASSWORD? </button>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"full-width btn-login\" md-button [disabled]=\"signinForm.invalid || signinForm.pristine\"> LOG IN </button>\n\t</form>\n\t<div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngStyle]=\"{'padding': '20px', 'margin-top': '10px'}\">\n\t\t<span> -- OR -- </span>\n\t</div>\n\t<button md-raised-button [ngStyle]=\"{'background': '#d73d32'}\"> Login with Google </button>\n\t<button md-raised-button [ngStyle]=\"{'background': '#3f5c9a'}\"> Login with Facebook </button>\n\t<div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngStyle]=\"{'justify-content': 'space-between', 'margin-top': '10px'}\">\n\t\t<span [ngStyle]=\"{'font-size': '12px'}\"> Don't have an account? </span>\n\t\t<a [routerLink]=\"['/signup']\" [ngStyle]=\"{'text-decoration': 'none', 'color': 'rgb(0, 150, 136)'}\"> CREATE AN ACCOUNT </a>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-login {\n  background: #00897b; }\n\nbutton[type=\"submit\"] {\n  color: #fff;\n  font-weight: 700;\n  margin-top: 20px; }\n\nform.ng-invalid .btn-login {\n  background: rgba(0, 0, 0, 0.12); }\n\n.input-wrapper {\n  margin-top: 20px; }\n\n.mat-raised-button {\n  color: #fff;\n  margin: 6px 0px;\n  min-height: 36px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var LoginComponent = (function () {
    function LoginComponent() {
        this.emailInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(EMAIL_REGEX)
        ]);
        this.passwordInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            emailInput: this.emailInput,
            passwordInput: this.passwordInput
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signin = function (signinForm) {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/front/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/pages/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/pages/maintenance/maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-size wrapper\" fxLayout=\"column\">\n\t<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t<img class=\"logo\" src=\"assets/img/logo.jpg\">\n\t\t<div class=\"social-icons\">\n\t\t\t<button md-icon-button [ngStyle]=\"{'background': '#3b5998'}\"> <i class=\"fa fa-facebook\"> </i> </button>\n\t\t\t<button md-icon-button [ngStyle]=\"{'background': '#55acee'}\"> <i class=\"fa fa-twitter\"> </i> </button>\n\t\t\t<button md-icon-button [ngStyle]=\"{'background': '#dd4b39'}\"> <i class=\"fa fa-google-plus\"> </i> </button>\n\t\t\t<button md-icon-button [ngStyle]=\"{'background': '#cb2027'}\"> <i class=\"fa fa-pinterest-p\"> </i> </button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"content-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\t\t<button md-icon-button class=\"play-button\" [ngStyle]=\"{'background': '#fff'}\">\n\t\t\t<md-icon class=\"play-icon\">play_arrow</md-icon>\n\t\t</button>\n\t\t<br>\n\t\t<div fxLayout=\"row\" class=\"contact-panel\">\n\t\t\t<input class=\"form-control\" placeholder=\"Your Name\">\n\t\t\t<input class=\"form-control\" placeholder=\"Your Email\">\n\t\t\t<button md-button class=\"button-sell\"> \n\t\t\t\t<span> Sell With Us </span>\n\t\t\t</button>\n\t\t</div>\n\t\t<div fxLayout=\"row\" class=\"countdown-timer\">\n\t\t\t<div class=\"countdown-widget\">\n\t\t\t\t<span class=\"countdown-number\"> {{ days }} </span>\n\t\t\t\t<span class=\"countdown-label\"> Days </span>\n\t\t\t</div>\n\t\t\t<div class=\"countdown-widget\">\n\t\t\t\t<span class=\"countdown-number\"> {{ hours }} </span>\n\t\t\t\t<span class=\"countdown-label\"> Hours </span>\n\t\t\t</div>\n\t\t\t<div class=\"countdown-widget\">\n\t\t\t\t<span class=\"countdown-number\"> {{ minutes }} </span>\n\t\t\t\t<span class=\"countdown-label\"> Minutes </span>\n\t\t\t</div>\n\t\t\t<div class=\"countdown-widget\">\n\t\t\t\t<span class=\"countdown-number\"> {{ seconds }} </span>\n\t\t\t\t<span class=\"countdown-label\"> Seconds </span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/pages/maintenance/maintenance.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-sell {\n  background: #02f8cf;\n  min-width: initial;\n  color: #fff; }\n\n.contact-panel > * {\n  margin: 0px 10px;\n  height: 45px; }\n\n.content-wrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.countdown-label {\n  font-size: 20px; }\n\n.countdown-number {\n  font-size: 60px;\n  height: 60px;\n  line-height: 60px; }\n\n.countdown-timer {\n  margin-top: 20px; }\n\n.countdown-widget {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  border-radius: 5px;\n  width: 120px;\n  padding: 10px;\n  margin: 0px 10px; }\n\n.header {\n  padding: 20px 50px;\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n\n.logo {\n  height: 80px; }\n\n.play-button {\n  background: #fff;\n  width: 70px;\n  height: 70px; }\n\n.play-icon {\n  font-size: 50px;\n  line-height: 50px !important;\n  width: 50px;\n  height: 50px; }\n\n.social-icons {\n  color: #fff; }\n\n.wrapper {\n  background: linear-gradient(rgba(0, 255, 255, 0.4), rgba(0, 255, 255, 0.4)), url(" + __webpack_require__("../../../../../src/assets/img/maintenance_back.png") + ") no-repeat center center;\n  background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/pages/maintenance/maintenance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaintenanceComponent = (function () {
    function MaintenanceComponent() {
        this.days = 10;
        this.hours = 10;
        this.minutes = 50;
        this.seconds = 40;
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(0, 1000).subscribe(function () {
            _this.seconds--;
            if (_this.seconds < 0) {
                _this.seconds = 59;
                _this.minutes--;
            }
            if (_this.minutes < 0) {
                _this.minutes = 59;
                _this.hours--;
            }
            if (_this.hours < 0) {
                _this.hours = 23;
                _this.days--;
            }
        });
    };
    return MaintenanceComponent;
}());
MaintenanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-maintenance',
        template: __webpack_require__("../../../../../src/app/components/front/pages/maintenance/maintenance.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/pages/maintenance/maintenance.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MaintenanceComponent);

//# sourceMappingURL=maintenance.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/pages/private-sale/private-sale.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 [ngStyle]=\"{'text-align': 'center', 'margin-top': '40px'}\"> \n\t<u> WATCHES SHOP </u> \n</h2>\n<div [ngStyle]=\"{'padding': '50px'}\">\n\t<md-grid-list (window:resize)=\"onResize()\" cols=\"{{ cols }}\" gutterSize=\"50\">\n\t\t<md-grid-tile *ngFor=\"let shop of shopList\">\n\t\t\t<md-card class=\"full-size\">\n\t\t\t\t<md-card-content>\n\t\t\t\t\t<img src=\"{{ shop.image }}\">\n\t\t\t\t</md-card-content>\n\t\t\t\t<md-card-footer>\n\t\t\t\t\t{{ shop.name }}\n\t\t\t\t</md-card-footer>\n\t\t\t</md-card>\n\t\t</md-grid-tile>\n\t</md-grid-list>\n\n\t<div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n\t\t<button md-button class=\"more-button\"> More Stores </button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/pages/private-sale/private-sale.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  padding: 0px;\n  width: 98%;\n  height: 98%;\n  box-shadow: 0px 0px 10px #aaa !important; }\n  .mat-card .mat-card-content {\n    width: 100%;\n    text-align: center; }\n    .mat-card .mat-card-content img {\n      height: 150px; }\n  .mat-card .mat-card-footer {\n    font-size: 18px;\n    text-align: center;\n    padding: 20px 0px;\n    background: #eee;\n    border: 1px solid #ddd;\n    text-transform: uppercase;\n    color: #02f8cf;\n    margin: 0px; }\n\n.more-button {\n  border: 1px solid #f00;\n  color: #f00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/pages/private-sale/private-sale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateSaleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivateSaleComponent = (function () {
    function PrivateSaleComponent() {
        this.shopList = [
            { image: 'assets/img/product1.png', name: 'Clock Shop' },
            { image: 'assets/img/product2.png', name: 'Electronic Shop' },
            { image: 'assets/img/product3.png', name: 'Computer Shop' },
            { image: 'assets/img/product4.png', name: 'Clock Shop' },
            { image: 'assets/img/product5.png', name: 'Clock Shop' },
            { image: 'assets/img/product6.png', name: 'Clock Shop' },
            { image: 'assets/img/product7.png', name: 'Music Shop' },
            { image: 'assets/img/product8.png', name: 'Accessories Shop' },
            { image: 'assets/img/product9.png', name: 'Clock Shop' },
            { image: 'assets/img/product1.png', name: 'Clock Shop' },
            { image: 'assets/img/product2.png', name: 'Electronic Shop' },
            { image: 'assets/img/product3.png', name: 'Computer Shop' },
        ];
    }
    PrivateSaleComponent.prototype.ngOnInit = function () {
        this.cols = 4;
    };
    PrivateSaleComponent.prototype.onResize = function () {
        var width = window.innerWidth;
        if (width > 1280)
            this.cols = 4;
        else if (width > 600)
            this.cols = 3;
        else
            this.cols = 2;
    };
    return PrivateSaleComponent;
}());
PrivateSaleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-private-sale',
        template: __webpack_require__("../../../../../src/app/components/front/pages/private-sale/private-sale.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/pages/private-sale/private-sale.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PrivateSaleComponent);

//# sourceMappingURL=private-sale.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/pages/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n\t<a *ngFor=\"let item of breadcrumbItems\" [routerLink]=\"['/' + item.link]\">\n\t\t{{ item.text }} > \n\t</a>\n</div>\n\n<div class=\"product-wrapper\">\n\t<div class=\"product-main\" fxLayout=\"row\">\n\t\t<div class=\"product-images\" fxFlex=\"17\">\n\t\t\t<img src=\"assets/img/product-image1.png\">\n\t\t\t<img src=\"assets/img/product-image2.png\">\n\t\t\t<img src=\"assets/img/product-image3.png\">\n\t\t</div>\n\n\t\t<div class=\"featured-image\" fxFlex=\"33\" [ngStyle]=\"{'background-image': 'url(assets/img/featured-image.png)'}\"> </div>\n\n\t\t<div class=\"product-information\" fxFlex=\"50\" fxLayout=\"column\">\n\t\t\t<span [ngStyle]=\"{'color': '#009688'}\">\n\t\t\t\t<md-icon *ngFor=\"let j of [1, 2, 3, 4, 5]\">star_border</md-icon>\n\t\t\t</span>\n\t\t\t<h3 class=\"product-title\"> Woman Handbag Collection </h3>\n\t\t\t<div class=\"price-review\" fxLayout=\"row\" [ngStyle]=\"{'justify-content': 'space-between'}\">\n\t\t\t\t<span>\n\t\t\t\t\tPrice: <span class=\"price\"> $275 </span>\n\t\t\t\t</span>\n\t\t\t\t<span>\n\t\t\t\t\t12 Review\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"product-description\">\n\t\t\t\tLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibhumils euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n\t\t\t</div>\n\t\t\t<div class=\"options\" [ngStyle]=\"{'justify-content': 'space-between'}\">\n\t\t\t\t<md-select placeholder=\"Color\" fxFlex=\"46\">\n\t\t\t\t\t<md-option value=\"Red\"> Red </md-option>\n\t\t\t\t\t<md-option value=\"Green\"> Green </md-option>\n\t\t\t\t\t<md-option value=\"Blue\"> Blue </md-option>\n\t\t\t\t</md-select>\n\t\t\t\t<md-select placeholder=\"Size\" fxFlex=\"46\">\n\t\t\t\t\t<md-option value=\"Extra small\"> Extra small </md-option>\n\t\t\t\t\t<md-option value=\"Small\"> Small </md-option>\n\t\t\t\t\t<md-option value=\"Medium\"> Medium </md-option>\n\t\t\t\t\t<md-option value=\"Large\"> Large </md-option>\n\t\t\t\t\t<md-option value=\"Extra large\"> Extra large </md-option>\n\t\t\t\t</md-select>\n\t\t\t</div>\n\t\t\t<div class=\"cart\">\n\t\t\t\t<md-input-container class=\"cart-amount\">\n\t\t\t\t\t<input mdInput type=\"number\" value=\"1\" min=\"0\">\n\t\t\t\t</md-input-container>\n\t\t\t\t<button md-button class=\"btn-add-to-cart\"> ADD TO CART </button>\n\t\t\t</div>\n\t\t\t<div class=\"category\">\n\t\t\t\t<label> CATEGORY: </label>\n\t\t\t\t<span> Women Hand Bags </span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div fxLayout=\"row\" [ngStyle]=\"{'margin-top': '20px'}\">\n\t<app-product-extra> </app-product-extra>\n\t<app-store-summary> </app-store-summary>\n</div>\n\n<div class=\"related-products\" fxLayout=\"row\">\n\t<app-product-card fxFlex=\"25\" *ngFor=\"let i of [1, 2, 3, 4]\"> </app-product-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/pages/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-product-card {\n  margin: 30px; }\n\n.btn-add-to-cart {\n  background: #009688;\n  color: #fff; }\n\n.cart {\n  margin-top: 20px; }\n\n.cart-amount {\n  width: 50px; }\n  .cart-amount input {\n    text-align: center; }\n\n.category {\n  margin-top: 20px; }\n\n.featured-image {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover; }\n\n.mat-select {\n  border: 1px solid #aaa; }\n\n.price-review {\n  margin-top: 25px;\n  padding: 15px 0px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc; }\n\n.product-images img {\n  margin: 10px;\n  width: calc(100% - 20px);\n  box-shadow: 0px 0px 10px #aaa; }\n\n.product-description {\n  margin: 25px 0px; }\n\n.product-information {\n  padding: 20px; }\n\n.related-products {\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/pages/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = (function () {
    function ProductComponent() {
        this.breadcrumbItems = [
            { 'text': 'DaWanda', 'link': '' },
            { 'text': 'PROMOTIONS', 'link': '' },
            { 'text': 'Sacs femme', 'link': '' },
            { 'text': 'Sacs a main', 'link': '' },
            { 'text': 'Sac envelop blou gris / clutch / pochette / vegan', 'link': '' },
        ];
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/components/front/pages/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/pages/product/product.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/pages/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"start\" [ngStyle]=\"{'padding': '15% 10%'}\">\n\t<img fxHide.gt-sm src=\"assets/img/logo.jpg\" [ngStyle]=\"{'width': '40%'}\">\n\n\t<h2 [ngStyle]=\"{'font-size': '20px', 'color': '#000'}\">\n\t\tCreate an account <br>\n\t\t<small [ngStyle]=\"{'font-size': '75%', 'color': '#000'}\">\n\t\t\tSed mollis velit facilisis facilisis viverra\n\t\t</small>\n\t</h2>\n\n\t<form #signupForm=\"ngForm\" (submit)=\"signup(signupForm)\" [formGroup]=\"form\">\n\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"input-wrapper\">\n\t\t\t<md-icon>person</md-icon>\n\t\t\t<md-input-container>\n\t\t\t\t<input mdInput placeholder=\"Name *\" [formControl]=\"nameInput\">\n\t\t\t\t<md-error *ngIf=\"nameInput.hasError('required')\">\n\t\t\t\t\tThis is required\n\t\t\t\t</md-error>\n\t\t\t</md-input-container>\n\t\t</div>\n\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"input-wrapper\">\n\t\t\t<md-icon>email</md-icon>\n\t\t\t<md-input-container>\n\t\t\t\t<input mdInput placeholder=\"Email *\" [formControl]=\"emailInput\">\n\t\t\t\t<md-error *ngIf=\"emailInput.hasError('required')\">\n\t\t\t\t\tYour email must be between 10 and 100 characters long and look like an e-mail address\n\t\t\t\t</md-error>\n\t\t\t\t<md-error *ngIf=\"emailInput.hasError('email')\">\n\t\t\t\t\tYour email must be between 10 and 100 characters long and look like an e-mail address\n\t\t\t\t</md-error>\n\t\t\t</md-input-container>\n\t\t</div>\n\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"input-wrapper\">\n\t\t\t<md-icon>vpn_key</md-icon>\n\t\t\t<md-input-container>\n\t\t\t\t<input mdInput placeholder=\"Password *\" [formControl]=\"passwordInput\">\n\t\t\t\t<md-error *ngIf=\"passwordInput.hasError('required')\">\n\t\t\t\t\tThis is required\n\t\t\t\t</md-error>\n\t\t\t</md-input-container>\n\t\t</div>\n\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"input-wrapper\">\n\t\t\t<md-icon>vpn_key</md-icon>\n\t\t\t<md-input-container>\n\t\t\t\t<input mdInput placeholder=\"Password (Confirm)*\" [formControl]=\"passwordConfirmInput\">\n\t\t\t\t<md-error *ngIf=\"passwordConfirmInput.hasError('required')\">\n\t\t\t\t\tThis is required\n\t\t\t\t</md-error>\n\t\t\t</md-input-container>\n\t\t</div>\n\n\t\t<div fxLayout=\"column\" [ngStyle]=\"{'margin-top': '30px'}\">\n\t\t\t<md-checkbox [ngStyle]=\"{'margin-top': '5px', 'width': '100%'}\" [formControl]=\"tocCheckbox\"> \n\t\t\t\tI read and accept \n\t\t\t\t<a href=\"javascript:void(0);\" [ngStyle]=\"{'text-decoration': 'none', 'color': 'rgb(0, 150, 136)'}\"> terms and conditions </a> \n\t\t\t</md-checkbox>\n\t\t\t<md-error *ngIf=\"tocCheckbox.hasError('required')\">\n\t\t\t\tYou must accept the terms of service before you can proceed\n\t\t\t</md-error>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"full-width btn-login\" md-button [disabled]=\"signupForm.invalid || signupForm.pristine\"> SIGN UP </button>\n\t</form>\n\t<div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngStyle]=\"{'padding': '20px', 'margin-top': '10px'}\">\n\t\t<span> -- OR -- </span>\n\t</div>\n\t<div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngStyle]=\"{'justify-content': 'space-between', 'margin-top': '10px'}\">\n\t\t<span [ngStyle]=\"{'font-size': '12px'}\"> Already have an account? </span>\n\t\t<a [routerLink]=\"['/login']\" [ngStyle]=\"{'text-decoration': 'none', 'color': 'rgb(0, 150, 136)'}\"> LOG IN </a>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/pages/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-login {\n  background: #00897b; }\n\nbutton[type=\"submit\"] {\n  color: #fff;\n  font-weight: 700;\n  margin-top: 20px; }\n\nform.ng-invalid .btn-login {\n  background: rgba(0, 0, 0, 0.12); }\n\n.input-wrapper {\n  margin-top: 20px; }\n\n.mat-icon {\n  margin-right: 15px; }\n\n.mat-input-container {\n  width: 100%; }\n\n.mat-raised-button {\n  color: #fff;\n  margin: 6px 0px;\n  min-height: 36px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/pages/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var SignupComponent = (function () {
    function SignupComponent() {
        this.nameInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
        this.emailInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(EMAIL_REGEX)
        ]);
        this.passwordInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
        this.passwordConfirmInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
        this.tocCheckbox = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].requiredTrue
        ]);
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            nameInput: this.nameInput,
            emailInput: this.emailInput,
            passwordInput: this.passwordInput,
            passwordConfirmInput: this.passwordConfirmInput,
            tocCheckbox: this.tocCheckbox
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function (signupForm) {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/components/front/pages/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/pages/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/pages/store/store.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n\t<div fxLayout=\"column\">\n\t\t<app-store-detail> </app-store-detail>\n\t\t<app-product-filter-sidebar> </app-product-filter-sidebar>\n\t</div>\n\t<div fxLayout=\"column\" [ngStyle]=\"{'width': '100%'}\">\n\t\t<div class=\"vendor-symbol\">\n\t\t\tVendor\n\t\t</div>\n\t\t<div class=\"vendor-description\">\n\t\t\t<div class=\"inner-wrapper\">\n\t\t\t\t<p> Lorem ipsum dolor sit amet, nec ex delenit hendrerit repudiandae, no vim exerci eirmod. Assum insolens in his, hinc nonumes vix in. Ea quod assentior expetendis vim, ea hasnominatl inimicus, nemore laoreet ei est. Recteque reformidans vel ne, in eos duis delectus vltuperatorbus. </p>\n\n\t\t\t\t<br>\n\n\t\t\t\t<p> Pro sapientem hendrerit conclusionemque in, eam tation sigulls rationibus et. Nullam invenire eam cu. Duo et aetemo aliquid officiis. Vis te eloquentiam referrentur deferruisset, sea nullam allquip temporibus no. Qui cu euripidis peritinacia. Et nec error tritani. Duo cu consul admodum albucus, nisl deferruisset ut est. </p>\n\n\t\t\t\t<p [ngStyle]=\"{'text-align': 'right'}\"> Read more </p>\n\t\t\t</div>\n\t\t</div>\n\t\t<a [routerLink]=\"['/product']\">\n\t\t\t<app-product-grid> </app-product-grid>\n\t\t</a>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/pages/store/store.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vendor-description {\n  background: #41a9ed;\n  padding: 10px;\n  margin: 10px; }\n  .vendor-description .inner-wrapper {\n    border: 1px solid #fff;\n    padding: 10px;\n    color: #fff;\n    font-size: 18px; }\n\n.vendor-symbol {\n  padding: 40px;\n  text-align: center;\n  text-transform: uppercase;\n  background: #03f9cf;\n  font-size: 30px;\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/pages/store/store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreComponent = (function () {
    function StoreComponent() {
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    return StoreComponent;
}());
StoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store',
        template: __webpack_require__("../../../../../src/app/components/front/pages/store/store.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/pages/store/store.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StoreComponent);

//# sourceMappingURL=store.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/action-panel/action-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout.lt-lg=\"column\" fxLayout.gt-md=\"row\" class=\"color-primary\">\n    <div fxLayout.lt-md=\"column\" fxLayout.gt-sm=\"row\" fxFlex.lt-md=\"100\" fxFlex.gt-sm=\"40\">\n        <div fxLayout=\"column\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"50\" class=\"mat-padding\">\n            <h3>\n                <md-icon>notifications</md-icon>\n                EMH Alert\n            </h3>\n            <div fxLayout=\"column\">\n                <form name=\"form\">\n                    <p> Register now to get updates on promotions and coupons </p>\n                    <md-input-container>\n                        <input mdInput placeholder=\"Email*\" [formControl]=\"emailFormControl\">\n                        <md-error *ngIf=\"emailFormControl.hasError('required')\">\n                            Email is <strong> required </strong>\n                        </md-error>\n                    </md-input-container>\n                    <md-input-container>\n                        <input mdInput placeholder=\"Name\">\n                    </md-input-container>\n                    <button md-button class=\"color-accent\">\n                        <md-icon>email</md-icon>\n                        Subscribe\n                    </button>\n                </form>\n            </div>\n        </div>\n        <div fxLayout=\"column\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"50\" class=\"mat-padding\">\n            <h3>\n                <md-icon>business_center</md-icon>\n                Turn Your Passion Into a Business\n            </h3>\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <button md-raised-button class=\"color-accent\">\n                    <md-icon>store</md-icon>\n                    Open a Shop\n                </button>\n                <button md-raised-button class=\"color-accent-reverse\">\n                    Seller Login\n                </button>\n            </div>\n            <h3>\n                <md-icon>info</md-icon>\n                Customer Service\n            </h3>\n            <md-list>\n                <md-list-item *ngFor=\"let contact of contactData\">\n                    <button md-button class=\"full-size\">\n                        <md-icon> {{ contact.icon }} </md-icon>\n                        <p class=\"inline\"> {{ contact.text }} </p>\n                    </button>\n                </md-list-item>\n            </md-list>\n        </div>\n    </div>\n\n    <div fxLayout.lt-md=\"column\" fxLayout.gt-sm=\"row\" fxFlex.lt-md=\"100\" fxFlex.gt-sm=\"60\">\n        <div fxFlex.xs=\"100\" fxFlex.gt-xs=\"33\" class=\"mat-padding\" *ngFor=\"let data of infData\">\n            <h3>\n                <md-icon>{{ data.header.icon }}</md-icon>\n                {{ data.header.text }}\n            </h3>\n            <md-list>\n                <md-list-item *ngFor=\"let item of data.list\">\n                    <button md-button class=\"full-size\">\n                        <md-icon> {{ item.icon }} </md-icon>\n                        <p class=\"inline\"> {{ item.text }} </p>\n                    </button>\n                </md-list-item>\n            </md-list>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/action-panel/action-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3, p {\n  color: #000; }\n\n.mat-raised-button {\n  text-transform: uppercase;\n  padding: 0px 10px;\n  margin: 0px 5px; }\n\nform .mat-input-container {\n  display: block; }\n\n.mat-list .mat-icon {\n  vertical-align: middle;\n  margin-right: 30px; }\n\n.mat-list .mat-list-item {\n  color: #000; }\n  .mat-list .mat-list-item .mat-button {\n    vertical-align: middle;\n    text-transform: uppercase;\n    text-align: left; }\n    .mat-list .mat-list-item .mat-button p {\n      margin: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/action-panel/action-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionPanelComponent = (function () {
    function ActionPanelComponent() {
        this.infData = [
            {
                header: { icon: 'info', text: 'Information' },
                list: [
                    { icon: 'chrome_reader_mode', text: 'About Equality Mode House' },
                    { icon: 'chrome_reader_mode', text: 'Delivery Information' },
                    { icon: 'verified_user', text: 'Privacy Policy' },
                    { icon: 'verified_user', text: 'Terms & Conditions' }
                ]
            },
            {
                header: { icon: 'share', text: 'Stay Connected' },
                list: [
                    { icon: 'face', text: 'Facebook' },
                    { icon: 'face', text: 'Youtube' },
                    { icon: 'forum', text: 'Our Community' },
                    { icon: 'group', text: 'Emh Private Daily Profiles' }
                ]
            },
            {
                header: { icon: 'account_circle', text: 'My Account' },
                list: [
                    { icon: 'account_circle', text: 'My Account' },
                    { icon: 'history', text: 'Order History' },
                    { icon: 'favorite', text: 'Wish List' },
                    { icon: 'new_releases', text: 'Newsletter' }
                ]
            }
        ];
        this.contactData = [
            { icon: 'email', text: 'Contact Us' },
            { icon: 'help', text: 'Help' },
            { icon: 'question_answer', text: 'FAQs' }
        ];
    }
    ActionPanelComponent.prototype.ngOnInit = function () {
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
    };
    return ActionPanelComponent;
}());
ActionPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-action-panel',
        template: __webpack_require__("../../../../../src/app/components/front/partials/action-panel/action-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/action-panel/action-panel.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], ActionPanelComponent);

//# sourceMappingURL=action-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/collaborator-panel/collaborator-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-slick class=\"carousel\" [config]=\"slideConfig\">\r\n    <div ngxSlickItem *ngFor=\"let i of [1, 2, 3, 4, 5, 6]\"> <img src=\"assets/img/partner.png\" width=\"100%\"> </div>\r\n</ngx-slick>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/collaborator-panel/collaborator-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-collaborator-panel ngx-slick {\n  margin: 0px 100px; }\n  app-collaborator-panel ngx-slick .slick-arrow {\n    margin: 0px -30px; }\n  app-collaborator-panel ngx-slick .slick-prev:before, app-collaborator-panel ngx-slick .slick-next:before {\n    color: #009688; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/collaborator-panel/collaborator-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaboratorPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollaboratorPanelComponent = (function () {
    function CollaboratorPanelComponent() {
        this.slideConfig = {
            "slidesToShow": 4,
            "slidesToScroll": 1
        };
    }
    CollaboratorPanelComponent.prototype.ngOnInit = function () {
    };
    return CollaboratorPanelComponent;
}());
CollaboratorPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-collaborator-panel',
        template: __webpack_require__("../../../../../src/app/components/front/partials/collaborator-panel/collaborator-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/collaborator-panel/collaborator-panel.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], CollaboratorPanelComponent);

//# sourceMappingURL=collaborator-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"color-accent\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <h3 class=\"color-accent\"> Copyrights <md-icon>copyright</md-icon> Equality Mode House 2017. All Right Reserved. </h3>\r\n</md-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/front/partials/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/footer/footer.component.scss")]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"accent\" [ngStyle]=\"{'background': '#000'}\">\r\n    <button md-icon-button fxHide.gt-sm (click)=\"openLeftSidenav()\"><md-icon md-font-set=\"material-icons\">menu</md-icon></button>\r\n\t<img style=\"max-width: 40%;\" src=\"assets/img/logo.jpg\" alt=\"\">\r\n\t<div fxLayout=\"column\" fxHide.sm fxHide.xs fxLayoutAlign=\"right\">\r\n        <div fxLayout=\"row\">\r\n            <a *ngFor=\"let button of headerButtons\" [routerLink]=\"['/' + button.link]\">\r\n                <button md-button>\r\n                    <md-icon>{{ button.icon }}</md-icon>\r\n                    {{ button.text }}\r\n                </button>\r\n            </a>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n            <form name=\"form\" class=\"search-form\">\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                \t<md-input-container [ngStyle]=\"{'color': '#fff'}\">\r\n                \t\t<input mdInput placeholder=\"Search*\" [formControl]=\"searchControl\">\r\n                \t\t<md-error *ngIf=\"searchControl.hasError('required')\">\r\n                \t\t\tThis is <strong> required </strong>\r\n                \t\t</md-error>\r\n                \t</md-input-container>\r\n                    <md-select placeholder=\"All Categories\" floatPlaceholder=\"never\">\r\n                        <md-option *ngFor=\"let category of categories\" [value]=\"category.value\">\r\n                            {{ category.viewValue }}\r\n                        </md-option>\r\n                    </md-select>\r\n                \t<button md-icon-button><md-icon md-font-set=\"material-icons\">search</md-icon></button>\r\n                </div>\r\n            </form>\r\n            <button md-button>\r\n                <md-icon md-font-set=\"material-icons\">local_grocery_store</md-icon>\r\n                0 Item - 0.00$\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxHide.gt-sm>\r\n        <button md-icon-button><md-icon>local_grocery_store</md-icon></button>\r\n        <button md-icon-button><md-icon (click)=\"openRightSidenav()\">menu</md-icon></button>\r\n    </div>\r\n</md-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-input-container label {\n  color: #fff; }\n\n.mat-select {\n  margin-top: 1.5em;\n  margin-bottom: 1.8em;\n  padding-top: 0px; }\n  .mat-select span {\n    color: #fff; }\n\n.mat-toolbar {\n  font-size: 16px;\n  line-height: 1;\n  display: table;\n  padding: 0px; }\n  .mat-toolbar .mat-toolbar-layout {\n    display: table-cell;\n    vertical-align: middle; }\n    .mat-toolbar .mat-toolbar-layout .mat-toolbar-row {\n      height: inherit;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeaderComponent = (function () {
    function HeaderComponent() {
        this.categories = [
            { value: '1', viewValue: 'Category1' },
            { value: '2', viewValue: 'Category2' },
            { value: '3', viewValue: 'Category3' },
            { value: '4', viewValue: 'Category4' },
            { value: '5', viewValue: 'Category5' }
        ];
        this.headerButtons = [
            { icon: 'description', text: 'EMH Private Sale', link: 'private-sale' },
            { icon: 'public', text: 'News', link: 'news' },
            { icon: 'local_shipping', text: 'Free Delivery', link: 'free-delivery' },
            { icon: 'lock', text: 'Login', link: 'login' },
            { icon: 'person', text: 'Sign Up', link: 'signup' }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
    };
    HeaderComponent.prototype.openLeftSidenav = function () {
        document.getElementById("leftSideNav").dispatchEvent(new Event("click"));
    };
    HeaderComponent.prototype.openRightSidenav = function () {
        document.getElementById("rightSideNav").dispatchEvent(new Event("click"));
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/front/partials/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/header/header.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/menu-mega/menu-mega.component.html":
/***/ (function(module, exports) {

module.exports = "<md-list fxHide.xs fxHide.sm>\r\n    <md-list-item *ngFor=\"let menuItem of menuItems\" class=\"color-primary\">\r\n        <button md-button fxLayout=\"row\" class=\"full-size\" xOffset=\"100\" [mdMenuTriggerFor]=\"appMenu\"> <p class=\"inline\"> {{ menuItem }} </p> <md-icon>keyboard_arrow_right</md-icon> </button>\r\n        <md-menu class=\"mega-menu\" #appMenu=\"mdMenu\" xPosition=\"after\">\r\n            <div fxLayout=\"column\">\r\n                <div fxLayout=\"row\" *ngFor=\"let i of [1, 2]\">\r\n                    <div style=\"min-width: 300px;\" *ngFor=\"let j of [1, 2]\">\r\n                        <md-toolbar fxLayout=\"row\">\r\n                            <img src=\"assets/img/profile.jpg\">\r\n                            <span> Sub Category </span>\r\n                        </md-toolbar>\r\n                        <md-list>\r\n                            <md-list-item *ngFor=\"let item of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\">\r\n                                <a [routerLink]=\"['/category']\" [ngStyle]=\"{'text-decoration': 'none', 'color': 'inherit'}\" class=\"full-width\"> <button md-button> Sub Sub Category {{ item }} </button> </a>\r\n                            </md-list-item>\r\n                        </md-list>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </md-menu>\r\n    </md-list-item>\r\n</md-list>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/menu-mega/menu-mega.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-list {\n  min-width: 200px;\n  padding-top: 0px; }\n  .mat-list .mat-list-item {\n    color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/menu-mega/menu-mega.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuMegaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuMegaComponent = (function () {
    function MenuMegaComponent() {
        this.menuItems = ['Accessory', 'Jewllery', 'Shoes', 'Cosmetic', 'Handmade', 'Haute Couture', 'Horology', 'Lingerle', 'Wedding', 'Perfumery', 'Ready To Wear', 'Bag', 'Wax Clothe', 'All Categories'];
    }
    return MenuMegaComponent;
}());
MenuMegaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-mega',
        template: __webpack_require__("../../../../../src/app/components/front/partials/menu-mega/menu-mega.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/menu-mega/menu-mega.component.scss")]
    })
], MenuMegaComponent);

//# sourceMappingURL=menu-mega.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/partner-panel/partner-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3> Our Referrer Partners: </h3>\n</div>\n\n<ngx-slick class=\"carousel\" [config]=\"slideConfig\" class=\"color-primary\">\n    <div ngxSlickItem *ngFor=\"let i of [1, 2, 3, 4, 5, 6]\"> <img src=\"assets/img/partner.png\" width=\"100%\"> </div>\n</ngx-slick>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/partner-panel/partner-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  color: #000; }\n\nngx-slick .slick-slide {\n  padding-left: 50px;\n  padding-right: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/partner-panel/partner-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnerPanelComponent = (function () {
    function PartnerPanelComponent() {
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 3000 };
    }
    PartnerPanelComponent.prototype.ngOnInit = function () {
    };
    return PartnerPanelComponent;
}());
PartnerPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-partner-panel',
        template: __webpack_require__("../../../../../src/app/components/front/partials/partner-panel/partner-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/partner-panel/partner-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PartnerPanelComponent);

//# sourceMappingURL=partner-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card fxLayout=\"column\">\n\t<img src=\"assets/img/red-girl.png\" [ngStyle]=\"{'margin-bottom': '10px'}\" class=\"full-width\">\n\t<div fxLayout=\"column\" class=\"product-info\">\n\t\t<span class=\"product-title\" [ngStyle]=\"{'font-size': '20px'}\"> Louise Hand Bag </span>\n\t\t<span [ngStyle]=\"{'font-weight': '900', 'font-size': '30px'}\"> 125$ </span>\n\t\t<span [ngStyle]=\"{'color': '#03f9cf'}\">\n\t\t\t<md-icon *ngFor=\"let j of [1, 2, 3, 4, 5]\" [ngStyle]=\"{'font-size': '21px'}\">star_border</md-icon>\n\t\t</span>\n\t\t<div fxLayout=\"row\" [ngStyle]=\"{'justify-content': 'space-between'}\">\n\t\t\t<span class=\"order-count\"> Orders(228) </span>\n\t\t\t<md-icon [ngStyle]=\"{'color': '#03f9cf'}\">favorite_border</md-icon>\n\t\t</div>\n\t</div>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-card/product-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  padding: 0px 24px;\n  border-top: 1px solid #eee;\n  width: 98%;\n  height: 98%; }\n\n.product-info {\n  padding: 10px 24px;\n  background: #f2f2f2;\n  margin: 0px -24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductCardComponent = (function () {
    function ProductCardComponent() {
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    return ProductCardComponent;
}());
ProductCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-card',
        template: __webpack_require__("../../../../../src/app/components/front/partials/product-card/product-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/product-card/product-card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductCardComponent);

//# sourceMappingURL=product-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-extra/product-extra.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\n\t<md-tab label=\"Description\">\n\t\tLorem ipsum dolor sit amet, consectetuer adipscing elit, sed diam nonummy nibhumils euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex etlisun commodo consequat. Duis autem vel eumm iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et lusto odio dignissim qui bladdit praesent luptatum zzril delenit augue.\n\t</md-tab>\n\t<md-tab label=\"Review(12)\">\n\t\t<div class=\"review-block\" *ngFor=\"let i of [1, 2, 3, 4, 5]\">\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t<span [ngStyle]=\"{'color': '#009688'}\">\n\t\t\t\t\t<md-icon *ngFor=\"let j of [1, 2, 3, 4, 5]\">star_border</md-icon>\n\t\t\t\t</span>\n\t\t\t\t<label class=\"customer-name\" [ngStyle]=\"{ 'margin-left': '20px' }\"> John Doe </label>\n\t\t\t</div>\n\t\t\t<p class=\"review-date\"> Dec 12 2016 </p>\n\t\t\t<p class=\"review-text\">\n\t\t\t\tLorem ipsum dolor sit amet, consectetuer adipscing elit, sed diam nonummy nibhumils euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex etlisun commodo consequat. Duis autem vel eumm iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et lusto odio dignissim qui bladdit praesent luptatum zzril delenit augue.\n\t\t\t</p>\n\t\t</div>\n\t</md-tab>\n</md-tab-group>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-extra/product-extra.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-tab-group {\n  margin: 0px 10px;\n  border: 1px solid #ddd; }\n\n.review-block {\n  margin: 20px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-extra/product-extra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductExtraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductExtraComponent = (function () {
    function ProductExtraComponent() {
    }
    ProductExtraComponent.prototype.ngOnInit = function () {
    };
    return ProductExtraComponent;
}());
ProductExtraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-extra',
        template: __webpack_require__("../../../../../src/app/components/front/partials/product-extra/product-extra.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/product-extra/product-extra.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductExtraComponent);

//# sourceMappingURL=product-extra.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-filter-sidebar/product-filter-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" [ngStyle]=\"{'width': '240px'}\">\n\t<md-card *ngFor=\"let sidebarItem of sidebarItems\">\n\t\t<md-card-title>\n\t\t\t<button md-button fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"full-width\" (click)=\"toggleFilterCard($event)\">\n\t\t\t\t<span> {{ sidebarItem.title }} </span>\n\t\t\t\t<md-icon class=\"button-plus\">add_circle</md-icon>\n\t\t\t\t<md-icon class=\"button-minus\">remove_circle</md-icon>\n\t\t\t</button>\n\t\t</md-card-title>\n\t\t<md-card-content>\n\t\t\t<md-list>\n\t\t\t\t<md-checkbox *ngFor=\"let item of sidebarItem.items\" [ngStyle]=\"{'display': 'block'}\"> {{ item }} </md-checkbox>\n\t\t\t</md-list>\n\t\t</md-card-content>\n\t</md-card>\n\t<md-card>\n\t\t<md-card-title> \n\t\t\t<button md-button fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"full-width\" (click)=\"toggleFilterCard($event)\">\n\t\t\t\t<span> Colors </span>\n\t\t\t\t<md-icon class=\"button-plus\">add_circle</md-icon>\n\t\t\t\t<md-icon class=\"button-minus\">remove_circle</md-icon>\n\t\t\t</button>\n\t\t</md-card-title>\n\t\t<md-card-content>\n\t\t\t<md-grid-list cols=\"6\" rowHeight=\"1:1\" gutterSize=\"10\">\n\t\t\t\t<md-grid-tile *ngFor=\"let color of colors\" [ngStyle]=\"{'background': color}\" > <button md-button class=\"full-size\"> </button> </md-grid-tile>\n\t\t\t</md-grid-list>\n\t\t</md-card-content>\n\t</md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-filter-sidebar/product-filter-sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  padding: 0px;\n  background: #eee;\n  overflow: hidden; }\n  .mat-card .mat-card-title {\n    background: #ddd;\n    margin: 0px;\n    font-size: 18px; }\n    .mat-card .mat-card-title .mat-icon {\n      color: #03f9cf; }\n    .mat-card .mat-card-title .mat-button {\n      padding: 10px 20px;\n      text-align: left; }\n  .mat-card .mat-card-content {\n    padding: 10px 20px;\n    -webkit-transition: all .5s ease;\n    -moz-transition: all .5s ease;\n    -ms-transition: all .5s ease;\n    -o-transition: all .5s ease;\n    -transition: all .5s ease; }\n  .mat-card .button-minus {\n    display: block; }\n  .mat-card .button-plus {\n    display: none; }\n\n.mat-card.closed .button-minus {\n  display: none; }\n\n.mat-card.closed .button-plus {\n  display: block; }\n\n.mat-card.closed .mat-card-content {\n  max-height: 0px !important;\n  padding: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-filter-sidebar/product-filter-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterSidebarComponent = (function () {
    function ProductFilterSidebarComponent() {
        this.sidebarItems = [
            {
                title: 'Category',
                items: ['Denim Shirt', 'Short Sleeve', 'Blazers', 'Co-Ords', 'Jacket', 'Denim Shirt', 'Short Sleeve', 'Blazers', 'Co-Ords', 'Jacket', 'Denim Shirt']
            },
            {
                title: 'Price',
                items: ['$0 - $200', '$200 - $1000', '$1000 - $5000', '$5000 - $10000']
            },
            {
                title: 'Brand',
                items: ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5']
            },
            {
                title: 'Size',
                items: ['Small', 'Medium', 'Large']
            }
        ];
        this.colors = [
            '#ffa200', '#34cc67', '#2ab9d9', '#333', '#898989', '#fff'
        ];
    }
    ProductFilterSidebarComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(function () {
            // Set the max-height of each filter card using Javascript. This is for slidedown and slideup transition.
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.mat-card-content').each(function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__(this).css('max-height', __WEBPACK_IMPORTED_MODULE_1_jquery__(this).outerHeight());
            });
        });
    };
    ProductFilterSidebarComponent.prototype.toggleFilterCard = function ($event) {
        var e = __WEBPACK_IMPORTED_MODULE_1_jquery__($event.target).closest('.mat-card');
        e.toggleClass('closed');
    };
    return ProductFilterSidebarComponent;
}());
ProductFilterSidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-filter-sidebar',
        template: __webpack_require__("../../../../../src/app/components/front/partials/product-filter-sidebar/product-filter-sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/product-filter-sidebar/product-filter-sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductFilterSidebarComponent);

//# sourceMappingURL=product-filter-sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-filter/product-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"product-filter-wrapper\">\n\t<label class=\"info\" [ngStyle]=\"{'text-transform': 'uppercase'}\"> Product 1-16 of 20 products </label>\n\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t<md-select placeholder=\"Price\">\n\t\t\t<md-option *ngFor=\"let price of priceList\" [value]=\"price\"> {{ price }} </md-option>\n\t\t</md-select>\n\n\t\t<md-select placeholder=\"Color\">\n\t\t\t<md-option *ngFor=\"let color of colorList\" [value]=\"color\"> {{ color }} </md-option>\n\t\t</md-select>\n\t\t\n\t\t<md-select placeholder=\"Brand\">\n\t\t\t<md-option *ngFor=\"let brand of brandList\" [value]=\"brand\"> {{ brand }} </md-option>\n\t\t</md-select>\n\n\t\t<label [ngStyle]=\"{'margin-right': '10px'}\"> Price </label>\n\t\t<md-input-container>\n\t\t\t<input mdInput placeholder=\"Min\">\n\t\t</md-input-container>\n\t\t<label [ngStyle]=\"{'margin': '0px 5px'}\"> - </label>\n\t\t<md-input-container>\n\t\t\t<input mdInput placeholder=\"Max\">\n\t\t</md-input-container>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-filter/product-filter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-product-filter label {\n  margin-bottom: 0px; }\n\napp-product-filter .mat-input-container label, app-product-filter .mat-select span {\n  color: #000; }\n\napp-product-filter .mat-input-infix, app-product-filter .mat-select {\n  border: 1px solid #999; }\n\napp-product-filter .mat-input-underline {\n  display: none; }\n\napp-product-filter .mat-select {\n  margin: 0px 10px;\n  min-width: 150px; }\n\napp-product-filter .mat-input-wrapper {\n  padding-bottom: 0px; }\n\napp-product-filter .product-filter-wrapper {\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important;\n  color: #000;\n  padding: 20px 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-filter/product-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductFilterComponent = (function () {
    function ProductFilterComponent() {
        this.priceList = ['$0 - $200', '$200 - $1000', '$1000 - $5000', '$5000 - $10000'];
        this.colorList = ['Red', 'Green', 'Blue'];
        this.brandList = ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'];
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    return ProductFilterComponent;
}());
ProductFilterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-filter',
        template: __webpack_require__("../../../../../src/app/components/front/partials/product-filter/product-filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/product-filter/product-filter.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], ProductFilterComponent);

//# sourceMappingURL=product-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-grid/product-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group headerPosition=\"below\" [ngStyle]=\"{'margin-left': '20px'}\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n\t<md-tab (window:resize)=\"onResize()\" *ngFor=\"let i of [1, 2, 3]\" label=\"{{i}}\">\n\t\t<md-grid-list cols=\"{{cols}}\" gutterSize=\"20px\" rowHeight=\"2:3\">\n\t\t\t<md-grid-tile *ngFor=\"let j of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\">\n\t\t\t\t<app-product-card> </app-product-card>\n\t\t\t</md-grid-tile>\n\t\t</md-grid-list>\n\t</md-tab>\n</md-tab-group>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-grid/product-grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-product-grid .mat-tab-group {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n  app-product-grid .mat-tab-group .mat-tab-header {\n    margin-top: 70px; }\n  app-product-grid .mat-tab-group .mat-tab-label {\n    padding: 0px;\n    min-width: 48px;\n    border-radius: 2px;\n    border: 1px solid #aaa;\n    margin: 10px;\n    opacity: 1; }\n  app-product-grid .mat-tab-group .mat-tab-label.mat-tab-label-active {\n    background: #03f9cf;\n    color: #fff;\n    border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/product-grid/product-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductGridComponent = (function () {
    function ProductGridComponent() {
    }
    ProductGridComponent.prototype.ngOnInit = function () {
        this.cols = 4;
    };
    ProductGridComponent.prototype.onResize = function () {
        var width = window.innerWidth;
        if (width > 1280)
            this.cols = 4;
        else if (width > 600)
            this.cols = 3;
        else
            this.cols = 2;
    };
    return ProductGridComponent;
}());
ProductGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-grid',
        template: __webpack_require__("../../../../../src/app/components/front/partials/product-grid/product-grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/product-grid/product-grid.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], ProductGridComponent);

//# sourceMappingURL=product-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/sidenav/left/left.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"accent\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\t<h1 fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\t\t<md-icon class=\"logo\" [ngStyle]=\"{'margin-right': '10px'}\">assignment</md-icon>\r\n\t\tList categories\r\n\t</h1>\r\n</md-toolbar>\r\n\r\n<md-list>\r\n\t<md-list-item *ngFor=\"let menuItem of menuItems\">\r\n\t\t<button md-button class=\"full-size\" fxLayout=\"row\"> {{ menuItem }} </button>\r\n\t</md-list-item>\r\n</md-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/sidenav/left/left.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-list .mat-list-item {\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/sidenav/left/left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LeftSidenavComponent = (function () {
    function LeftSidenavComponent() {
        this.menuItems = ['Accessory', 'Jewllery', 'Shoes', 'Cosmetic', 'Handmade', 'Haute Couture', 'Horology', 'Lingerle', 'Wedding', 'Perfumery', 'Ready To Wear', 'Bag', 'Wax Clothe', 'All Categories'];
    }
    return LeftSidenavComponent;
}());
LeftSidenavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-left-sidenav',
        template: __webpack_require__("../../../../../src/app/components/front/partials/sidenav/left/left.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/sidenav/left/left.component.scss")]
    })
], LeftSidenavComponent);

//# sourceMappingURL=left.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/sidenav/right/right.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" fxLayout=\"column\" class=\"mat-padding\" [ngStyle]=\"{'margin-bottom': '1em'}\">\r\n\t<md-input-container>\r\n\t\t<input mdInput  placeholder=\"Search*\" [formControl]=\"searchControl\">\r\n\t\t<md-error *ngIf=\"searchControl.hasError('required')\">\r\n\t\t\tThis is <strong> required </strong>\r\n\t\t</md-error>\r\n\t</md-input-container>\r\n\t<md-select placeholder=\"All Categories\" floatPlaceholder=\"never\">\r\n\t\t<md-option *ngFor=\"let category of categories\" [value]=\"category.value\">\r\n\t\t\t{{ category.viewValue }}\r\n\t\t</md-option>\r\n\t</md-select>\r\n\t<button md-button><md-icon>search</md-icon>Search Product</button>\r\n</form>\r\n<md-list>\r\n\t<md-list-item *ngFor=\"let button of listButtons\">\r\n\t\t<button md-button class=\"full-width\">\r\n\t\t\t<md-icon> {{ button.icon }} </md-icon>\r\n\t\t\t<p class=\"inline\"> {{ button.text }} </p>\r\n\t\t</button>\r\n\t</md-list-item>\r\n</md-list>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/sidenav/right/right.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-right-sidenav .mat-button {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px; }\n\napp-right-sidenav .mat-icon {\n  margin-right: 20px; }\n\napp-right-sidenav .mat-list .mat-list-item .mat-list-item-content {\n  padding: 0px; }\n  app-right-sidenav .mat-list .mat-list-item .mat-list-item-content .mat-button {\n    text-align: left; }\n\napp-right-sidenav .mat-input-wrapper {\n  color: #00bfa5; }\n\napp-right-sidenav md-input-container, app-right-sidenav md-select {\n  margin: 18px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/sidenav/right/right.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RightSidenavComponent = (function () {
    function RightSidenavComponent() {
        this.categories = [
            { value: '1', viewValue: 'Category1' },
            { value: '2', viewValue: 'Category2' },
            { value: '3', viewValue: 'Category3' },
            { value: '4', viewValue: 'Category4' },
            { value: '5', viewValue: 'Category5' }
        ];
        this.listButtons = [
            { icon: 'description', text: 'EMH Private Sale' },
            { icon: 'public', text: 'News' },
            { icon: 'local_shipping', text: 'Free Delivery' },
            { icon: 'lock', text: 'Login' },
            { icon: 'person', text: 'Sign Up' }
        ];
    }
    RightSidenavComponent.prototype.ngOnInit = function () {
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
    };
    return RightSidenavComponent;
}());
RightSidenavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-right-sidenav',
        template: __webpack_require__("../../../../../src/app/components/front/partials/sidenav/right/right.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/sidenav/right/right.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], RightSidenavComponent);

//# sourceMappingURL=right.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/slideshow/slideshow.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group fxLayout=\"column\" fxLayoutAlign=\"end center\" headerPosition=\"below\" [selectedIndex]=\"selectedTab\" (selectChange)=\"selectChange($event)\">\r\n\t<md-tab> <div class=\"slideshow-image full-size\" style=\"background-image: url(assets/img/banner1.jpg)\"> </div> </md-tab>\r\n\t<md-tab> <div class=\"slideshow-image full-size\" style=\"background-image: url(assets/img/banner2.jpg)\"> </div> </md-tab>\r\n\t<md-tab> <div class=\"slideshow-image full-size\" style=\"background-image: url(assets/img/banner3.jpg)\"> </div> </md-tab>\r\n\t<md-tab> <div class=\"slideshow-image full-size\" style=\"background-image: url(assets/img/banner4.jpg)\"> </div> </md-tab>\r\n\t<md-tab> <div class=\"slideshow-image full-size\" style=\"background-image: url(assets/img/banner5.jpg)\"> </div> </md-tab>\r\n</md-tab-group>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/slideshow/slideshow.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-slideshow {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-height: 400px; }\n  app-slideshow .mat-tab-group {\n    height: 100%; }\n    app-slideshow .mat-tab-group .mat-tab-header {\n      position: absolute;\n      z-index: 2;\n      border: none; }\n      app-slideshow .mat-tab-group .mat-tab-header .mat-ink-bar {\n        display: none; }\n      app-slideshow .mat-tab-group .mat-tab-header .mat-tab-label {\n        width: 15px;\n        height: 15px;\n        padding: 0px;\n        border: none;\n        min-width: 15px;\n        border-radius: 15px;\n        min-height: 15px;\n        background-color: #000;\n        opacity: 0.6;\n        margin: 30px 10px; }\n      app-slideshow .mat-tab-group .mat-tab-header .mat-tab-label[aria-selected=\"true\"] {\n        opacity: 1; }\n    app-slideshow .mat-tab-group .mat-tab-body-wrapper {\n      width: 100%;\n      height: 100%; }\n  app-slideshow .slideshow-image {\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/slideshow/slideshow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideshowComponent = (function () {
    function SlideshowComponent() {
        this.selectedTab = 0;
    }
    SlideshowComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.selectedTab == 4)
                _this.selectedTab = 0;
            else
                _this.selectedTab++;
        }, 3000);
    };
    SlideshowComponent.prototype.selectChange = function ($event) {
        this.selectedTab = $event.index;
    };
    return SlideshowComponent;
}());
SlideshowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-slideshow',
        template: __webpack_require__("../../../../../src/app/components/front/partials/slideshow/slideshow.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/slideshow/slideshow.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], SlideshowComponent);

//# sourceMappingURL=slideshow.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-detail/store-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'width': '240px'}\">\n\t<div class=\"store-image\" [ngStyle]=\"{'position': 'relative'}\">\n\t\t<img src=\"assets/img/store-back.png\" class=\"full-width\">\n\t\t<div class=\"owner-image\" [ngStyle]=\"{'background-image': 'url(assets/img/store-owner.png)'}\"> </div>\n\t</div>\n\n\t<div class=\"store-details\" fxLayout=\"column\">\n\t\t<span class=\"owner-name\"> Sara </span>\n\t\t<span class=\"register-date\"> 14-9-2016 </span>\n\t\t<div class=\"evaluation\" fxLayout=\"row\" [ngStyle]=\"{'justify-content': 'space-between'}\">\n\t\t\t<span> Evaluation </span>\n\t\t\t<span> 0 Evaluation </span>\n\t\t</div>\n\n\t\t<div class=\"social-icons\">\n\t\t\t<button md-icon-button [ngStyle]=\"{'background': '#3b5998'}\"> <i class=\"fa fa-facebook\"> </i> </button>\n\t\t\t<button md-icon-button [ngStyle]=\"{'background': '#55acee'}\"> <i class=\"fa fa-twitter\"> </i> </button>\n\t\t\t<button md-icon-button [ngStyle]=\"{'background': '#dd4b39'}\"> <i class=\"fa fa-google-plus\"> </i> </button>\n\t\t\t<button md-icon-button [ngStyle]=\"{'background': '#cb2027'}\"> <i class=\"fa fa-pinterest-p\"> </i> </button>\n\t\t</div>\n\n\t\t<button md-button class=\"contact-button\"> <md-icon>mail</md-icon> Contact to Vendor </button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-detail/store-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-button {\n  background: #0cd9be;\n  color: #fff;\n  margin: 20px;\n  border-radius: 3px; }\n\n.evaluation {\n  font-weight: 600;\n  margin-top: 10px; }\n\n.owner-image {\n  width: 100px;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 50px;\n  position: absolute;\n  bottom: -50px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  box-shadow: 0px 3px 10px #999; }\n\n.owner-name {\n  text-transform: uppercase;\n  font-size: 25px; }\n\n.social-icons {\n  color: #fff;\n  margin-top: 5px; }\n  .social-icons .mat-icon-button {\n    background-color: #3b5998;\n    margin: 5px;\n    width: 30px;\n    height: 30px;\n    line-height: 30px; }\n    .social-icons .mat-icon-button i {\n      font-size: 20px; }\n\n.store-details {\n  background: #ebebeb;\n  padding: 60px 10px 10px 10px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-detail/store-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreDetailComponent = (function () {
    function StoreDetailComponent() {
    }
    StoreDetailComponent.prototype.ngOnInit = function () {
    };
    return StoreDetailComponent;
}());
StoreDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store-detail',
        template: __webpack_require__("../../../../../src/app/components/front/partials/store-detail/store-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/store-detail/store-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StoreDetailComponent);

//# sourceMappingURL=store-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-filter/store-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card fxLayout.lt-lg=\"column\" fxLayout.gt-md=\"row\" class=\"color-primary\">\n\t<div fxLayout.lt-md=\"column\" fxLayout.gt-sm=\"row\" fxFlex.lt-md=\"100\" fxFlex.gt-sm=\"40\">\n\t\t<md-select placeholder=\"Type Of Store\" floatPlaceholder=\"never\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"50\">\n\t\t\t<md-option *ngFor=\"let tos of storeTypes\" [value]=\"tos\">\n\t\t\t\t{{ tos }}\n\t\t\t</md-option>\n\t\t</md-select>\n\t\t<md-select placeholder=\"Type Of Vendor\" floatPlaceholder=\"never\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"50\">\n\t\t\t<md-option *ngFor=\"let tov of vendorTypes\" [value]=\"tov\">\n\t\t\t\t{{ tov }}\n\t\t\t</md-option>\n\t\t</md-select>\n\t</div>\n\t<div fxLayout.lt-md=\"column\" fxLayout.gt-sm=\"row\" fxFlex.lt-md=\"100\" fxFlex.gt-sm=\"60\">\n\t\t<md-select placeholder=\"Gender Type\" floatPlaceholder=\"never\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"33\">\n\t\t\t<md-option *ngFor=\"let gt of genderTypes\" [value]=\"gt\">\n\t\t\t\t{{ gt }}\n\t\t\t</md-option>\n\t\t</md-select>\n\t\t<md-select placeholder=\"Store Location\" floatPlaceholder=\"never\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"33\">\n\t\t\t<md-option *ngFor=\"let sl of storeLocations\" [value]=\"sl\">\n\t\t\t\t{{ sl }}\n\t\t\t</md-option>\n\t\t</md-select>\n\t\t<md-select placeholder=\"Best Store\" floatPlaceholder=\"never\" fxFlex.xs=\"100\" fxFlex.gt-xs=\"33\">\n\t\t\t<md-option *ngFor=\"let i of [1, 2, 3, 4, 5]\" [value]=\"i\">\n\t\t\t\t{{ i }} star\n\t\t\t</md-option>\n\t\t</md-select>\n\t</div>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-filter/store-filter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-select {\n  margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-filter/store-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreFilterComponent = (function () {
    function StoreFilterComponent() {
        this.storeTypes = ['Type of Store1', 'Type of Store2', 'Type of Store3', 'Type of Store4', 'Type of Store5'];
        this.vendorTypes = ['Type of Vendor1', 'Type of Vendor2', 'Type of Vendor3', 'Type of Vendor4', 'Type of Vendor5'];
        this.genderTypes = ['Man', 'Woman', 'Child', 'Baby'];
        this.storeLocations = ['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5'];
    }
    StoreFilterComponent.prototype.ngOnInit = function () {
    };
    return StoreFilterComponent;
}());
StoreFilterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store-filter',
        template: __webpack_require__("../../../../../src/app/components/front/partials/store-filter/store-filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/store-filter/store-filter.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StoreFilterComponent);

//# sourceMappingURL=store-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-grid/store-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group fxLayout=\"column\" fxLayoutAlign=\"end center\" [selectedIndex]=\"selectedTab\" (selectChange)=\"selectChange($event)\">\n\t<md-tab (window:resize)=\"onResize()\" *ngFor=\"let i of [1, 2, 3, 4, 5]\" label=\"{{ i }}\">\n\t\t<md-grid-list rowHeight=\"1:1\" gutterSize=\"16\" cols=\"{{cols}}\">\n\t\t\t<md-grid-tile *ngFor=\"let vendor of vendors; let i = index\">\n\t\t\t\t<a [routerLink]=\"['/store']\" class=\"full-width\">\n\t\t\t\t\t<md-grid-tile-header fxLayout=\"row\" fxLayoutAlign=\"center center\">{{vendor}}</md-grid-tile-header>\n\t\t\t\t\t<img src=\"assets/img/product.jpg\">\n\t\t\t\t\t<md-grid-tile-footer [ngStyle]=\"{'background-color': colors[i]}\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\t\t\t\t\t\t<div class=\"countdown-timer\">\n\t\t\t\t\t\t\t<span> 90d </span>\n\t\t\t\t\t\t\t<span> 19h </span>\n\t\t\t\t\t\t\t<span> 20m </span>\n\t\t\t\t\t\t\t<span> 40s </span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</md-grid-tile-footer>\n\t\t\t\t</a>\n\t\t\t</md-grid-tile>\n\t\t</md-grid-list>\n\t</md-tab>\n</md-tab-group>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-grid/store-grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-store-grid .mat-tab-group {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n  app-store-grid .mat-tab-group .mat-tab-body-wrapper {\n    width: 100%;\n    box-shadow: 0px 0px 5px #000000;\n    padding: 10px; }\n  app-store-grid .mat-tab-group .mat-tab-header .mat-ink-bar {\n    display: none; }\n  app-store-grid .mat-tab-group .mat-tab-label {\n    width: 50px;\n    height: 50px;\n    padding: 0px;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.54);\n    margin: 10px;\n    min-width: initial;\n    opacity: 1;\n    color: rgba(0, 0, 0, 0.87); }\n  app-store-grid .mat-tab-group .mat-tab-label[aria-selected=\"true\"] {\n    background-color: #009688;\n    color: #fff; }\n  app-store-grid .mat-tab-group .mat-tab-header-pagination {\n    display: block;\n    margin-top: 27px;\n    margin-left: 15px; }\n    app-store-grid .mat-tab-group .mat-tab-header-pagination div {\n      border-color: rgba(0, 0, 0, 0.87); }\n  app-store-grid .mat-tab-group .mat-tab-header-pagination-before {\n    margin-top: 29px; }\n\napp-store-grid .mat-grid-tile-header {\n  text-transform: uppercase;\n  background: #000 !important; }\n\napp-store-grid .mat-grid-tile-footer .countdown-timer {\n  font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-grid/store-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreGridComponent = (function () {
    function StoreGridComponent() {
        this.selectedTab = 0;
        this.colors = ['rgba(244, 67, 54, 0.5)', 'rgba(96, 125, 139, 0.5)', 'rgba(156, 39, 176, 0.5)', 'rgba(255, 87, 34, 0.5)', 'rgba(63, 81, 181, 0.5)', 'rgba(255, 193, 7, 0.5)', 'rgba(0, 188, 212, 0.5)', 'rgba(139, 195, 74, 0.5)', 'rgba(76, 175, 80, 0.5)', 'rgba(0, 150, 136, 0.5)', 'rgba(255, 235, 59, 0.5)', 'rgba(33, 150, 243, 0.5)', 'rgba(255, 152, 0, 0.5)', 'rgba(103, 58, 183, 0.5)', 'rgba(121, 85, 72, 0.5)', 'rgba(233, 30, 99, 0.5)'];
        //colors = [ '#F44336', '#607D8B', '#9C27B0', '#FF5722', '#3F51B5', '#FFC107', '#00BCD4', '#8BC34A', '#4CAF50', '#009688', '#FFEB3B', '#2196F3', '#FF9800', '#673AB7', '#795548', '#E91E63' ];
        this.vendors = ['marc jacob', 'fendi', 'givenchy', 'dolce and gabbana', 'adidas', 'gucci', 'louis vuiton', 'prada', 'chloe', 'marc jacoba', 'fendib', 'givenchyc'];
    }
    StoreGridComponent.prototype.ngOnInit = function () {
        this.cols = 4;
        /*setInterval(() => {
            if (this.selectedTab == 4)
                this.selectedTab = 0;
            else
                this.selectedTab++;
        }, 3000);*/
        var before = document.getElementsByClassName("mat-tab-header-pagination-before");
        var after = document.getElementsByClassName("mat-tab-header-pagination-after");
        var self = this;
        for (var i = 0; i < before.length; i++) {
            before[i].addEventListener("click", function () {
                if (self.selectedTab == 0)
                    self.selectedTab = 4;
                else
                    self.selectedTab--;
            });
        }
        for (var i = 0; i < after.length; i++) {
            after[i].addEventListener("click", function () {
                if (self.selectedTab == 4)
                    self.selectedTab = 0;
                else
                    self.selectedTab++;
            });
        }
    };
    StoreGridComponent.prototype.selectChange = function ($event) {
        this.selectedTab = $event.index;
    };
    StoreGridComponent.prototype.onResize = function () {
        var width = window.innerWidth;
        if (width > 1280)
            this.cols = 4;
        else if (width > 600)
            this.cols = 3;
        else
            this.cols = 2;
    };
    return StoreGridComponent;
}());
StoreGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store-grid',
        template: __webpack_require__("../../../../../src/app/components/front/partials/store-grid/store-grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/store-grid/store-grid.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], StoreGridComponent);

//# sourceMappingURL=store-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-summary/store-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"store-summary-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n\t<img class=\"owner-photo\" src=\"assets/img/store-summary.png\">\n\t<label class=\"store-name\"> Bag's shop </label>\n\t<span [ngStyle]=\"{'color': '#009688'}\">\n\t\t<md-icon *ngFor=\"let j of [1, 2, 3, 4, 5]\">star_border</md-icon>\n\t</span>\n\t<span class=\"review-count\"> (131) </span>\n\t<button md-button>\n\t\t<md-icon>mail</md-icon>\n\t\tContact the seller\n\t</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-summary/store-summary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-button {\n  border-radius: 5px;\n  border: 2px solid #444;\n  margin-top: 10px; }\n\n.mat-icon {\n  width: 19px;\n  height: 19px;\n  font-size: 19px; }\n\n.store-name {\n  text-transform: uppercase;\n  margin-top: 10px;\n  font-size: 16px; }\n\n.store-summary-wrapper {\n  padding: 10px 50px;\n  background-color: #ddd;\n  margin: 0px 10px; }\n\n.owner-photo {\n  box-shadow: 0px 0px 10px #999;\n  border-radius: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/partials/store-summary/store-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreSummaryComponent = (function () {
    function StoreSummaryComponent() {
    }
    StoreSummaryComponent.prototype.ngOnInit = function () {
    };
    return StoreSummaryComponent;
}());
StoreSummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-store-summary',
        template: __webpack_require__("../../../../../src/app/components/front/partials/store-summary/store-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/front/partials/store-summary/store-summary.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StoreSummaryComponent);

//# sourceMappingURL=store-summary.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/maintenance_back.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "maintenance_back.b99ed5e8ad951a6da041.png";

/***/ }),

/***/ "../../../../ngx-slick/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlickModule; });
/* unused harmony export SlickComponent */
/* unused harmony export SlickItemDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");




/**
 * Slick component
 */
var SlickComponent = (function () {
    /**
     * Constructor
     * @param {?} el
     * @param {?} zone
     */
    function SlickComponent(el, zone) {
        this.el = el;
        this.zone = zone;
        this.afterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.beforeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.breakpoint = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.destroy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.slides = [];
        this.initialized = false;
    }
    /**
     * On component destroy
     * @return {?}
     */
    SlickComponent.prototype.ngOnDestroy = function () {
        this.unslick();
    };
    /**
     * On component view init
     * @return {?}
     */
    SlickComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * init slick
     * @return {?}
     */
    SlickComponent.prototype.initSlick = function () {
        var _this = this;
        var /** @type {?} */ self = this;
        this.zone.runOutsideAngular(function () {
            _this.$instance = $(_this.el.nativeElement).slick(_this.config);
            _this.initialized = true;
            _this.$instance.on('afterChange', function (event, slick, currentSlide) {
                self.zone.run(function () {
                    self.afterChange.emit({ event: event, slick: slick, currentSlide: currentSlide });
                });
            });
            _this.$instance.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                self.zone.run(function () {
                    self.beforeChange.emit({ event: event, slick: slick, currentSlide: currentSlide, nextSlide: nextSlide });
                });
            });
            _this.$instance.on('breakpoint', function (event, slick, breakpoint) {
                self.zone.run(function () {
                    self.breakpoint.emit({ event: event, slick: slick, breakpoint: breakpoint });
                });
            });
            _this.$instance.on('destroy', function (event, slick) {
                self.zone.run(function () {
                    self.destroy.emit({ event: event, slick: slick });
                });
            });
        });
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickComponent.prototype.addSlide = function (slickItem) {
        if (!this.initialized) {
            this.initSlick();
        }
        this.slides.push(slickItem);
        this.$instance.slick('slickAdd', slickItem.el.nativeElement);
    };
    /**
     * @param {?} slickItem
     * @return {?}
     */
    SlickComponent.prototype.removeSlide = function (slickItem) {
        var /** @type {?} */ idx = this.slides.indexOf(slickItem);
        this.$instance.slick('slickRemove', idx);
        this.slides = this.slides.filter(function (s) { return s !== slickItem; });
    };
    /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    SlickComponent.prototype.slickGoTo = function (index) {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickGoTo', index);
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickNext = function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickNext');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickPrev = function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickPrev');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickPause = function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickPause');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.slickPlay = function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('slickPlay');
        });
    };
    /**
     * @return {?}
     */
    SlickComponent.prototype.unslick = function () {
        var _this = this;
        this.zone.run(function () {
            _this.$instance.slick('unslick');
        });
    };
    return SlickComponent;
}());
SlickComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngx-slick',
                exportAs: 'slick-modal',
                providers: [
                    {
                        provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SlickComponent; }),
                        multi: true
                    }
                ],
                template: '<ng-content></ng-content>',
            },] },
];
/**
 * @nocollapse
 */
SlickComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
SlickComponent.propDecorators = {
    'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'afterChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'beforeChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'breakpoint': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'destroy': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
var SlickItemDirective = (function () {
    /**
     * @param {?} el
     * @param {?} carousel
     */
    function SlickItemDirective(el, carousel) {
        this.el = el;
        this.carousel = carousel;
    }
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngAfterViewInit = function () {
        this.carousel.addSlide(this);
    };
    /**
     * @return {?}
     */
    SlickItemDirective.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    return SlickItemDirective;
}());
SlickItemDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngxSlickItem]',
            },] },
];
/**
 * @nocollapse
 */
SlickItemDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: SlickComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };

var SlickModule = (function () {
    function SlickModule() {
    }
    /**
     * @return {?}
     */
    SlickModule.forRoot = function () {
        return {
            ngModule: SlickModule,
        };
    };
    return SlickModule;
}());
SlickModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
                ],
                declarations: [
                    SlickComponent,
                    SlickItemDirective,
                ],
                exports: [
                    SlickComponent,
                    SlickItemDirective,
                ]
            },] },
];
/**
 * @nocollapse
 */
SlickModule.ctorParameters = function () { return []; };




/***/ }),

/***/ "../../../../rxjs/AsyncSubject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
/**
 * @class AsyncSubject<T>
 */
var AsyncSubject = (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        _super.apply(this, arguments);
        this.value = null;
        this.hasNext = false;
        this.hasCompleted = false;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(Subject_1.Subject));
exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=AsyncSubject.js.map

/***/ }),

/***/ "../../../../rxjs/ReplaySubject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var queue_1 = __webpack_require__("../../../../rxjs/scheduler/queue.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var observeOn_1 = __webpack_require__("../../../../rxjs/operators/observeOn.js");
var ObjectUnsubscribedError_1 = __webpack_require__("../../../../rxjs/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__("../../../../rxjs/SubjectSubscription.js");
/**
 * @class ReplaySubject<T>
 */
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        _super.call(this);
        this.scheduler = scheduler;
        this._events = [];
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function (value) {
        var now = this._getNow();
        this._events.push(new ReplayEvent(now, value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _events = this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        var len = _events.length;
        for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "../../../../rxjs/Rx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
exports.Subject = Subject_1.Subject;
exports.AnonymousSubject = Subject_1.AnonymousSubject;
/* tslint:enable:no-unused-variable */
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
exports.Observable = Observable_1.Observable;
// statics
/* tslint:disable:no-use-before-declare */
__webpack_require__("../../../../rxjs/add/observable/bindCallback.js");
__webpack_require__("../../../../rxjs/add/observable/bindNodeCallback.js");
__webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
__webpack_require__("../../../../rxjs/add/observable/concat.js");
__webpack_require__("../../../../rxjs/add/observable/defer.js");
__webpack_require__("../../../../rxjs/add/observable/empty.js");
__webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
__webpack_require__("../../../../rxjs/add/observable/from.js");
__webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
__webpack_require__("../../../../rxjs/add/observable/fromEventPattern.js");
__webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
__webpack_require__("../../../../rxjs/add/observable/generate.js");
__webpack_require__("../../../../rxjs/add/observable/if.js");
__webpack_require__("../../../../rxjs/add/observable/interval.js");
__webpack_require__("../../../../rxjs/add/observable/merge.js");
__webpack_require__("../../../../rxjs/add/observable/race.js");
__webpack_require__("../../../../rxjs/add/observable/never.js");
__webpack_require__("../../../../rxjs/add/observable/of.js");
__webpack_require__("../../../../rxjs/add/observable/onErrorResumeNext.js");
__webpack_require__("../../../../rxjs/add/observable/pairs.js");
__webpack_require__("../../../../rxjs/add/observable/range.js");
__webpack_require__("../../../../rxjs/add/observable/using.js");
__webpack_require__("../../../../rxjs/add/observable/throw.js");
__webpack_require__("../../../../rxjs/add/observable/timer.js");
__webpack_require__("../../../../rxjs/add/observable/zip.js");
//dom
__webpack_require__("../../../../rxjs/add/observable/dom/ajax.js");
__webpack_require__("../../../../rxjs/add/observable/dom/webSocket.js");
//operators
__webpack_require__("../../../../rxjs/add/operator/buffer.js");
__webpack_require__("../../../../rxjs/add/operator/bufferCount.js");
__webpack_require__("../../../../rxjs/add/operator/bufferTime.js");
__webpack_require__("../../../../rxjs/add/operator/bufferToggle.js");
__webpack_require__("../../../../rxjs/add/operator/bufferWhen.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
__webpack_require__("../../../../rxjs/add/operator/combineAll.js");
__webpack_require__("../../../../rxjs/add/operator/combineLatest.js");
__webpack_require__("../../../../rxjs/add/operator/concat.js");
__webpack_require__("../../../../rxjs/add/operator/concatAll.js");
__webpack_require__("../../../../rxjs/add/operator/concatMap.js");
__webpack_require__("../../../../rxjs/add/operator/concatMapTo.js");
__webpack_require__("../../../../rxjs/add/operator/count.js");
__webpack_require__("../../../../rxjs/add/operator/dematerialize.js");
__webpack_require__("../../../../rxjs/add/operator/debounce.js");
__webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
__webpack_require__("../../../../rxjs/add/operator/defaultIfEmpty.js");
__webpack_require__("../../../../rxjs/add/operator/delay.js");
__webpack_require__("../../../../rxjs/add/operator/delayWhen.js");
__webpack_require__("../../../../rxjs/add/operator/distinct.js");
__webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
__webpack_require__("../../../../rxjs/add/operator/distinctUntilKeyChanged.js");
__webpack_require__("../../../../rxjs/add/operator/do.js");
__webpack_require__("../../../../rxjs/add/operator/exhaust.js");
__webpack_require__("../../../../rxjs/add/operator/exhaustMap.js");
__webpack_require__("../../../../rxjs/add/operator/expand.js");
__webpack_require__("../../../../rxjs/add/operator/elementAt.js");
__webpack_require__("../../../../rxjs/add/operator/filter.js");
__webpack_require__("../../../../rxjs/add/operator/finally.js");
__webpack_require__("../../../../rxjs/add/operator/find.js");
__webpack_require__("../../../../rxjs/add/operator/findIndex.js");
__webpack_require__("../../../../rxjs/add/operator/first.js");
__webpack_require__("../../../../rxjs/add/operator/groupBy.js");
__webpack_require__("../../../../rxjs/add/operator/ignoreElements.js");
__webpack_require__("../../../../rxjs/add/operator/isEmpty.js");
__webpack_require__("../../../../rxjs/add/operator/audit.js");
__webpack_require__("../../../../rxjs/add/operator/auditTime.js");
__webpack_require__("../../../../rxjs/add/operator/last.js");
__webpack_require__("../../../../rxjs/add/operator/let.js");
__webpack_require__("../../../../rxjs/add/operator/every.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
__webpack_require__("../../../../rxjs/add/operator/mapTo.js");
__webpack_require__("../../../../rxjs/add/operator/materialize.js");
__webpack_require__("../../../../rxjs/add/operator/max.js");
__webpack_require__("../../../../rxjs/add/operator/merge.js");
__webpack_require__("../../../../rxjs/add/operator/mergeAll.js");
__webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
__webpack_require__("../../../../rxjs/add/operator/mergeMapTo.js");
__webpack_require__("../../../../rxjs/add/operator/mergeScan.js");
__webpack_require__("../../../../rxjs/add/operator/min.js");
__webpack_require__("../../../../rxjs/add/operator/multicast.js");
__webpack_require__("../../../../rxjs/add/operator/observeOn.js");
__webpack_require__("../../../../rxjs/add/operator/onErrorResumeNext.js");
__webpack_require__("../../../../rxjs/add/operator/pairwise.js");
__webpack_require__("../../../../rxjs/add/operator/partition.js");
__webpack_require__("../../../../rxjs/add/operator/pluck.js");
__webpack_require__("../../../../rxjs/add/operator/publish.js");
__webpack_require__("../../../../rxjs/add/operator/publishBehavior.js");
__webpack_require__("../../../../rxjs/add/operator/publishReplay.js");
__webpack_require__("../../../../rxjs/add/operator/publishLast.js");
__webpack_require__("../../../../rxjs/add/operator/race.js");
__webpack_require__("../../../../rxjs/add/operator/reduce.js");
__webpack_require__("../../../../rxjs/add/operator/repeat.js");
__webpack_require__("../../../../rxjs/add/operator/repeatWhen.js");
__webpack_require__("../../../../rxjs/add/operator/retry.js");
__webpack_require__("../../../../rxjs/add/operator/retryWhen.js");
__webpack_require__("../../../../rxjs/add/operator/sample.js");
__webpack_require__("../../../../rxjs/add/operator/sampleTime.js");
__webpack_require__("../../../../rxjs/add/operator/scan.js");
__webpack_require__("../../../../rxjs/add/operator/sequenceEqual.js");
__webpack_require__("../../../../rxjs/add/operator/share.js");
__webpack_require__("../../../../rxjs/add/operator/shareReplay.js");
__webpack_require__("../../../../rxjs/add/operator/single.js");
__webpack_require__("../../../../rxjs/add/operator/skip.js");
__webpack_require__("../../../../rxjs/add/operator/skipLast.js");
__webpack_require__("../../../../rxjs/add/operator/skipUntil.js");
__webpack_require__("../../../../rxjs/add/operator/skipWhile.js");
__webpack_require__("../../../../rxjs/add/operator/startWith.js");
__webpack_require__("../../../../rxjs/add/operator/subscribeOn.js");
__webpack_require__("../../../../rxjs/add/operator/switch.js");
__webpack_require__("../../../../rxjs/add/operator/switchMap.js");
__webpack_require__("../../../../rxjs/add/operator/switchMapTo.js");
__webpack_require__("../../../../rxjs/add/operator/take.js");
__webpack_require__("../../../../rxjs/add/operator/takeLast.js");
__webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
__webpack_require__("../../../../rxjs/add/operator/takeWhile.js");
__webpack_require__("../../../../rxjs/add/operator/throttle.js");
__webpack_require__("../../../../rxjs/add/operator/throttleTime.js");
__webpack_require__("../../../../rxjs/add/operator/timeInterval.js");
__webpack_require__("../../../../rxjs/add/operator/timeout.js");
__webpack_require__("../../../../rxjs/add/operator/timeoutWith.js");
__webpack_require__("../../../../rxjs/add/operator/timestamp.js");
__webpack_require__("../../../../rxjs/add/operator/toArray.js");
__webpack_require__("../../../../rxjs/add/operator/toPromise.js");
__webpack_require__("../../../../rxjs/add/operator/window.js");
__webpack_require__("../../../../rxjs/add/operator/windowCount.js");
__webpack_require__("../../../../rxjs/add/operator/windowTime.js");
__webpack_require__("../../../../rxjs/add/operator/windowToggle.js");
__webpack_require__("../../../../rxjs/add/operator/windowWhen.js");
__webpack_require__("../../../../rxjs/add/operator/withLatestFrom.js");
__webpack_require__("../../../../rxjs/add/operator/zip.js");
__webpack_require__("../../../../rxjs/add/operator/zipAll.js");
/* tslint:disable:no-unused-variable */
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
exports.Subscriber = Subscriber_1.Subscriber;
var AsyncSubject_1 = __webpack_require__("../../../../rxjs/AsyncSubject.js");
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var ReplaySubject_1 = __webpack_require__("../../../../rxjs/ReplaySubject.js");
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var ConnectableObservable_1 = __webpack_require__("../../../../rxjs/observable/ConnectableObservable.js");
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var Notification_1 = __webpack_require__("../../../../rxjs/Notification.js");
exports.Notification = Notification_1.Notification;
var EmptyError_1 = __webpack_require__("../../../../rxjs/util/EmptyError.js");
exports.EmptyError = EmptyError_1.EmptyError;
var ArgumentOutOfRangeError_1 = __webpack_require__("../../../../rxjs/util/ArgumentOutOfRangeError.js");
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var ObjectUnsubscribedError_1 = __webpack_require__("../../../../rxjs/util/ObjectUnsubscribedError.js");
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var TimeoutError_1 = __webpack_require__("../../../../rxjs/util/TimeoutError.js");
exports.TimeoutError = TimeoutError_1.TimeoutError;
var UnsubscriptionError_1 = __webpack_require__("../../../../rxjs/util/UnsubscriptionError.js");
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var timeInterval_1 = __webpack_require__("../../../../rxjs/operator/timeInterval.js");
exports.TimeInterval = timeInterval_1.TimeInterval;
var timestamp_1 = __webpack_require__("../../../../rxjs/operators/timestamp.js");
exports.Timestamp = timestamp_1.Timestamp;
var TestScheduler_1 = __webpack_require__("../../../../rxjs/testing/TestScheduler.js");
exports.TestScheduler = TestScheduler_1.TestScheduler;
var VirtualTimeScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/VirtualTimeScheduler.js");
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
var AjaxObservable_1 = __webpack_require__("../../../../rxjs/observable/dom/AjaxObservable.js");
exports.AjaxResponse = AjaxObservable_1.AjaxResponse;
exports.AjaxError = AjaxObservable_1.AjaxError;
exports.AjaxTimeoutError = AjaxObservable_1.AjaxTimeoutError;
var pipe_1 = __webpack_require__("../../../../rxjs/util/pipe.js");
exports.pipe = pipe_1.pipe;
var asap_1 = __webpack_require__("../../../../rxjs/scheduler/asap.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var queue_1 = __webpack_require__("../../../../rxjs/scheduler/queue.js");
var animationFrame_1 = __webpack_require__("../../../../rxjs/scheduler/animationFrame.js");
var rxSubscriber_1 = __webpack_require__("../../../../rxjs/symbol/rxSubscriber.js");
var iterator_1 = __webpack_require__("../../../../rxjs/symbol/iterator.js");
var observable_1 = __webpack_require__("../../../../rxjs/symbol/observable.js");
var _operators = __webpack_require__("../../../../rxjs/operators/index.js");
exports.operators = _operators;
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: asap_1.asap,
    queue: queue_1.queue,
    animationFrame: animationFrame_1.animationFrame,
    async: async_1.async
};
exports.Scheduler = Scheduler;
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: rxSubscriber_1.rxSubscriber,
    observable: observable_1.observable,
    iterator: iterator_1.iterator
};
exports.Symbol = Symbol;
//# sourceMappingURL=Rx.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/bindCallback.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bindCallback_1 = __webpack_require__("../../../../rxjs/observable/bindCallback.js");
Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/bindNodeCallback.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bindNodeCallback_1 = __webpack_require__("../../../../rxjs/observable/bindNodeCallback.js");
Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/combineLatest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var combineLatest_1 = __webpack_require__("../../../../rxjs/observable/combineLatest.js");
Observable_1.Observable.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/concat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var concat_1 = __webpack_require__("../../../../rxjs/observable/concat.js");
Observable_1.Observable.concat = concat_1.concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/defer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var defer_1 = __webpack_require__("../../../../rxjs/observable/defer.js");
Observable_1.Observable.defer = defer_1.defer;
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/dom/ajax.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var ajax_1 = __webpack_require__("../../../../rxjs/observable/dom/ajax.js");
Observable_1.Observable.ajax = ajax_1.ajax;
//# sourceMappingURL=ajax.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/dom/webSocket.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var webSocket_1 = __webpack_require__("../../../../rxjs/observable/dom/webSocket.js");
Observable_1.Observable.webSocket = webSocket_1.webSocket;
//# sourceMappingURL=webSocket.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/empty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var empty_1 = __webpack_require__("../../../../rxjs/observable/empty.js");
Observable_1.Observable.empty = empty_1.empty;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var from_1 = __webpack_require__("../../../../rxjs/observable/from.js");
Observable_1.Observable.from = from_1.from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/fromEventPattern.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var fromEventPattern_1 = __webpack_require__("../../../../rxjs/observable/fromEventPattern.js");
Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/fromPromise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var fromPromise_1 = __webpack_require__("../../../../rxjs/observable/fromPromise.js");
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/generate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var generate_1 = __webpack_require__("../../../../rxjs/observable/generate.js");
Observable_1.Observable.generate = generate_1.generate;
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/if.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var if_1 = __webpack_require__("../../../../rxjs/observable/if.js");
Observable_1.Observable.if = if_1._if;
//# sourceMappingURL=if.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/never.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var never_1 = __webpack_require__("../../../../rxjs/observable/never.js");
Observable_1.Observable.never = never_1.never;
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/onErrorResumeNext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var onErrorResumeNext_1 = __webpack_require__("../../../../rxjs/observable/onErrorResumeNext.js");
Observable_1.Observable.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/pairs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var pairs_1 = __webpack_require__("../../../../rxjs/observable/pairs.js");
Observable_1.Observable.pairs = pairs_1.pairs;
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/race.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var race_1 = __webpack_require__("../../../../rxjs/observable/race.js");
Observable_1.Observable.race = race_1.race;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/range.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var range_1 = __webpack_require__("../../../../rxjs/observable/range.js");
Observable_1.Observable.range = range_1.range;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/throw.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var throw_1 = __webpack_require__("../../../../rxjs/observable/throw.js");
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/timer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var timer_1 = __webpack_require__("../../../../rxjs/observable/timer.js");
Observable_1.Observable.timer = timer_1.timer;
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/using.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var using_1 = __webpack_require__("../../../../rxjs/observable/using.js");
Observable_1.Observable.using = using_1.using;
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/zip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var zip_1 = __webpack_require__("../../../../rxjs/observable/zip.js");
Observable_1.Observable.zip = zip_1.zip;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/audit.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var audit_1 = __webpack_require__("../../../../rxjs/operator/audit.js");
Observable_1.Observable.prototype.audit = audit_1.audit;
//# sourceMappingURL=audit.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/auditTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var auditTime_1 = __webpack_require__("../../../../rxjs/operator/auditTime.js");
Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
//# sourceMappingURL=auditTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var buffer_1 = __webpack_require__("../../../../rxjs/operator/buffer.js");
Observable_1.Observable.prototype.buffer = buffer_1.buffer;
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferCount_1 = __webpack_require__("../../../../rxjs/operator/bufferCount.js");
Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
//# sourceMappingURL=bufferCount.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferTime_1 = __webpack_require__("../../../../rxjs/operator/bufferTime.js");
Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
//# sourceMappingURL=bufferTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferToggle_1 = __webpack_require__("../../../../rxjs/operator/bufferToggle.js");
Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
//# sourceMappingURL=bufferToggle.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferWhen_1 = __webpack_require__("../../../../rxjs/operator/bufferWhen.js");
Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
//# sourceMappingURL=bufferWhen.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/catch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var catch_1 = __webpack_require__("../../../../rxjs/operator/catch.js");
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/combineAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var combineAll_1 = __webpack_require__("../../../../rxjs/operator/combineAll.js");
Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/combineLatest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var combineLatest_1 = __webpack_require__("../../../../rxjs/operator/combineLatest.js");
Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/concat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var concat_1 = __webpack_require__("../../../../rxjs/operator/concat.js");
Observable_1.Observable.prototype.concat = concat_1.concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/concatAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var concatAll_1 = __webpack_require__("../../../../rxjs/operator/concatAll.js");
Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/concatMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var concatMap_1 = __webpack_require__("../../../../rxjs/operator/concatMap.js");
Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
//# sourceMappingURL=concatMap.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/concatMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var concatMapTo_1 = __webpack_require__("../../../../rxjs/operator/concatMapTo.js");
Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/count.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var count_1 = __webpack_require__("../../../../rxjs/operator/count.js");
Observable_1.Observable.prototype.count = count_1.count;
//# sourceMappingURL=count.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var debounce_1 = __webpack_require__("../../../../rxjs/operator/debounce.js");
Observable_1.Observable.prototype.debounce = debounce_1.debounce;
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/defaultIfEmpty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var defaultIfEmpty_1 = __webpack_require__("../../../../rxjs/operator/defaultIfEmpty.js");
Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/delay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var delay_1 = __webpack_require__("../../../../rxjs/operator/delay.js");
Observable_1.Observable.prototype.delay = delay_1.delay;
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/delayWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var delayWhen_1 = __webpack_require__("../../../../rxjs/operator/delayWhen.js");
Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
//# sourceMappingURL=delayWhen.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/dematerialize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var dematerialize_1 = __webpack_require__("../../../../rxjs/operator/dematerialize.js");
Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
//# sourceMappingURL=dematerialize.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/distinct.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var distinct_1 = __webpack_require__("../../../../rxjs/operator/distinct.js");
Observable_1.Observable.prototype.distinct = distinct_1.distinct;
//# sourceMappingURL=distinct.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/distinctUntilKeyChanged.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var distinctUntilKeyChanged_1 = __webpack_require__("../../../../rxjs/operator/distinctUntilKeyChanged.js");
Observable_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/do.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var do_1 = __webpack_require__("../../../../rxjs/operator/do.js");
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/elementAt.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var elementAt_1 = __webpack_require__("../../../../rxjs/operator/elementAt.js");
Observable_1.Observable.prototype.elementAt = elementAt_1.elementAt;
//# sourceMappingURL=elementAt.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/every.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var every_1 = __webpack_require__("../../../../rxjs/operator/every.js");
Observable_1.Observable.prototype.every = every_1.every;
//# sourceMappingURL=every.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/exhaust.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var exhaust_1 = __webpack_require__("../../../../rxjs/operator/exhaust.js");
Observable_1.Observable.prototype.exhaust = exhaust_1.exhaust;
//# sourceMappingURL=exhaust.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/exhaustMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var exhaustMap_1 = __webpack_require__("../../../../rxjs/operator/exhaustMap.js");
Observable_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;
//# sourceMappingURL=exhaustMap.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/expand.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var expand_1 = __webpack_require__("../../../../rxjs/operator/expand.js");
Observable_1.Observable.prototype.expand = expand_1.expand;
//# sourceMappingURL=expand.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/finally.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var finally_1 = __webpack_require__("../../../../rxjs/operator/finally.js");
Observable_1.Observable.prototype.finally = finally_1._finally;
Observable_1.Observable.prototype._finally = finally_1._finally;
//# sourceMappingURL=finally.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/find.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var find_1 = __webpack_require__("../../../../rxjs/operator/find.js");
Observable_1.Observable.prototype.find = find_1.find;
//# sourceMappingURL=find.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/findIndex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var findIndex_1 = __webpack_require__("../../../../rxjs/operator/findIndex.js");
Observable_1.Observable.prototype.findIndex = findIndex_1.findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/first.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var first_1 = __webpack_require__("../../../../rxjs/operator/first.js");
Observable_1.Observable.prototype.first = first_1.first;
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/groupBy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var groupBy_1 = __webpack_require__("../../../../rxjs/operator/groupBy.js");
Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/ignoreElements.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var ignoreElements_1 = __webpack_require__("../../../../rxjs/operator/ignoreElements.js");
Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
//# sourceMappingURL=ignoreElements.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/isEmpty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var isEmpty_1 = __webpack_require__("../../../../rxjs/operator/isEmpty.js");
Observable_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;
//# sourceMappingURL=isEmpty.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/last.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var last_1 = __webpack_require__("../../../../rxjs/operator/last.js");
Observable_1.Observable.prototype.last = last_1.last;
//# sourceMappingURL=last.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/let.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var let_1 = __webpack_require__("../../../../rxjs/operator/let.js");
Observable_1.Observable.prototype.let = let_1.letProto;
Observable_1.Observable.prototype.letBind = let_1.letProto;
//# sourceMappingURL=let.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mapTo_1 = __webpack_require__("../../../../rxjs/operator/mapTo.js");
Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
//# sourceMappingURL=mapTo.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/materialize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var materialize_1 = __webpack_require__("../../../../rxjs/operator/materialize.js");
Observable_1.Observable.prototype.materialize = materialize_1.materialize;
//# sourceMappingURL=materialize.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/max.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var max_1 = __webpack_require__("../../../../rxjs/operator/max.js");
Observable_1.Observable.prototype.max = max_1.max;
//# sourceMappingURL=max.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/merge.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var merge_1 = __webpack_require__("../../../../rxjs/operator/merge.js");
Observable_1.Observable.prototype.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mergeAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mergeAll_1 = __webpack_require__("../../../../rxjs/operator/mergeAll.js");
Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mergeMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mergeMap_1 = __webpack_require__("../../../../rxjs/operator/mergeMap.js");
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mergeMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mergeMapTo_1 = __webpack_require__("../../../../rxjs/operator/mergeMapTo.js");
Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/mergeScan.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var mergeScan_1 = __webpack_require__("../../../../rxjs/operator/mergeScan.js");
Observable_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;
//# sourceMappingURL=mergeScan.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var min_1 = __webpack_require__("../../../../rxjs/operator/min.js");
Observable_1.Observable.prototype.min = min_1.min;
//# sourceMappingURL=min.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/multicast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var multicast_1 = __webpack_require__("../../../../rxjs/operator/multicast.js");
Observable_1.Observable.prototype.multicast = multicast_1.multicast;
//# sourceMappingURL=multicast.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/observeOn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var observeOn_1 = __webpack_require__("../../../../rxjs/operator/observeOn.js");
Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/onErrorResumeNext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var onErrorResumeNext_1 = __webpack_require__("../../../../rxjs/operator/onErrorResumeNext.js");
Observable_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/pairwise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var pairwise_1 = __webpack_require__("../../../../rxjs/operator/pairwise.js");
Observable_1.Observable.prototype.pairwise = pairwise_1.pairwise;
//# sourceMappingURL=pairwise.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/partition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var partition_1 = __webpack_require__("../../../../rxjs/operator/partition.js");
Observable_1.Observable.prototype.partition = partition_1.partition;
//# sourceMappingURL=partition.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/pluck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var pluck_1 = __webpack_require__("../../../../rxjs/operator/pluck.js");
Observable_1.Observable.prototype.pluck = pluck_1.pluck;
//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/publish.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var publish_1 = __webpack_require__("../../../../rxjs/operator/publish.js");
Observable_1.Observable.prototype.publish = publish_1.publish;
//# sourceMappingURL=publish.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/publishBehavior.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var publishBehavior_1 = __webpack_require__("../../../../rxjs/operator/publishBehavior.js");
Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/publishLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var publishLast_1 = __webpack_require__("../../../../rxjs/operator/publishLast.js");
Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/publishReplay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var publishReplay_1 = __webpack_require__("../../../../rxjs/operator/publishReplay.js");
Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/race.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var race_1 = __webpack_require__("../../../../rxjs/operator/race.js");
Observable_1.Observable.prototype.race = race_1.race;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/reduce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var reduce_1 = __webpack_require__("../../../../rxjs/operator/reduce.js");
Observable_1.Observable.prototype.reduce = reduce_1.reduce;
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/repeat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var repeat_1 = __webpack_require__("../../../../rxjs/operator/repeat.js");
Observable_1.Observable.prototype.repeat = repeat_1.repeat;
//# sourceMappingURL=repeat.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/repeatWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var repeatWhen_1 = __webpack_require__("../../../../rxjs/operator/repeatWhen.js");
Observable_1.Observable.prototype.repeatWhen = repeatWhen_1.repeatWhen;
//# sourceMappingURL=repeatWhen.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/retry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var retry_1 = __webpack_require__("../../../../rxjs/operator/retry.js");
Observable_1.Observable.prototype.retry = retry_1.retry;
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/retryWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var retryWhen_1 = __webpack_require__("../../../../rxjs/operator/retryWhen.js");
Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/sample.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var sample_1 = __webpack_require__("../../../../rxjs/operator/sample.js");
Observable_1.Observable.prototype.sample = sample_1.sample;
//# sourceMappingURL=sample.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/sampleTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var sampleTime_1 = __webpack_require__("../../../../rxjs/operator/sampleTime.js");
Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/scan.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var scan_1 = __webpack_require__("../../../../rxjs/operator/scan.js");
Observable_1.Observable.prototype.scan = scan_1.scan;
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/sequenceEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var sequenceEqual_1 = __webpack_require__("../../../../rxjs/operator/sequenceEqual.js");
Observable_1.Observable.prototype.sequenceEqual = sequenceEqual_1.sequenceEqual;
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/share.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var share_1 = __webpack_require__("../../../../rxjs/operator/share.js");
Observable_1.Observable.prototype.share = share_1.share;
//# sourceMappingURL=share.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/shareReplay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var shareReplay_1 = __webpack_require__("../../../../rxjs/operator/shareReplay.js");
Observable_1.Observable.prototype.shareReplay = shareReplay_1.shareReplay;
//# sourceMappingURL=shareReplay.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/single.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var single_1 = __webpack_require__("../../../../rxjs/operator/single.js");
Observable_1.Observable.prototype.single = single_1.single;
//# sourceMappingURL=single.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/skip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var skip_1 = __webpack_require__("../../../../rxjs/operator/skip.js");
Observable_1.Observable.prototype.skip = skip_1.skip;
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/skipLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var skipLast_1 = __webpack_require__("../../../../rxjs/operator/skipLast.js");
Observable_1.Observable.prototype.skipLast = skipLast_1.skipLast;
//# sourceMappingURL=skipLast.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/skipUntil.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var skipUntil_1 = __webpack_require__("../../../../rxjs/operator/skipUntil.js");
Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
//# sourceMappingURL=skipUntil.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/subscribeOn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var subscribeOn_1 = __webpack_require__("../../../../rxjs/operator/subscribeOn.js");
Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/switch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var switch_1 = __webpack_require__("../../../../rxjs/operator/switch.js");
Observable_1.Observable.prototype.switch = switch_1._switch;
Observable_1.Observable.prototype._switch = switch_1._switch;
//# sourceMappingURL=switch.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/switchMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var switchMap_1 = __webpack_require__("../../../../rxjs/operator/switchMap.js");
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/switchMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var switchMapTo_1 = __webpack_require__("../../../../rxjs/operator/switchMapTo.js");
Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
//# sourceMappingURL=switchMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/takeLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var takeLast_1 = __webpack_require__("../../../../rxjs/operator/takeLast.js");
Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/takeUntil.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var takeUntil_1 = __webpack_require__("../../../../rxjs/operator/takeUntil.js");
Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/takeWhile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var takeWhile_1 = __webpack_require__("../../../../rxjs/operator/takeWhile.js");
Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
//# sourceMappingURL=takeWhile.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/throttle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var throttle_1 = __webpack_require__("../../../../rxjs/operator/throttle.js");
Observable_1.Observable.prototype.throttle = throttle_1.throttle;
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/throttleTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var throttleTime_1 = __webpack_require__("../../../../rxjs/operator/throttleTime.js");
Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/timeInterval.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var timeInterval_1 = __webpack_require__("../../../../rxjs/operator/timeInterval.js");
Observable_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;
//# sourceMappingURL=timeInterval.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/timeout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var timeout_1 = __webpack_require__("../../../../rxjs/operator/timeout.js");
Observable_1.Observable.prototype.timeout = timeout_1.timeout;
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/timeoutWith.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var timeoutWith_1 = __webpack_require__("../../../../rxjs/operator/timeoutWith.js");
Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
//# sourceMappingURL=timeoutWith.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/timestamp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var timestamp_1 = __webpack_require__("../../../../rxjs/operator/timestamp.js");
Observable_1.Observable.prototype.timestamp = timestamp_1.timestamp;
//# sourceMappingURL=timestamp.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/toArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var toArray_1 = __webpack_require__("../../../../rxjs/operator/toArray.js");
Observable_1.Observable.prototype.toArray = toArray_1.toArray;
//# sourceMappingURL=toArray.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/toPromise.js":
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/window.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var window_1 = __webpack_require__("../../../../rxjs/operator/window.js");
Observable_1.Observable.prototype.window = window_1.window;
//# sourceMappingURL=window.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/windowCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var windowCount_1 = __webpack_require__("../../../../rxjs/operator/windowCount.js");
Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
//# sourceMappingURL=windowCount.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/windowTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var windowTime_1 = __webpack_require__("../../../../rxjs/operator/windowTime.js");
Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
//# sourceMappingURL=windowTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/windowToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var windowToggle_1 = __webpack_require__("../../../../rxjs/operator/windowToggle.js");
Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
//# sourceMappingURL=windowToggle.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/windowWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var windowWhen_1 = __webpack_require__("../../../../rxjs/operator/windowWhen.js");
Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
//# sourceMappingURL=windowWhen.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/withLatestFrom.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var withLatestFrom_1 = __webpack_require__("../../../../rxjs/operator/withLatestFrom.js");
Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/zip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var zip_1 = __webpack_require__("../../../../rxjs/operator/zip.js");
Observable_1.Observable.prototype.zip = zip_1.zipProto;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/zipAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var zipAll_1 = __webpack_require__("../../../../rxjs/operator/zipAll.js");
Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ }),

/***/ "../../../../rxjs/observable/BoundCallbackObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var AsyncSubject_1 = __webpack_require__("../../../../rxjs/AsyncSubject.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundCallbackObservable = (function (_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a callback API to a function that returns an Observable.
     *
     * <span class="informal">Give it a function `f` of type `f(x, callback)` and
     * it will return a function `g` that when called as `g(x)` will output an
     * Observable.</span>
     *
     * `bindCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done.
     *
     * The output of `bindCallback` is a function that takes the same parameters
     * as `func`, except the last one (the callback). When the output function
     * is called with arguments, it will return an Observable. If `func` function
     * calls its callback with one argument, the Observable will emit that value.
     * If on the other hand callback is called with multiple values, resulting
     * Observable will emit an array with these arguments.
     *
     * It is very important to remember, that input function `func` is not called
     * when output function is, but rather when Observable returned by output
     * function is subscribed. This means if `func` makes AJAX request, that request
     * will be made every time someone subscribes to resulting Observable, but not before.
     *
     * Optionally, selector function can be passed to `bindObservable`. That function
     * takes the same arguments as callback, and returns value
     * that will be emitted by Observable instead of callback parameters themselves.
     * Even though by default multiple arguments passed to callback appear in the stream as array,
     * selector function will be called with arguments directly, just as callback would.
     * This means you can imagine default selector (when one is not provided explicitly)
     * as function that aggregates all its arguments into array, or simply returns first argument,
     * if there is only one.
     *
     * Last optional parameter - {@link Scheduler} - can be used to control when call
     * to `func` happens after someone subscribes to Observable, as well as when results
     * passed to callback will be emitted. By default subscription to Observable calls `func`
     * synchronously, but using `Scheduler.async` as last parameter will defer call to input function,
     * just like wrapping that call in `setTimeout` with time `0` would. So if you use async Scheduler
     * and call `subscribe` on output Observable, all function calls that are currently executing,
     * will end before `func` is invoked.
     *
     * When it comes to emitting results passed to callback, by default they are emitted
     * immediately after `func` invokes callback. In particular, if callback is called synchronously,
     * then subscription to resulting Observable will call `next` function synchronously as well.
     * If you want to defer that call, using `Scheduler.async` will, again, do the job.
     * This means that by using `Scheduler.async` you can, in a sense, ensure that `func`
     * always calls its callback asynchronously, thus avoiding terrifying Zalgo.
     *
     * Note that Observable created by output function will always emit only one value
     * and then complete right after. Even if `func` calls callback multiple times, values from
     * second and following calls will never appear in the stream. If you need to
     * listen for multiple calls, you probably want to use {@link fromEvent} or
     * {@link fromEventPattern} instead.
     *
     * If `func` depends on some context (`this` property), that context will be set
     * to the same context that output function has at call time. In particular, if `func`
     * is called as method of some object, in order to preserve proper behaviour,
     * it is recommended to set context of output function to that object as well,
     * provided `func` is not already bound.
     *
     * If input function calls its callback in "node style" (i.e. first argument to callback is
     * optional error parameter signaling whether call failed or not), {@link bindNodeCallback}
     * provides convenient error handling and probably is a better choice.
     * `bindCallback` will treat such functions without any difference and error parameter
     * (whether passed or not) will always be interpreted as regular callback argument.
     *
     *
     * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
     * // Suppose we have jQuery.getJSON('/my/url', callback)
     * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
     * var result = getJSONAsObservable('/my/url');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Receive array of arguments passed to callback</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 5
     *   console.log(b); // 'some string'
     *   console.log(c); // {someProperty: 'someValue'}
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction);
     * boundSomeFunction().subscribe(values => {
     *   console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
     * });
     *
     *
     * @example <caption>Use bindCallback with selector function</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 'a'
     *   console.log(b); // 'b'
     *   console.log(c); // 'c'
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction, (a, b, c) => a + b + c);
     * boundSomeFunction().subscribe(value => {
     *   console.log(value) // 'abc'
     * });
     *
     *
     * @example <caption>Compare behaviour with and without async Scheduler</caption>
     * function iCallMyCallbackSynchronously(cb) {
     *   cb();
     * }
     *
     * const boundSyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously);
     * const boundAsyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);
     *
     * boundSyncFn().subscribe(() => console.log('I was sync!'));
     * boundAsyncFn().subscribe(() => console.log('I was async!'));
     * console.log('This happened...');
     *
     * // Logs:
     * // I was sync!
     * // This happened...
     * // I was async!
     *
     *
     * @example <caption>Use bindCallback on object method</caption>
     * const boundMethod = Rx.Observable.bindCallback(someObject.methodWithCallback);
     * boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
     * .subscribe(subscriber);
     *
     *
     * @see {@link bindNodeCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps those to a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the callback would deliver.
     * @static true
     * @name bindCallback
     * @owner Observable
     */
    BoundCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this.context, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(BoundCallbackObservable.dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    BoundCallbackObservable.dispatch = function (state) {
        var self = this;
        var source = state.source, subscriber = state.subscriber, context = state.context;
        var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
        var subject = source.subject;
        if (!subject) {
            subject = source.subject = new AsyncSubject_1.AsyncSubject();
            var handler = function handlerFn() {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i - 0] = arguments[_i];
                }
                var source = handlerFn.source;
                var selector = source.selector, subject = source.subject;
                if (selector) {
                    var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                    if (result_2 === errorObject_1.errorObject) {
                        self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                    }
                    else {
                        self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                    }
                }
                else {
                    var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                    self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                }
            };
            // use named function to pass values in without closure
            handler.source = source;
            var result = tryCatch_1.tryCatch(callbackFunc).apply(context, args.concat(handler));
            if (result === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
            }
        }
        self.add(subject.subscribe(subscriber));
    };
    return BoundCallbackObservable;
}(Observable_1.Observable));
exports.BoundCallbackObservable = BoundCallbackObservable;
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundCallbackObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/BoundNodeCallbackObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var AsyncSubject_1 = __webpack_require__("../../../../rxjs/AsyncSubject.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundNodeCallbackObservable = (function (_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a Node.js-style callback API to a function that returns an
     * Observable.
     *
     * <span class="informal">It's just like {@link bindCallback}, but the
     * callback is expected to be of type `callback(error, result)`.</span>
     *
     * `bindNodeCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done. The callback function is expected to follow Node.js conventions,
     * where the first argument to the callback is an error object, signaling
     * whether call was successful. If that object is passed to callback, it means
     * something went wrong.
     *
     * The output of `bindNodeCallback` is a function that takes the same
     * parameters as `func`, except the last one (the callback). When the output
     * function is called with arguments, it will return an Observable.
     * If `func` calls its callback with error parameter present, Observable will
     * error with that value as well. If error parameter is not passed, Observable will emit
     * second parameter. If there are more parameters (third and so on),
     * Observable will emit an array with all arguments, except first error argument.
     *
     * Optionally `bindNodeCallback` accepts selector function, which allows you to
     * make resulting Observable emit value computed by selector, instead of regular
     * callback arguments. It works similarly to {@link bindCallback} selector, but
     * Node.js-style error argument will never be passed to that function.
     *
     * Note that `func` will not be called at the same time output function is,
     * but rather whenever resulting Observable is subscribed. By default call to
     * `func` will happen synchronously after subscription, but that can be changed
     * with proper {@link Scheduler} provided as optional third parameter. Scheduler
     * can also control when values from callback will be emitted by Observable.
     * To find out more, check out documentation for {@link bindCallback}, where
     * Scheduler works exactly the same.
     *
     * As in {@link bindCallback}, context (`this` property) of input function will be set to context
     * of returned function, when it is called.
     *
     * After Observable emits value, it will complete immediately. This means
     * even if `func` calls callback again, values from second and consecutive
     * calls will never appear on the stream. If you need to handle functions
     * that call callbacks multiple times, check out {@link fromEvent} or
     * {@link fromEventPattern} instead.
     *
     * Note that `bindNodeCallback` can be used in non-Node.js environments as well.
     * "Node.js-style" callbacks are just a convention, so if you write for
     * browsers or any other environment and API you use implements that callback style,
     * `bindNodeCallback` can be safely used on that API functions as well.
     *
     * Remember that Error object passed to callback does not have to be an instance
     * of JavaScript built-in `Error` object. In fact, it does not even have to an object.
     * Error parameter of callback function is interpreted as "present", when value
     * of that parameter is truthy. It could be, for example, non-zero number, non-empty
     * string or boolean `true`. In all of these cases resulting Observable would error
     * with that value. This means usually regular style callbacks will fail very often when
     * `bindNodeCallback` is used. If your Observable errors much more often then you
     * would expect, check if callback really is called in Node.js-style and, if not,
     * switch to {@link bindCallback} instead.
     *
     * Note that even if error parameter is technically present in callback, but its value
     * is falsy, it still won't appear in array emitted by Observable or in selector function.
     *
     *
     * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
     * import * as fs from 'fs';
     * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
     * var result = readFileAsObservable('./roadNames.txt', 'utf8');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Use on function calling callback with multiple arguments</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // null
     *   console.log(a); // 5
     *   console.log(b); // "some string"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // [5, "some string"]
     * });
     *
     *
     * @example <caption>Use with selector function</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // undefined
     *   console.log(a); // "abc"
     *   console.log(b); // "DEF"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction, (a, b) => a + b);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // "abcDEF"
     * });
     *
     *
     * @example <caption>Use on function calling callback in regular style</caption>
     * someFunction(a => {
     *   console.log(a); // 5
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(
     *   value => {}             // never gets called
     *   err => console.log(err) // 5
     *);
     *
     *
     * @see {@link bindCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a Node.js-style callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps those to a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the Node.js callback would
     * deliver.
     * @static true
     * @name bindNodeCallback
     * @owner Observable
     */
    BoundNodeCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundNodeCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    var err = innerArgs.shift();
                    if (err) {
                        subject.error(err);
                    }
                    else if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this.context, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    return BoundNodeCallbackObservable;
}(Observable_1.Observable));
exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
function dispatch(state) {
    var self = this;
    var source = state.source, subscriber = state.subscriber, context = state.context;
    // XXX: cast to `any` to access to the private field in `source`.
    var _a = source, callbackFunc = _a.callbackFunc, args = _a.args, scheduler = _a.scheduler;
    var subject = source.subject;
    if (!subject) {
        subject = source.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector, subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
                self.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else if (selector) {
                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                if (result_2 === errorObject_1.errorObject) {
                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                }
                else {
                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                }
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        // use named function to pass values in without closure
        handler.source = source;
        var result = tryCatch_1.tryCatch(callbackFunc).apply(context, args.concat(handler));
        if (result === errorObject_1.errorObject) {
            self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
        }
    }
    self.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundNodeCallbackObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/FromEventPatternObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__("../../../../rxjs/util/isFunction.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventPatternObservable = (function (_super) {
    __extends(FromEventPatternObservable, _super);
    function FromEventPatternObservable(addHandler, removeHandler, selector) {
        _super.call(this);
        this.addHandler = addHandler;
        this.removeHandler = removeHandler;
        this.selector = selector;
    }
    /**
     * Creates an Observable from an API based on addHandler/removeHandler
     * functions.
     *
     * <span class="informal">Converts any addHandler/removeHandler API to an
     * Observable.</span>
     *
     * <img src="./img/fromEventPattern.png" width="100%">
     *
     * Creates an Observable by using the `addHandler` and `removeHandler`
     * functions to add and remove the handlers, with an optional selector
     * function to project the event arguments to a result. The `addHandler` is
     * called when the output Observable is subscribed, and `removeHandler` is
     * called when the Subscription is unsubscribed.
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * function addClickHandler(handler) {
     *   document.addEventListener('click', handler);
     * }
     *
     * function removeClickHandler(handler) {
     *   document.removeEventListener('click', handler);
     * }
     *
     * var clicks = Rx.Observable.fromEventPattern(
     *   addClickHandler,
     *   removeClickHandler
     * );
     * clicks.subscribe(x => console.log(x));
     *
     * @see {@link from}
     * @see {@link fromEvent}
     *
     * @param {function(handler: Function): any} addHandler A function that takes
     * a `handler` function as argument and attaches it somehow to the actual
     * source of events.
     * @param {function(handler: Function, signal?: any): void} [removeHandler] An optional function that
     * takes a `handler` function as argument and removes it in case it was
     * previously attached using `addHandler`. if addHandler returns signal to teardown when remove,
     * removeHandler function will forward it.
     * @param {function(...args: any): T} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEventPattern
     * @owner Observable
     */
    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
        return new FromEventPatternObservable(addHandler, removeHandler, selector);
    };
    FromEventPatternObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var removeHandler = this.removeHandler;
        var handler = !!this.selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            _this._callSelector(subscriber, args);
        } : function (e) { subscriber.next(e); };
        var retValue = this._callAddHandler(handler, subscriber);
        if (!isFunction_1.isFunction(removeHandler)) {
            return;
        }
        subscriber.add(new Subscription_1.Subscription(function () {
            //TODO: determine whether or not to forward to error handler
            removeHandler(handler, retValue);
        }));
    };
    FromEventPatternObservable.prototype._callSelector = function (subscriber, args) {
        try {
            var result = this.selector.apply(this, args);
            subscriber.next(result);
        }
        catch (e) {
            subscriber.error(e);
        }
    };
    FromEventPatternObservable.prototype._callAddHandler = function (handler, errorSubscriber) {
        try {
            return this.addHandler(handler) || null;
        }
        catch (e) {
            errorSubscriber.error(e);
        }
    };
    return FromEventPatternObservable;
}(Observable_1.Observable));
exports.FromEventPatternObservable = FromEventPatternObservable;
//# sourceMappingURL=FromEventPatternObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/GenerateObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var isScheduler_1 = __webpack_require__("../../../../rxjs/util/isScheduler.js");
var selfSelector = function (value) { return value; };
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var GenerateObservable = (function (_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
        _super.call(this);
        this.initialState = initialState;
        this.condition = condition;
        this.iterate = iterate;
        this.resultSelector = resultSelector;
        this.scheduler = scheduler;
    }
    GenerateObservable.create = function (initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        if (arguments.length == 1) {
            return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
        }
        if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
            return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
        }
        return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    GenerateObservable.prototype._subscribe = function (subscriber) {
        var state = this.initialState;
        if (this.scheduler) {
            return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
                subscriber: subscriber,
                iterate: this.iterate,
                condition: this.condition,
                resultSelector: this.resultSelector,
                state: state });
        }
        var _a = this, condition = _a.condition, resultSelector = _a.resultSelector, iterate = _a.iterate;
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        } while (true);
    };
    GenerateObservable.dispatch = function (state) {
        var subscriber = state.subscriber, condition = state.condition;
        if (subscriber.closed) {
            return;
        }
        if (state.needIterate) {
            try {
                state.state = state.iterate(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        }
        else {
            state.needIterate = true;
        }
        if (condition) {
            var conditionResult = void 0;
            try {
                conditionResult = condition(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            if (!conditionResult) {
                subscriber.complete();
                return;
            }
            if (subscriber.closed) {
                return;
            }
        }
        var value;
        try {
            value = state.resultSelector(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return;
        }
        if (subscriber.closed) {
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        return this.schedule(state);
    };
    return GenerateObservable;
}(Observable_1.Observable));
exports.GenerateObservable = GenerateObservable;
//# sourceMappingURL=GenerateObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/IfObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IfObservable = (function (_super) {
    __extends(IfObservable, _super);
    function IfObservable(condition, thenSource, elseSource) {
        _super.call(this);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
    }
    IfObservable.create = function (condition, thenSource, elseSource) {
        return new IfObservable(condition, thenSource, elseSource);
    };
    IfObservable.prototype._subscribe = function (subscriber) {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        return new IfSubscriber(subscriber, condition, thenSource, elseSource);
    };
    return IfObservable;
}(Observable_1.Observable));
exports.IfObservable = IfObservable;
var IfSubscriber = (function (_super) {
    __extends(IfSubscriber, _super);
    function IfSubscriber(destination, condition, thenSource, elseSource) {
        _super.call(this, destination);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
        this.tryIf();
    }
    IfSubscriber.prototype.tryIf = function () {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        var result;
        try {
            result = condition();
            var source = result ? thenSource : elseSource;
            if (source) {
                this.add(subscribeToResult_1.subscribeToResult(this, source));
            }
            else {
                this._complete();
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return IfSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=IfObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/NeverObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var noop_1 = __webpack_require__("../../../../rxjs/util/noop.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var NeverObservable = (function (_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
        _super.call(this);
    }
    /**
     * Creates an Observable that emits no items to the Observer.
     *
     * <span class="informal">An Observable that never emits anything.</span>
     *
     * <img src="./img/never.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that emits
     * neither values nor errors nor the completion notification. It can be used
     * for testing purposes or for composing with other Observables. Please note
     * that by never emitting a complete notification, this Observable keeps the
     * subscription from being disposed automatically. Subscriptions need to be
     * manually disposed.
     *
     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
     * function info() {
     *   console.log('Will not be called');
     * }
     * var result = Rx.Observable.never().startWith(7);
     * result.subscribe(x => console.log(x), info, info);
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link of}
     * @see {@link throw}
     *
     * @return {Observable} A "never" Observable: never emits anything.
     * @static true
     * @name never
     * @owner Observable
     */
    NeverObservable.create = function () {
        return new NeverObservable();
    };
    NeverObservable.prototype._subscribe = function (subscriber) {
        noop_1.noop();
    };
    return NeverObservable;
}(Observable_1.Observable));
exports.NeverObservable = NeverObservable;
//# sourceMappingURL=NeverObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/PairsObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
function dispatch(state) {
    var obj = state.obj, keys = state.keys, length = state.length, index = state.index, subscriber = state.subscriber;
    if (index === length) {
        subscriber.complete();
        return;
    }
    var key = keys[index];
    subscriber.next([key, obj[key]]);
    state.index = index + 1;
    this.schedule(state);
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PairsObservable = (function (_super) {
    __extends(PairsObservable, _super);
    function PairsObservable(obj, scheduler) {
        _super.call(this);
        this.obj = obj;
        this.scheduler = scheduler;
        this.keys = Object.keys(obj);
    }
    /**
     * Convert an object into an observable sequence of [key, value] pairs
     * using an optional IScheduler to enumerate the object.
     *
     * @example <caption>Converts a javascript object to an Observable</caption>
     * var obj = {
     *   foo: 42,
     *   bar: 56,
     *   baz: 78
     * };
     *
     * var source = Rx.Observable.pairs(obj);
     *
     * var subscription = source.subscribe(
     *   function (x) {
     *     console.log('Next: %s', x);
     *   },
     *   function (err) {
     *     console.log('Error: %s', err);
     *   },
     *   function () {
     *     console.log('Completed');
     *   });
     *
     * @param {Object} obj The object to inspect and turn into an
     * Observable sequence.
     * @param {Scheduler} [scheduler] An optional IScheduler to run the
     * enumeration of the input sequence on.
     * @returns {(Observable<Array<string | T>>)} An observable sequence of
     * [key, value] pairs from the object.
     */
    PairsObservable.create = function (obj, scheduler) {
        return new PairsObservable(obj, scheduler);
    };
    PairsObservable.prototype._subscribe = function (subscriber) {
        var _a = this, keys = _a.keys, scheduler = _a.scheduler;
        var length = keys.length;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                obj: this.obj, keys: keys, length: length, index: 0, subscriber: subscriber
            });
        }
        else {
            for (var idx = 0; idx < length; idx++) {
                var key = keys[idx];
                subscriber.next([key, this.obj[key]]);
            }
            subscriber.complete();
        }
    };
    return PairsObservable;
}(Observable_1.Observable));
exports.PairsObservable = PairsObservable;
//# sourceMappingURL=PairsObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/RangeObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var RangeObservable = (function (_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
        _super.call(this);
        this.start = start;
        this._count = count;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits a sequence of numbers within a specified
     * range.
     *
     * <span class="informal">Emits a sequence of numbers in a range.</span>
     *
     * <img src="./img/range.png" width="100%">
     *
     * `range` operator emits a range of sequential integers, in order, where you
     * select the `start` of the range and its `length`. By default, uses no
     * IScheduler and just delivers the notifications synchronously, but may use
     * an optional IScheduler to regulate those deliveries.
     *
     * @example <caption>Emits the numbers 1 to 10</caption>
     * var numbers = Rx.Observable.range(1, 10);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link interval}
     *
     * @param {number} [start=0] The value of the first integer in the sequence.
     * @param {number} [count=0] The number of sequential integers to generate.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emissions of the notifications.
     * @return {Observable} An Observable of numbers that emits a finite range of
     * sequential integers.
     * @static true
     * @name range
     * @owner Observable
     */
    RangeObservable.create = function (start, count, scheduler) {
        if (start === void 0) { start = 0; }
        if (count === void 0) { count = 0; }
        return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function (state) {
        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    };
    RangeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var start = this.start;
        var count = this._count;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(RangeObservable.dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(start++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
    };
    return RangeObservable;
}(Observable_1.Observable));
exports.RangeObservable = RangeObservable;
//# sourceMappingURL=RangeObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/SubscribeOnObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var asap_1 = __webpack_require__("../../../../rxjs/scheduler/asap.js");
var isNumeric_1 = __webpack_require__("../../../../rxjs/util/isNumeric.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var SubscribeOnObservable = (function (_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) { delayTime = 0; }
        if (scheduler === void 0) { scheduler = asap_1.asap; }
        _super.call(this);
        this.source = source;
        this.delayTime = delayTime;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
            this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = asap_1.asap;
        }
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
        if (delay === void 0) { delay = 0; }
        if (scheduler === void 0) { scheduler = asap_1.asap; }
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
    };
    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(Observable_1.Observable));
exports.SubscribeOnObservable = SubscribeOnObservable;
//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/UsingObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var UsingObservable = (function (_super) {
    __extends(UsingObservable, _super);
    function UsingObservable(resourceFactory, observableFactory) {
        _super.call(this);
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
    }
    UsingObservable.create = function (resourceFactory, observableFactory) {
        return new UsingObservable(resourceFactory, observableFactory);
    };
    UsingObservable.prototype._subscribe = function (subscriber) {
        var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
        var resource;
        try {
            resource = resourceFactory();
            return new UsingSubscriber(subscriber, resource, observableFactory);
        }
        catch (err) {
            subscriber.error(err);
        }
    };
    return UsingObservable;
}(Observable_1.Observable));
exports.UsingObservable = UsingObservable;
var UsingSubscriber = (function (_super) {
    __extends(UsingSubscriber, _super);
    function UsingSubscriber(destination, resource, observableFactory) {
        _super.call(this, destination);
        this.resource = resource;
        this.observableFactory = observableFactory;
        destination.add(resource);
        this.tryUse();
    }
    UsingSubscriber.prototype.tryUse = function () {
        try {
            var source = this.observableFactory.call(this, this.resource);
            if (source) {
                this.add(subscribeToResult_1.subscribeToResult(this, source));
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return UsingSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=UsingObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/bindCallback.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BoundCallbackObservable_1 = __webpack_require__("../../../../rxjs/observable/BoundCallbackObservable.js");
exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "../../../../rxjs/observable/bindNodeCallback.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BoundNodeCallbackObservable_1 = __webpack_require__("../../../../rxjs/observable/BoundNodeCallbackObservable.js");
exports.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "../../../../rxjs/observable/combineLatest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isScheduler_1 = __webpack_require__("../../../../rxjs/util/isScheduler.js");
var isArray_1 = __webpack_require__("../../../../rxjs/util/isArray.js");
var ArrayObservable_1 = __webpack_require__("../../../../rxjs/observable/ArrayObservable.js");
var combineLatest_1 = __webpack_require__("../../../../rxjs/operators/combineLatest.js");
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from all the Observables passed as
 * arguments. This is done by subscribing to each Observable in order and,
 * whenever any Observable emits, collecting an array of the most recent
 * values from each Observable. So if you pass `n` Observables to operator,
 * returned Observable will always emit an array of `n` values, in order
 * corresponding to order of passed Observables (value from the first Observable
 * on the first place and so on).
 *
 * Static version of `combineLatest` accepts either an array of Observables
 * or each Observable can be put directly as an argument. Note that array of
 * Observables is good choice, if you don't know beforehand how many Observables
 * you will combine. Passing empty array will result in Observable that
 * completes immediately.
 *
 * To ensure output array has always the same length, `combineLatest` will
 * actually wait for all input Observables to emit at least once,
 * before it starts emitting results. This means if some Observable emits
 * values before other Observables started emitting, all that values but last
 * will be lost. On the other hand, is some Observable does not emit value but
 * completes, resulting Observable will complete at the same moment without
 * emitting anything, since it will be now impossible to include value from
 * completed Observable in resulting array. Also, if some input Observable does
 * not emit any value and never completes, `combineLatest` will also never emit
 * and never complete, since, again, it will wait for all streams to emit some
 * value.
 *
 * If at least one Observable was passed to `combineLatest` and all passed Observables
 * emitted something, resulting Observable will complete when all combined
 * streams complete. So even if some Observable completes, result of
 * `combineLatest` will still emit values when other Observables do. In case
 * of completed Observable, its value from now on will always be the last
 * emitted value. On the other hand, if any Observable errors, `combineLatest`
 * will error immediately as well, and all other Observables will be unsubscribed.
 *
 * `combineLatest` accepts as optional parameter `project` function, which takes
 * as arguments all values that would normally be emitted by resulting Observable.
 * `project` can return any kind of value, which will be then emitted by Observable
 * instead of default array. Note that `project` does not take as argument that array
 * of values, but values themselves. That means default `project` can be imagined
 * as function that takes all its arguments and puts them into an array.
 *
 *
 * @example <caption>Combine two timer Observables</caption>
 * const firstTimer = Rx.Observable.timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
 * const secondTimer = Rx.Observable.timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
 * const combinedTimers = Rx.Observable.combineLatest(firstTimer, secondTimer);
 * combinedTimers.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0] after 0.5s
 * // [1, 0] after 1s
 * // [1, 1] after 1.5s
 * // [2, 1] after 2s
 *
 *
 * @example <caption>Combine an array of Observables</caption>
 * const observables = [1, 5, 10].map(
 *   n => Rx.Observable.of(n).delay(n * 1000).startWith(0) // emit 0 and then emit n after n seconds
 * );
 * const combined = Rx.Observable.combineLatest(observables);
 * combined.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0, 0] immediately
 * // [1, 0, 0] after 1s
 * // [1, 5, 0] after 5s
 * // [1, 5, 10] after 10s
 *
 *
 * @example <caption>Use project function to dynamically calculate the Body-Mass Index</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} observable1 An input Observable to combine with other Observables.
 * @param {ObservableInput} observable2 An input Observable to combine with other Observables.
 * More than one input Observables may be given as arguments
 * or an array of Observables may be given as the first argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each input Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @static true
 * @name combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new combineLatest_1.CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "../../../../rxjs/observable/dom/AjaxObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var map_1 = __webpack_require__("../../../../rxjs/operators/map.js");
function getCORSRequest() {
    if (root_1.root.XMLHttpRequest) {
        return new root_1.root.XMLHttpRequest();
    }
    else if (!!root_1.root.XDomainRequest) {
        return new root_1.root.XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (root_1.root.XMLHttpRequest) {
        return new root_1.root.XMLHttpRequest();
    }
    else {
        var progId = void 0;
        try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (var i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new root_1.root.ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new root_1.root.ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers) {
    if (headers === void 0) { headers = null; }
    return new AjaxObservable({ method: 'GET', url: url, headers: headers });
}
exports.ajaxGet = ajaxGet;
;
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
}
exports.ajaxPost = ajaxPost;
;
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
}
exports.ajaxDelete = ajaxDelete;
;
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
}
exports.ajaxPut = ajaxPut;
;
function ajaxPatch(url, body, headers) {
    return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
}
exports.ajaxPatch = ajaxPatch;
;
var mapResponse = map_1.map(function (x, index) { return x.response; });
function ajaxGetJSON(url, headers) {
    return mapResponse(new AjaxObservable({
        method: 'GET',
        url: url,
        responseType: 'json',
        headers: headers
    }));
}
exports.ajaxGetJSON = ajaxGetJSON;
;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var AjaxObservable = (function (_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
        _super.call(this);
        var request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
            },
            crossDomain: false,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (var prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    AjaxObservable.prototype._subscribe = function (subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    };
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * @example
     * source = Rx.Observable.ajax('/products');
     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
    */
    AjaxObservable.create = (function () {
        var create = function (urlOrRequest) {
            return new AjaxObservable(urlOrRequest);
        };
        create.get = ajaxGet;
        create.post = ajaxPost;
        create.delete = ajaxDelete;
        create.put = ajaxPut;
        create.patch = ajaxPatch;
        create.getJSON = ajaxGetJSON;
        return create;
    })();
    return AjaxObservable;
}(Observable_1.Observable));
exports.AjaxObservable = AjaxObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AjaxSubscriber = (function (_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
        _super.call(this, destination);
        this.request = request;
        this.done = false;
        var headers = request.headers = request.headers || {};
        // force CORS if requested
        if (!request.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        // ensure content type is set
        if (!('Content-Type' in headers) && !(root_1.root.FormData && request.body instanceof root_1.root.FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        // properly serialize body
        request.body = this.serializeBody(request.body, request.headers['Content-Type']);
        this.send();
    }
    AjaxSubscriber.prototype.next = function (e) {
        this.done = true;
        var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
        var response = new AjaxResponse(e, xhr, request);
        destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
        var createXHR = request.createXHR;
        var xhr = tryCatch_1.tryCatch(createXHR).call(request);
        if (xhr === errorObject_1.errorObject) {
            this.error(errorObject_1.errorObject.e);
        }
        else {
            this.xhr = xhr;
            // set up the events before open XHR
            // https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
            // You need to add the event listeners before calling open() on the request.
            // Otherwise the progress events will not fire.
            this.setupEvents(xhr, request);
            // open XHR
            var result = void 0;
            if (user) {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async, user, password);
            }
            else {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async);
            }
            if (result === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
            // timeout, responseType and withCredentials can be set once the XHR is open
            if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
            }
            if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
            }
            // set headers
            this.setHeaders(xhr, headers);
            // finally send the request
            result = body ? tryCatch_1.tryCatch(xhr.send).call(xhr, body) : tryCatch_1.tryCatch(xhr.send).call(xhr);
            if (result === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
        }
        return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (root_1.root.FormData && body instanceof root_1.root.FormData) {
            return body;
        }
        if (contentType) {
            var splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) { return (encodeURI(key) + "=" + encodeURI(body[key])); }).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
        var progressSubscriber = request.progressSubscriber;
        function xhrTimeout(e) {
            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
        }
        ;
        xhr.ontimeout = xhrTimeout;
        xhrTimeout.request = request;
        xhrTimeout.subscriber = this;
        xhrTimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr) {
            if (progressSubscriber) {
                var xhrProgress_1;
                xhrProgress_1 = function (e) {
                    var progressSubscriber = xhrProgress_1.progressSubscriber;
                    progressSubscriber.next(e);
                };
                if (root_1.root.XDomainRequest) {
                    xhr.onprogress = xhrProgress_1;
                }
                else {
                    xhr.upload.onprogress = xhrProgress_1;
                }
                xhrProgress_1.progressSubscriber = progressSubscriber;
            }
            var xhrError_1;
            xhrError_1 = function (e) {
                var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxError('ajax error', this, request));
            };
            xhr.onerror = xhrError_1;
            xhrError_1.request = request;
            xhrError_1.subscriber = this;
            xhrError_1.progressSubscriber = progressSubscriber;
        }
        function xhrReadyStateChange(e) {
            var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (this.readyState === 4) {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status_1 = this.status === 1223 ? 204 : this.status;
                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status_1 === 0) {
                    status_1 = response ? 200 : 0;
                }
                if (200 <= status_1 && status_1 < 300) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                }
            }
        }
        ;
        xhr.onreadystatechange = xhrReadyStateChange;
        xhrReadyStateChange.subscriber = this;
        xhrReadyStateChange.progressSubscriber = progressSubscriber;
        xhrReadyStateChange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
        var _a = this, done = _a.done, xhr = _a.xhr;
        if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
            xhr.abort();
        }
        _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
}(Subscriber_1.Subscriber));
exports.AjaxSubscriber = AjaxSubscriber;
/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
var AjaxResponse = (function () {
    function AjaxResponse(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxResponse;
}());
exports.AjaxResponse = AjaxResponse;
/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
var AjaxError = (function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
        _super.call(this, message);
        this.message = message;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxError;
}(Error));
exports.AjaxError = AjaxError;
function parseXhrResponse(responseType, xhr) {
    switch (responseType) {
        case 'json':
            if ('response' in xhr) {
                //IE does not support json as responseType, parse it internally
                return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
            }
            else {
                return JSON.parse(xhr.responseText || 'null');
            }
        case 'xml':
            return xhr.responseXML;
        case 'text':
        default:
            return ('response' in xhr) ? xhr.response : xhr.responseText;
    }
}
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
var AjaxTimeoutError = (function (_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
        _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
}(AjaxError));
exports.AjaxTimeoutError = AjaxTimeoutError;
//# sourceMappingURL=AjaxObservable.js.map

/***/ }),

/***/ "../../../../rxjs/observable/dom/WebSocketSubject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
var ReplaySubject_1 = __webpack_require__("../../../../rxjs/ReplaySubject.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var assign_1 = __webpack_require__("../../../../rxjs/util/assign.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var WebSocketSubject = (function (_super) {
    __extends(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        if (urlConfigOrSource instanceof Observable_1.Observable) {
            _super.call(this, destination, urlConfigOrSource);
        }
        else {
            _super.call(this);
            this.WebSocketCtor = root_1.root.WebSocket;
            this._output = new Subject_1.Subject();
            if (typeof urlConfigOrSource === 'string') {
                this.url = urlConfigOrSource;
            }
            else {
                // WARNING: config object could override important members here.
                assign_1.assign(this, urlConfigOrSource);
            }
            if (!this.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
    }
    WebSocketSubject.prototype.resultSelector = function (e) {
        return JSON.parse(e.data);
    };
    /**
     * Wrapper around the w3c-compatible WebSocket object provided by the browser.
     *
     * @example <caption>Wraps browser WebSocket</caption>
     *
     * let socket$ = Observable.webSocket('ws://localhost:8081');
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @example <caption>Wraps WebSocket from nodejs-websocket (using node.js)</caption>
     *
     * import { w3cwebsocket } from 'websocket';
     *
     * let socket$ = Observable.webSocket({
     *   url: 'ws://localhost:8081',
     *   WebSocketCtor: w3cwebsocket
     * });
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @param {string | WebSocketSubjectConfig} urlConfigOrSource the source of the websocket as an url or a structure defining the websocket object
     * @return {WebSocketSubject}
     * @static true
     * @name webSocket
     * @owner Observable
     */
    WebSocketSubject.create = function (urlConfigOrSource) {
        return new WebSocketSubject(urlConfigOrSource);
    };
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this, this.destination);
        sock.operator = operator;
        return sock;
    };
    WebSocketSubject.prototype._resetState = function () {
        this.socket = null;
        if (!this.source) {
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
        this._output = new Subject_1.Subject();
    };
    // TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new Observable_1.Observable(function (observer) {
            var result = tryCatch_1.tryCatch(subMsg)();
            if (result === errorObject_1.errorObject) {
                observer.error(errorObject_1.errorObject.e);
            }
            else {
                self.next(result);
            }
            var subscription = self.subscribe(function (x) {
                var result = tryCatch_1.tryCatch(messageFilter)(x);
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                }
                else if (result) {
                    observer.next(x);
                }
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
            return function () {
                var result = tryCatch_1.tryCatch(unsubMsg)();
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                }
                else {
                    self.next(result);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var WebSocketCtor = this.WebSocketCtor;
        var observer = this._output;
        var socket = null;
        try {
            socket = this.protocol ?
                new WebSocketCtor(this.url, this.protocol) :
                new WebSocketCtor(this.url);
            this.socket = socket;
            if (this.binaryType) {
                this.socket.binaryType = this.binaryType;
            }
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new Subscription_1.Subscription(function () {
            _this.socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (e) {
            var openObserver = _this.openObserver;
            if (openObserver) {
                openObserver.next(e);
            }
            var queue = _this.destination;
            _this.destination = Subscriber_1.Subscriber.create(function (x) { return socket.readyState === 1 && socket.send(x); }, function (e) {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (e && e.code) {
                    socket.close(e.code, e.reason);
                }
                else {
                    observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' +
                        'and an optional reason: { code: number, reason: string }'));
                }
                _this._resetState();
            }, function () {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this._resetState();
            });
            if (queue && queue instanceof ReplaySubject_1.ReplaySubject) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) {
            _this._resetState();
            observer.error(e);
        };
        socket.onclose = function (e) {
            _this._resetState();
            var closeObserver = _this.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            var result = tryCatch_1.tryCatch(_this.resultSelector)(e);
            if (result === errorObject_1.errorObject) {
                observer.error(errorObject_1.errorObject.e);
            }
            else {
                observer.next(result);
            }
        };
    };
    WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this.socket) {
            this._connectSocket();
        }
        var subscription = new Subscription_1.Subscription();
        subscription.add(this._output.subscribe(subscriber));
        subscription.add(function () {
            var socket = _this.socket;
            if (_this._output.observers.length === 0) {
                if (socket && socket.readyState === 1) {
                    socket.close();
                }
                _this._resetState();
            }
        });
        return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _a = this, source = _a.source, socket = _a.socket;
        if (socket && socket.readyState === 1) {
            socket.close();
            this._resetState();
        }
        _super.prototype.unsubscribe.call(this);
        if (!source) {
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
    };
    return WebSocketSubject;
}(Subject_1.AnonymousSubject));
exports.WebSocketSubject = WebSocketSubject;
//# sourceMappingURL=WebSocketSubject.js.map

/***/ }),

/***/ "../../../../rxjs/observable/dom/ajax.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AjaxObservable_1 = __webpack_require__("../../../../rxjs/observable/dom/AjaxObservable.js");
exports.ajax = AjaxObservable_1.AjaxObservable.create;
//# sourceMappingURL=ajax.js.map

/***/ }),

/***/ "../../../../rxjs/observable/dom/webSocket.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var WebSocketSubject_1 = __webpack_require__("../../../../rxjs/observable/dom/WebSocketSubject.js");
exports.webSocket = WebSocketSubject_1.WebSocketSubject.create;
//# sourceMappingURL=webSocket.js.map

/***/ }),

/***/ "../../../../rxjs/observable/empty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var EmptyObservable_1 = __webpack_require__("../../../../rxjs/observable/EmptyObservable.js");
exports.empty = EmptyObservable_1.EmptyObservable.create;
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ "../../../../rxjs/observable/fromEventPattern.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FromEventPatternObservable_1 = __webpack_require__("../../../../rxjs/observable/FromEventPatternObservable.js");
exports.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "../../../../rxjs/observable/generate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GenerateObservable_1 = __webpack_require__("../../../../rxjs/observable/GenerateObservable.js");
exports.generate = GenerateObservable_1.GenerateObservable.create;
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "../../../../rxjs/observable/if.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IfObservable_1 = __webpack_require__("../../../../rxjs/observable/IfObservable.js");
exports._if = IfObservable_1.IfObservable.create;
//# sourceMappingURL=if.js.map

/***/ }),

/***/ "../../../../rxjs/observable/never.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NeverObservable_1 = __webpack_require__("../../../../rxjs/observable/NeverObservable.js");
exports.never = NeverObservable_1.NeverObservable.create;
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "../../../../rxjs/observable/onErrorResumeNext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var onErrorResumeNext_1 = __webpack_require__("../../../../rxjs/operators/onErrorResumeNext.js");
exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNextStatic;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "../../../../rxjs/observable/pairs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PairsObservable_1 = __webpack_require__("../../../../rxjs/observable/PairsObservable.js");
exports.pairs = PairsObservable_1.PairsObservable.create;
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "../../../../rxjs/observable/race.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isArray_1 = __webpack_require__("../../../../rxjs/util/isArray.js");
var ArrayObservable_1 = __webpack_require__("../../../../rxjs/observable/ArrayObservable.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    // if the only argument is an array, it was most likely called with
    // `race([obs1, obs2, ...])`
    if (observables.length === 1) {
        if (isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
}
exports.race = race;
var RaceOperator = (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());
exports.RaceOperator = RaceOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RaceSubscriber = (function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        _super.call(this, destination);
        this.hasFirst = false;
        this.observables = [];
        this.subscriptions = [];
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.RaceSubscriber = RaceSubscriber;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "../../../../rxjs/observable/range.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var RangeObservable_1 = __webpack_require__("../../../../rxjs/observable/RangeObservable.js");
exports.range = RangeObservable_1.RangeObservable.create;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "../../../../rxjs/observable/using.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UsingObservable_1 = __webpack_require__("../../../../rxjs/observable/UsingObservable.js");
exports.using = UsingObservable_1.UsingObservable.create;
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "../../../../rxjs/observable/zip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var zip_1 = __webpack_require__("../../../../rxjs/operators/zip.js");
exports.zip = zip_1.zipStatic;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "../../../../rxjs/operator/audit.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var audit_1 = __webpack_require__("../../../../rxjs/operators/audit.js");
/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return audit_1.audit(durationSelector)(this);
}
exports.audit = audit;
//# sourceMappingURL=audit.js.map

/***/ }),

/***/ "../../../../rxjs/operator/buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var buffer_1 = __webpack_require__("../../../../rxjs/operators/buffer.js");
/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return buffer_1.buffer(closingNotifier)(this);
}
exports.buffer = buffer;
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bufferCount_1 = __webpack_require__("../../../../rxjs/operators/bufferCount.js");
/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    return bufferCount_1.bufferCount(bufferSize, startBufferEvery)(this);
}
exports.bufferCount = bufferCount;
//# sourceMappingURL=bufferCount.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var isScheduler_1 = __webpack_require__("../../../../rxjs/util/isScheduler.js");
var bufferTime_1 = __webpack_require__("../../../../rxjs/operators/bufferTime.js");
/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = async_1.async;
    if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return bufferTime_1.bufferTime(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler)(this);
}
exports.bufferTime = bufferTime;
//# sourceMappingURL=bufferTime.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bufferToggle_1 = __webpack_require__("../../../../rxjs/operators/bufferToggle.js");
/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return bufferToggle_1.bufferToggle(openings, closingSelector)(this);
}
exports.bufferToggle = bufferToggle;
//# sourceMappingURL=bufferToggle.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bufferWhen_1 = __webpack_require__("../../../../rxjs/operators/bufferWhen.js");
/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return bufferWhen_1.bufferWhen(closingSelector)(this);
}
exports.bufferWhen = bufferWhen;
//# sourceMappingURL=bufferWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/combineAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var combineAll_1 = __webpack_require__("../../../../rxjs/operators/combineAll.js");
/**
 * Converts a higher-order Observable into a first-order Observable by waiting
 * for the outer Observable to complete, then applying {@link combineLatest}.
 *
 * <span class="informal">Flattens an Observable-of-Observables by applying
 * {@link combineLatest} when the Observable-of-Observables completes.</span>
 *
 * <img src="./img/combineAll.png" width="100%">
 *
 * Takes an Observable of Observables, and collects all Observables from it.
 * Once the outer Observable completes, it subscribes to all collected
 * Observables and combines their values using the {@link combineLatest}
 * strategy, such that:
 * - Every time an inner Observable emits, the output Observable emits.
 * - When the returned observable emits, it emits all of the latest values by:
 *   - If a `project` function is provided, it is called with each recent value
 *     from each inner Observable in whatever order they arrived, and the result
 *     of the `project` function is what is emitted by the output Observable.
 *   - If there is no `project` function, an array of all of the most recent
 *     values is emitted by the output Observable.
 *
 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev =>
 *   Rx.Observable.interval(Math.random()*2000).take(3)
 * ).take(2);
 * var result = higherOrder.combineAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function} [project] An optional function to map the most recent
 * values from each inner Observable into a new result. Takes each of the most
 * recent values from each collected inner Observable as arguments, in order.
 * @return {Observable} An Observable of projected results or arrays of recent
 * values.
 * @method combineAll
 * @owner Observable
 */
function combineAll(project) {
    return combineAll_1.combineAll(project)(this);
}
exports.combineAll = combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ }),

/***/ "../../../../rxjs/operator/combineLatest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var combineLatest_1 = __webpack_require__("../../../../rxjs/operators/combineLatest.js");
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return combineLatest_1.combineLatest.apply(void 0, observables)(this);
}
exports.combineLatest = combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "../../../../rxjs/operator/concat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var concat_1 = __webpack_require__("../../../../rxjs/operators/concat.js");
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return concat_1.concat.apply(void 0, observables)(this);
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "../../../../rxjs/operator/concatMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var concatMapTo_1 = __webpack_require__("../../../../rxjs/operators/concatMapTo.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return concatMapTo_1.concatMapTo(innerObservable, resultSelector)(this);
}
exports.concatMapTo = concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operator/count.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var count_1 = __webpack_require__("../../../../rxjs/operators/count.js");
/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return count_1.count(predicate)(this);
}
exports.count = count;
//# sourceMappingURL=count.js.map

/***/ }),

/***/ "../../../../rxjs/operator/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var debounce_1 = __webpack_require__("../../../../rxjs/operators/debounce.js");
/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return debounce_1.debounce(durationSelector)(this);
}
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "../../../../rxjs/operator/defaultIfEmpty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defaultIfEmpty_1 = __webpack_require__("../../../../rxjs/operators/defaultIfEmpty.js");
/* tslint:enable:max-line-length */
/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * <img src="./img/defaultIfEmpty.png" width="100%">
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return defaultIfEmpty_1.defaultIfEmpty(defaultValue)(this);
}
exports.defaultIfEmpty = defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ "../../../../rxjs/operator/delay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var delay_1 = __webpack_require__("../../../../rxjs/operators/delay.js");
/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=async] The IScheduler to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return delay_1.delay(delay, scheduler)(this);
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ "../../../../rxjs/operator/delayWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var delayWhen_1 = __webpack_require__("../../../../rxjs/operators/delayWhen.js");
/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    return delayWhen_1.delayWhen(delayDurationSelector, subscriptionDelay)(this);
}
exports.delayWhen = delayWhen;
//# sourceMappingURL=delayWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/dematerialize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dematerialize_1 = __webpack_require__("../../../../rxjs/operators/dematerialize.js");
/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return dematerialize_1.dematerialize()(this);
}
exports.dematerialize = dematerialize;
//# sourceMappingURL=dematerialize.js.map

/***/ }),

/***/ "../../../../rxjs/operator/distinct.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var distinct_1 = __webpack_require__("../../../../rxjs/operators/distinct.js");
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return distinct_1.distinct(keySelector, flushes)(this);
}
exports.distinct = distinct;
//# sourceMappingURL=distinct.js.map

/***/ }),

/***/ "../../../../rxjs/operator/distinctUntilKeyChanged.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var distinctUntilKeyChanged_1 = __webpack_require__("../../../../rxjs/operators/distinctUntilKeyChanged.js");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilKeyChanged_1.distinctUntilKeyChanged(key, compare)(this);
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),

/***/ "../../../../rxjs/operator/elementAt.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var elementAt_1 = __webpack_require__("../../../../rxjs/operators/elementAt.js");
/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return elementAt_1.elementAt(index, defaultValue)(this);
}
exports.elementAt = elementAt;
//# sourceMappingURL=elementAt.js.map

/***/ }),

/***/ "../../../../rxjs/operator/exhaust.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exhaust_1 = __webpack_require__("../../../../rxjs/operators/exhaust.js");
/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return exhaust_1.exhaust()(this);
}
exports.exhaust = exhaust;
//# sourceMappingURL=exhaust.js.map

/***/ }),

/***/ "../../../../rxjs/operator/exhaustMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exhaustMap_1 = __webpack_require__("../../../../rxjs/operators/exhaustMap.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000).take(5));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return exhaustMap_1.exhaustMap(project, resultSelector)(this);
}
exports.exhaustMap = exhaustMap;
//# sourceMappingURL=exhaustMap.js.map

/***/ }),

/***/ "../../../../rxjs/operator/expand.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var expand_1 = __webpack_require__("../../../../rxjs/operators/expand.js");
/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (scheduler === void 0) { scheduler = undefined; }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return expand_1.expand(project, concurrent, scheduler)(this);
}
exports.expand = expand;
//# sourceMappingURL=expand.js.map

/***/ }),

/***/ "../../../../rxjs/operator/find.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var find_1 = __webpack_require__("../../../../rxjs/operators/find.js");
/* tslint:enable:max-line-length */
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    return find_1.find(predicate, thisArg)(this);
}
exports.find = find;
//# sourceMappingURL=find.js.map

/***/ }),

/***/ "../../../../rxjs/operator/findIndex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var findIndex_1 = __webpack_require__("../../../../rxjs/operators/findIndex.js");
/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return findIndex_1.findIndex(predicate, thisArg)(this);
}
exports.findIndex = findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ }),

/***/ "../../../../rxjs/operator/groupBy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var groupBy_1 = __webpack_require__("../../../../rxjs/operators/groupBy.js");
exports.GroupedObservable = groupBy_1.GroupedObservable;
/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return groupBy_1.groupBy(keySelector, elementSelector, durationSelector, subjectSelector)(this);
}
exports.groupBy = groupBy;
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "../../../../rxjs/operator/ignoreElements.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ignoreElements_1 = __webpack_require__("../../../../rxjs/operators/ignoreElements.js");
/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return ignoreElements_1.ignoreElements()(this);
}
exports.ignoreElements = ignoreElements;
;
//# sourceMappingURL=ignoreElements.js.map

/***/ }),

/***/ "../../../../rxjs/operator/isEmpty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isEmpty_1 = __webpack_require__("../../../../rxjs/operators/isEmpty.js");
/**
 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
 *
 * <img src="./img/isEmpty.png" width="100%">
 *
 * @return {Observable} An Observable that emits a Boolean.
 * @method isEmpty
 * @owner Observable
 */
function isEmpty() {
    return isEmpty_1.isEmpty()(this);
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=isEmpty.js.map

/***/ }),

/***/ "../../../../rxjs/operator/let.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @param func
 * @return {Observable<R>}
 * @method let
 * @owner Observable
 */
function letProto(func) {
    return func(this);
}
exports.letProto = letProto;
//# sourceMappingURL=let.js.map

/***/ }),

/***/ "../../../../rxjs/operator/mapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mapTo_1 = __webpack_require__("../../../../rxjs/operators/mapTo.js");
/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return mapTo_1.mapTo(value)(this);
}
exports.mapTo = mapTo;
//# sourceMappingURL=mapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operator/materialize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var materialize_1 = __webpack_require__("../../../../rxjs/operators/materialize.js");
/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return materialize_1.materialize()(this);
}
exports.materialize = materialize;
//# sourceMappingURL=materialize.js.map

/***/ }),

/***/ "../../../../rxjs/operator/max.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var max_1 = __webpack_require__("../../../../rxjs/operators/max.js");
/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    return max_1.max(comparer)(this);
}
exports.max = max;
//# sourceMappingURL=max.js.map

/***/ }),

/***/ "../../../../rxjs/operator/mergeMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeMapTo_1 = __webpack_require__("../../../../rxjs/operators/mergeMapTo.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeMapTo_1.mergeMapTo(innerObservable, resultSelector, concurrent)(this);
}
exports.mergeMapTo = mergeMapTo;
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operator/mergeScan.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeScan_1 = __webpack_require__("../../../../rxjs/operators/mergeScan.js");
/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeScan_1.mergeScan(accumulator, seed, concurrent)(this);
}
exports.mergeScan = mergeScan;
//# sourceMappingURL=mergeScan.js.map

/***/ }),

/***/ "../../../../rxjs/operator/min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var min_1 = __webpack_require__("../../../../rxjs/operators/min.js");
/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    return min_1.min(comparer)(this);
}
exports.min = min;
//# sourceMappingURL=min.js.map

/***/ }),

/***/ "../../../../rxjs/operator/multicast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var multicast_1 = __webpack_require__("../../../../rxjs/operators/multicast.js");
/* tslint:enable:max-line-length */
/**
 * Allows source Observable to be subscribed only once with a Subject of choice,
 * while still sharing its values between multiple subscribers.
 *
 * <span class="informal">Subscribe to Observable once, but send its values to multiple subscribers.</span>
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * `multicast` is an operator that works in two modes.
 *
 * In the first mode you provide a single argument to it, which can be either an initialized Subject or a Subject
 * factory. As a result you will get a special kind of an Observable - a {@link ConnectableObservable}. It can be
 * subscribed multiple times, just as regular Observable, but it won't subscribe to the source Observable at that
 * moment. It will do it only if you call its `connect` method. This means you can essentially control by hand, when
 * source Observable will be actually subscribed. What is more, ConnectableObservable will share this one subscription
 * between all of its subscribers. This means that, for example, `ajax` Observable will only send a request once,
 * even though usually it would send a request per every subscriber. Since it sends a request at the moment of
 * subscription, here request would be sent when the `connect` method of a ConnectableObservable is called.
 *
 * The most common pattern of using ConnectableObservable is calling `connect` when the first consumer subscribes,
 * keeping the subscription alive while several consumers come and go and finally unsubscribing from the source
 * Observable, when the last consumer unsubscribes. To not implement that logic over and over again,
 * ConnectableObservable has a special operator, `refCount`. When called, it returns an Observable, which will count
 * the number of consumers subscribed to it and keep ConnectableObservable connected as long as there is at least
 * one consumer. So if you don't actually need to decide yourself when to connect and disconnect a
 * ConnectableObservable, use `refCount`.
 *
 * The second mode is invoked by calling `multicast` with an additional, second argument - selector function.
 * This function accepts an Observable - which basically mirrors the source Observable - and returns Observable
 * as well, which should be the input stream modified by any operators you want. Note that in this
 * mode you cannot provide initialized Subject as a first argument - it has to be a Subject factory. If
 * you provide selector function, `multicast` returns just a regular Observable, instead of ConnectableObservable.
 * Thus, as usual, each subscription to this stream triggers subscription to the source Observable. However,
 * if inside the selector function you subscribe to the input Observable multiple times, actual source stream
 * will be subscribed only once. So if you have a chain of operators that use some Observable many times,
 * but you want to subscribe to that Observable only once, this is the mode you would use.
 *
 * Subject provided as a first parameter of `multicast` is used as a proxy for the single subscription to the
 * source Observable. It means that all values from the source stream go through that Subject. Thus, if a Subject
 * has some special properties, Observable returned by `multicast` will have them as well. If you want to use
 * `multicast` with a Subject that is one of the ones included in RxJS by default - {@link Subject},
 * {@link AsyncSubject}, {@link BehaviorSubject}, or {@link ReplaySubject} - simply use {@link publish},
 * {@link publishLast}, {@link publishBehavior} or {@link publishReplay} respectively. These are actually
 * just wrappers around `multicast`, with a specific Subject hardcoded inside.
 *
 * Also, if you use {@link publish} or {@link publishReplay} with a ConnectableObservables `refCount` operator,
 * you can simply use {@link share} and {@link shareReplay} respectively, which chain these two.
 *
 * @example <caption>Use ConnectableObservable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const connectableSeconds = seconds.multicast(new Subject());
 *
 * connectableSeconds.subscribe(value => console.log('first: ' + value));
 * connectableSeconds.subscribe(value => console.log('second: ' + value));
 *
 * // At this point still nothing happens, even though we subscribed twice.
 *
 * connectableSeconds.connect();
 *
 * // From now on `seconds` are being logged to the console,
 * // twice per every second. `seconds` Observable was however only subscribed once,
 * // so under the hood Observable.interval had only one clock started.
 *
 * @example <caption>Use selector</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds
 *     .multicast(
 *         () => new Subject(),
 *         seconds => seconds.zip(seconds) // Usually zip would subscribe to `seconds` twice.
 *                                         // Because we are inside selector, `seconds` is subscribed once,
 *     )                                   // thus starting only one clock used internally by Observable.interval.
 *     .subscribe();
 *
 * @see {@link publish}
 * @see {@link publishLast}
 * @see {@link publishBehavior}
 * @see {@link publishReplay}
 * @see {@link share}
 * @see {@link shareReplay}
 *
 * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate Subject through
 * which the source sequence's elements will be multicast to the selector function input Observable or
 * ConnectableObservable returned by the operator.
 * @param {Function} [selector] - Optional selector function that can use the input stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the input source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable<T>|ConnectableObservable<T>} An Observable that emits the results of invoking the selector
 * on the source stream or a special {@link ConnectableObservable}, if selector was not provided.
 *
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    return multicast_1.multicast(subjectOrSubjectFactory, selector)(this);
}
exports.multicast = multicast;
//# sourceMappingURL=multicast.js.map

/***/ }),

/***/ "../../../../rxjs/operator/observeOn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var observeOn_1 = __webpack_require__("../../../../rxjs/operators/observeOn.js");
/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return observeOn_1.observeOn(scheduler, delay)(this);
}
exports.observeOn = observeOn;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "../../../../rxjs/operator/onErrorResumeNext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var onErrorResumeNext_1 = __webpack_require__("../../../../rxjs/operators/onErrorResumeNext.js");
/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    return onErrorResumeNext_1.onErrorResumeNext.apply(void 0, nextSources)(this);
}
exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "../../../../rxjs/operator/pairwise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var pairwise_1 = __webpack_require__("../../../../rxjs/operators/pairwise.js");
/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return pairwise_1.pairwise()(this);
}
exports.pairwise = pairwise;
//# sourceMappingURL=pairwise.js.map

/***/ }),

/***/ "../../../../rxjs/operator/partition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var partition_1 = __webpack_require__("../../../../rxjs/operators/partition.js");
/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return partition_1.partition(predicate, thisArg)(this);
}
exports.partition = partition;
//# sourceMappingURL=partition.js.map

/***/ }),

/***/ "../../../../rxjs/operator/pluck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var pluck_1 = __webpack_require__("../../../../rxjs/operators/pluck.js");
/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    return pluck_1.pluck.apply(void 0, properties)(this);
}
exports.pluck = pluck;
//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ "../../../../rxjs/operator/publish.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var publish_1 = __webpack_require__("../../../../rxjs/operators/publish.js");
/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return publish_1.publish(selector)(this);
}
exports.publish = publish;
//# sourceMappingURL=publish.js.map

/***/ }),

/***/ "../../../../rxjs/operator/publishBehavior.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var publishBehavior_1 = __webpack_require__("../../../../rxjs/operators/publishBehavior.js");
/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return publishBehavior_1.publishBehavior(value)(this);
}
exports.publishBehavior = publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ }),

/***/ "../../../../rxjs/operator/publishLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var publishLast_1 = __webpack_require__("../../../../rxjs/operators/publishLast.js");
/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
function publishLast() {
    //TODO(benlesh): correct type-flow through here.
    return publishLast_1.publishLast()(this);
}
exports.publishLast = publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ }),

/***/ "../../../../rxjs/operator/publishReplay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var publishReplay_1 = __webpack_require__("../../../../rxjs/operators/publishReplay.js");
/* tslint:enable:max-line-length */
/**
 * @param bufferSize
 * @param windowTime
 * @param selectorOrScheduler
 * @param scheduler
 * @return {Observable<T> | ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    return publishReplay_1.publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler)(this);
}
exports.publishReplay = publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ }),

/***/ "../../../../rxjs/operator/race.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var race_1 = __webpack_require__("../../../../rxjs/operators/race.js");
// NOTE: to support backwards compatability with 5.4.* and lower
var race_2 = __webpack_require__("../../../../rxjs/observable/race.js");
exports.raceStatic = race_2.race;
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return race_1.race.apply(void 0, observables)(this);
}
exports.race = race;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "../../../../rxjs/operator/repeat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var repeat_1 = __webpack_require__("../../../../rxjs/operators/repeat.js");
/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) { count = -1; }
    return repeat_1.repeat(count)(this);
}
exports.repeat = repeat;
//# sourceMappingURL=repeat.js.map

/***/ }),

/***/ "../../../../rxjs/operator/repeatWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var repeatWhen_1 = __webpack_require__("../../../../rxjs/operators/repeatWhen.js");
/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return repeatWhen_1.repeatWhen(notifier)(this);
}
exports.repeatWhen = repeatWhen;
//# sourceMappingURL=repeatWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/retry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var retry_1 = __webpack_require__("../../../../rxjs/operators/retry.js");
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) { count = -1; }
    return retry_1.retry(count)(this);
}
exports.retry = retry;
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "../../../../rxjs/operator/retryWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var retryWhen_1 = __webpack_require__("../../../../rxjs/operators/retryWhen.js");
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return retryWhen_1.retryWhen(notifier)(this);
}
exports.retryWhen = retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/sample.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var sample_1 = __webpack_require__("../../../../rxjs/operators/sample.js");
/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return sample_1.sample(notifier)(this);
}
exports.sample = sample;
//# sourceMappingURL=sample.js.map

/***/ }),

/***/ "../../../../rxjs/operator/sampleTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var sampleTime_1 = __webpack_require__("../../../../rxjs/operators/sampleTime.js");
/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return sampleTime_1.sampleTime(period, scheduler)(this);
}
exports.sampleTime = sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ }),

/***/ "../../../../rxjs/operator/scan.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var scan_1 = __webpack_require__("../../../../rxjs/operators/scan.js");
/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    if (arguments.length >= 2) {
        return scan_1.scan(accumulator, seed)(this);
    }
    return scan_1.scan(accumulator)(this);
}
exports.scan = scan;
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ "../../../../rxjs/operator/sequenceEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var sequenceEqual_1 = __webpack_require__("../../../../rxjs/operators/sequenceEqual.js");
/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return sequenceEqual_1.sequenceEqual(compareTo, comparor)(this);
}
exports.sequenceEqual = sequenceEqual;
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),

/***/ "../../../../rxjs/operator/shareReplay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shareReplay_1 = __webpack_require__("../../../../rxjs/operators/shareReplay.js");
/**
 * @method shareReplay
 * @owner Observable
 */
function shareReplay(bufferSize, windowTime, scheduler) {
    return shareReplay_1.shareReplay(bufferSize, windowTime, scheduler)(this);
}
exports.shareReplay = shareReplay;
;
//# sourceMappingURL=shareReplay.js.map

/***/ }),

/***/ "../../../../rxjs/operator/single.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var single_1 = __webpack_require__("../../../../rxjs/operators/single.js");
/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return single_1.single(predicate)(this);
}
exports.single = single;
//# sourceMappingURL=single.js.map

/***/ }),

/***/ "../../../../rxjs/operator/skip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var skip_1 = __webpack_require__("../../../../rxjs/operators/skip.js");
/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return skip_1.skip(count)(this);
}
exports.skip = skip;
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ "../../../../rxjs/operator/skipLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var skipLast_1 = __webpack_require__("../../../../rxjs/operators/skipLast.js");
/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return skipLast_1.skipLast(count)(this);
}
exports.skipLast = skipLast;
//# sourceMappingURL=skipLast.js.map

/***/ }),

/***/ "../../../../rxjs/operator/skipUntil.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var skipUntil_1 = __webpack_require__("../../../../rxjs/operators/skipUntil.js");
/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return skipUntil_1.skipUntil(notifier)(this);
}
exports.skipUntil = skipUntil;
//# sourceMappingURL=skipUntil.js.map

/***/ }),

/***/ "../../../../rxjs/operator/subscribeOn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var subscribeOn_1 = __webpack_require__("../../../../rxjs/operators/subscribeOn.js");
/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return subscribeOn_1.subscribeOn(scheduler, delay)(this);
}
exports.subscribeOn = subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ "../../../../rxjs/operator/switch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var switchAll_1 = __webpack_require__("../../../../rxjs/operators/switchAll.js");
/**
 * Converts a higher-order Observable into a first-order Observable by
 * subscribing to only the most recently emitted of those inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * previous inner Observable once a new one appears.</span>
 *
 * <img src="./img/switch.png" width="100%">
 *
 * `switch` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable subscribes to the inner Observable and
 * begins emitting the items emitted by that. So far, it behaves
 * like {@link mergeAll}. However, when a new inner Observable is emitted,
 * `switch` unsubscribes from the earlier-emitted inner Observable and
 * subscribes to the new inner Observable and begins emitting items from it. It
 * continues to behave like this for subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * // Each click event is mapped to an Observable that ticks every second
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var switched = higherOrder.switch();
 * // The outcome is that `switched` is essentially a timer that restarts
 * // on every click. The interval Observables from older clicks do not merge
 * // with the current interval Observable.
 * switched.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link zipAll}
 *
 * @return {Observable<T>} An Observable that emits the items emitted by the
 * Observable most recently emitted by the source Observable.
 * @method switch
 * @name switch
 * @owner Observable
 */
function _switch() {
    return switchAll_1.switchAll()(this);
}
exports._switch = _switch;
//# sourceMappingURL=switch.js.map

/***/ }),

/***/ "../../../../rxjs/operator/switchMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var switchMapTo_1 = __webpack_require__("../../../../rxjs/operators/switchMapTo.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return switchMapTo_1.switchMapTo(innerObservable, resultSelector)(this);
}
exports.switchMapTo = switchMapTo;
//# sourceMappingURL=switchMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operator/takeLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var takeLast_1 = __webpack_require__("../../../../rxjs/operators/takeLast.js");
/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    return takeLast_1.takeLast(count)(this);
}
exports.takeLast = takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ }),

/***/ "../../../../rxjs/operator/takeWhile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var takeWhile_1 = __webpack_require__("../../../../rxjs/operators/takeWhile.js");
/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return takeWhile_1.takeWhile(predicate)(this);
}
exports.takeWhile = takeWhile;
//# sourceMappingURL=takeWhile.js.map

/***/ }),

/***/ "../../../../rxjs/operator/throttle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var throttle_1 = __webpack_require__("../../../../rxjs/operators/throttle.js");
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return throttle_1.throttle(durationSelector, config)(this);
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "../../../../rxjs/operator/throttleTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var throttle_1 = __webpack_require__("../../../../rxjs/operators/throttle.js");
var throttleTime_1 = __webpack_require__("../../../../rxjs/operators/throttleTime.js");
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return throttleTime_1.throttleTime(duration, scheduler, config)(this);
}
exports.throttleTime = throttleTime;
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ "../../../../rxjs/operator/timeInterval.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var timeInterval_1 = __webpack_require__("../../../../rxjs/operators/timeInterval.js");
exports.TimeInterval = timeInterval_1.TimeInterval;
/**
 * @param scheduler
 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timeInterval
 * @owner Observable
 */
function timeInterval(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return timeInterval_1.timeInterval(scheduler)(this);
}
exports.timeInterval = timeInterval;
//# sourceMappingURL=timeInterval.js.map

/***/ }),

/***/ "../../../../rxjs/operator/timeout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var timeout_1 = __webpack_require__("../../../../rxjs/operators/timeout.js");
/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * <img src="./img/timeout.png" width="100%">
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * @example <caption>Check if ticks are emitted within certain timespan</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(1100) // Let's use bigger timespan to be safe,
 *                       // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err) // Will never be called.
 * );
 *
 * seconds.timeout(900).subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err) // Will emit error before even first value is emitted,
 *                             // since it did not arrive within 900ms period.
 * );
 *
 * @example <caption>Use Date to check if Observable completed</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(new Date("December 17, 2020 03:24:00"))
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
 *                             // since Observable did not complete by then.
 * );
 *
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return timeout_1.timeout(due, scheduler)(this);
}
exports.timeout = timeout;
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "../../../../rxjs/operator/timeoutWith.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var timeoutWith_1 = __webpack_require__("../../../../rxjs/operators/timeoutWith.js");
/* tslint:enable:max-line-length */
/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * <img src="./img/timeoutWith.png" width="100%">
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * @example <caption>Add fallback observable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const minutes = Rx.Observable.interval(60 * 1000);
 *
 * seconds.timeoutWith(900, minutes)
 *     .subscribe(
 *         value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                      // since first value of `seconds` will not arrive fast enough.
 *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
 *                                 // but here will never be called.
 *     );
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return timeoutWith_1.timeoutWith(due, withObservable, scheduler)(this);
}
exports.timeoutWith = timeoutWith;
//# sourceMappingURL=timeoutWith.js.map

/***/ }),

/***/ "../../../../rxjs/operator/timestamp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var timestamp_1 = __webpack_require__("../../../../rxjs/operators/timestamp.js");
/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return timestamp_1.timestamp(scheduler)(this);
}
exports.timestamp = timestamp;
//# sourceMappingURL=timestamp.js.map

/***/ }),

/***/ "../../../../rxjs/operator/toArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toArray_1 = __webpack_require__("../../../../rxjs/operators/toArray.js");
/**
 * Collects all source emissions and emits them as an array when the source completes.
 *
 * <span class="informal">Get all values inside an array when the source completes</span>
 *
 * <img src="./img/toArray.png" width="100%">
 *
 * `toArray` will wait until the source Observable completes
 * before emitting the array containing all emissions.
 * When the source Observable errors no array will be emitted.
 *
 * @example <caption>Create array from input</caption>
 * const input = Rx.Observable.interval(100).take(4);
 *
 * input.toArray()
 *   .subscribe(arr => console.log(arr)); // [0,1,2,3]
 *
 * @see {@link buffer}
 *
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return toArray_1.toArray()(this);
}
exports.toArray = toArray;
//# sourceMappingURL=toArray.js.map

/***/ }),

/***/ "../../../../rxjs/operator/window.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window_1 = __webpack_require__("../../../../rxjs/operators/window.js");
/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return window_1.window(windowBoundaries)(this);
}
exports.window = window;
//# sourceMappingURL=window.js.map

/***/ }),

/***/ "../../../../rxjs/operator/windowCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var windowCount_1 = __webpack_require__("../../../../rxjs/operators/windowCount.js");
/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) { startWindowEvery = 0; }
    return windowCount_1.windowCount(windowSize, startWindowEvery)(this);
}
exports.windowCount = windowCount;
//# sourceMappingURL=windowCount.js.map

/***/ }),

/***/ "../../../../rxjs/operator/windowTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var isNumeric_1 = __webpack_require__("../../../../rxjs/util/isNumeric.js");
var isScheduler_1 = __webpack_require__("../../../../rxjs/util/isScheduler.js");
var windowTime_1 = __webpack_require__("../../../../rxjs/operators/windowTime.js");
function windowTime(windowTimeSpan) {
    var scheduler = async_1.async;
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (isScheduler_1.isScheduler(arguments[3])) {
        scheduler = arguments[3];
    }
    if (isScheduler_1.isScheduler(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (isNumeric_1.isNumeric(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (isScheduler_1.isScheduler(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (isNumeric_1.isNumeric(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return windowTime_1.windowTime(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler)(this);
}
exports.windowTime = windowTime;
//# sourceMappingURL=windowTime.js.map

/***/ }),

/***/ "../../../../rxjs/operator/windowToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var windowToggle_1 = __webpack_require__("../../../../rxjs/operators/windowToggle.js");
/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return windowToggle_1.windowToggle(openings, closingSelector)(this);
}
exports.windowToggle = windowToggle;
//# sourceMappingURL=windowToggle.js.map

/***/ }),

/***/ "../../../../rxjs/operator/windowWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var windowWhen_1 = __webpack_require__("../../../../rxjs/operators/windowWhen.js");
/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return windowWhen_1.windowWhen(closingSelector)(this);
}
exports.windowWhen = windowWhen;
//# sourceMappingURL=windowWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/withLatestFrom.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var withLatestFrom_1 = __webpack_require__("../../../../rxjs/operators/withLatestFrom.js");
/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return withLatestFrom_1.withLatestFrom.apply(void 0, args)(this);
}
exports.withLatestFrom = withLatestFrom;
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),

/***/ "../../../../rxjs/operator/zip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var zip_1 = __webpack_require__("../../../../rxjs/operators/zip.js");
/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return zip_1.zip.apply(void 0, observables)(this);
}
exports.zipProto = zipProto;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "../../../../rxjs/operator/zipAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var zipAll_1 = __webpack_require__("../../../../rxjs/operators/zipAll.js");
/**
 * @param project
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method zipAll
 * @owner Observable
 */
function zipAll(project) {
    return zipAll_1.zipAll(project)(this);
}
exports.zipAll = zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ }),

/***/ "../../../../rxjs/operators/buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return function bufferOperatorFunction(source) {
        return source.lift(new BufferOperator(closingNotifier));
    };
}
exports.buffer = buffer;
var BufferOperator = (function () {
    function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSubscriber = (function (_super) {
    __extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
        _super.call(this, destination);
        this.buffer = [];
        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
    }
    BufferSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };
    return BufferSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ "../../../../rxjs/operators/bufferCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    return function bufferCountOperatorFunction(source) {
        return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    };
}
exports.bufferCount = bufferCount;
var BufferCountOperator = (function () {
    function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) {
            this.subscriberClass = BufferCountSubscriber;
        }
        else {
            this.subscriberClass = BufferSkipCountSubscriber;
        }
    }
    BufferCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferCountSubscriber = (function (_super) {
    __extends(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.buffer = [];
    }
    BufferCountSubscriber.prototype._next = function (value) {
        var buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
        }
    };
    BufferCountSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer.length > 0) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
}(Subscriber_1.Subscriber));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSkipCountSubscriber = (function (_super) {
    __extends(BufferSkipCountSubscriber, _super);
    function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [];
        this.count = 0;
    }
    BufferSkipCountSubscriber.prototype._next = function (value) {
        var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
        this.count++;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (var i = buffers.length; i--;) {
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                buffers.splice(i, 1);
                this.destination.next(buffer);
            }
        }
    };
    BufferSkipCountSubscriber.prototype._complete = function () {
        var _a = this, buffers = _a.buffers, destination = _a.destination;
        while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        _super.prototype._complete.call(this);
    };
    return BufferSkipCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=bufferCount.js.map

/***/ }),

/***/ "../../../../rxjs/operators/bufferTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var isScheduler_1 = __webpack_require__("../../../../rxjs/util/isScheduler.js");
/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = async_1.async;
    if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return function bufferTimeOperatorFunction(source) {
        return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
    };
}
exports.bufferTime = bufferTime;
var BufferTimeOperator = (function () {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
}());
var Context = (function () {
    function Context() {
        this.buffer = [];
    }
    return Context;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferTimeSubscriber = (function (_super) {
    __extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        _super.call(this, destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
        this.contexts = [];
        var context = this.openContext();
        this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (this.timespanOnly) {
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            var closeState = { subscriber: this, context: context };
            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
    }
    BufferTimeSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
            var context = contexts[i];
            var buffer = context.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    };
    BufferTimeSubscriber.prototype._error = function (err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function () {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while (contexts.length > 0) {
            var context = contexts.shift();
            destination.next(context.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function () {
        this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function (context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber.prototype.openContext = function () {
        var context = new Context();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function (context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    };
    return BufferTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}
//# sourceMappingURL=bufferTime.js.map

/***/ }),

/***/ "../../../../rxjs/operators/bufferToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return function bufferToggleOperatorFunction(source) {
        return source.lift(new BufferToggleOperator(openings, closingSelector));
    };
}
exports.bufferToggle = bufferToggle;
var BufferToggleOperator = (function () {
    function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferToggleSubscriber = (function (_super) {
    __extends(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(subscribeToResult_1.subscribeToResult(this, openings));
    }
    BufferToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
            contexts[i].buffer.push(value);
        }
    };
    BufferToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            this.destination.next(context.buffer);
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
        this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber.prototype.openBuffer = function (value) {
        try {
            var closingSelector = this.closingSelector;
            var closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) {
                this.trySubscribe(closingNotifier);
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
        var contexts = this.contexts;
        if (contexts && context) {
            var buffer = context.buffer, subscription = context.subscription;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    };
    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new Subscription_1.Subscription();
        var context = { buffer: buffer, subscription: subscription };
        contexts.push(context);
        var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
            this.closeBuffer(context);
        }
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    };
    return BufferToggleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=bufferToggle.js.map

/***/ }),

/***/ "../../../../rxjs/operators/bufferWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return function (source) {
        return source.lift(new BufferWhenOperator(closingSelector));
    };
}
exports.bufferWhen = bufferWhen;
var BufferWhenOperator = (function () {
    function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    };
    return BufferWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferWhenSubscriber = (function (_super) {
    __extends(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.closingSelector = closingSelector;
        this.subscribing = false;
        this.openBuffer();
    }
    BufferWhenSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function () {
        this.buffer = null;
        this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function () {
        if (this.subscribing) {
            this.complete();
        }
        else {
            this.openBuffer();
        }
    };
    BufferWhenSubscriber.prototype.openBuffer = function () {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject_1.errorObject) {
            this.error(errorObject_1.errorObject.e);
        }
        else {
            closingSubscription = new Subscription_1.Subscription();
            this.closingSubscription = closingSubscription;
            this.add(closingSubscription);
            this.subscribing = true;
            closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
            this.subscribing = false;
        }
    };
    return BufferWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=bufferWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operators/combineAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var combineLatest_1 = __webpack_require__("../../../../rxjs/operators/combineLatest.js");
function combineAll(project) {
    return function (source) { return source.lift(new combineLatest_1.CombineLatestOperator(project)); };
}
exports.combineAll = combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ }),

/***/ "../../../../rxjs/operators/combineLatest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArrayObservable_1 = __webpack_require__("../../../../rxjs/observable/ArrayObservable.js");
var isArray_1 = __webpack_require__("../../../../rxjs/util/isArray.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var none = {};
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0].slice();
    }
    return function (source) { return source.lift.call(new ArrayObservable_1.ArrayObservable([source].concat(observables)), new CombineLatestOperator(project)); };
}
exports.combineLatest = combineLatest;
var CombineLatestOperator = (function () {
    function CombineLatestOperator(project) {
        this.project = project;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.project));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
        _super.call(this, destination);
        this.project = project;
        this.active = 0;
        this.values = [];
        this.observables = [];
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(none);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === none ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.project) {
                this._tryProject(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryProject = function (values) {
        var result;
        try {
            result = this.project.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "../../../../rxjs/operators/concat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var concat_1 = __webpack_require__("../../../../rxjs/observable/concat.js");
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function (source) { return source.lift.call(concat_1.concat.apply(void 0, [source].concat(observables))); };
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "../../../../rxjs/operators/concatMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var concatMap_1 = __webpack_require__("../../../../rxjs/operators/concatMap.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return concatMap_1.concatMap(function () { return innerObservable; }, resultSelector);
}
exports.concatMapTo = concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operators/count.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return function (source) { return source.lift(new CountOperator(predicate, source)); };
}
exports.count = count;
var CountOperator = (function () {
    function CountOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    CountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CountSubscriber = (function (_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.count = 0;
        this.index = 0;
    }
    CountSubscriber.prototype._next = function (value) {
        if (this.predicate) {
            this._tryPredicate(value);
        }
        else {
            this.count++;
        }
    };
    CountSubscriber.prototype._tryPredicate = function (value) {
        var result;
        try {
            result = this.predicate(value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.count++;
        }
    };
    CountSubscriber.prototype._complete = function () {
        this.destination.next(this.count);
        this.destination.complete();
    };
    return CountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=count.js.map

/***/ }),

/***/ "../../../../rxjs/operators/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return function (source) { return source.lift(new DebounceOperator(durationSelector)); };
}
exports.debounce = debounce;
var DebounceOperator = (function () {
    function DebounceOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceSubscriber = (function (_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
        this.durationSubscription = null;
    }
    DebounceSubscriber.prototype._next = function (value) {
        try {
            var result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DebounceSubscriber.prototype._complete = function () {
        this.emitValue();
        this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function (value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = subscribeToResult_1.subscribeToResult(this, duration);
        if (!subscription.closed) {
            this.add(this.durationSubscription = subscription);
        }
    };
    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            var value = this.value;
            var subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = null;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = null;
            this.hasValue = false;
            _super.prototype._next.call(this, value);
        }
    };
    return DebounceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=debounce.js.map

/***/ }),

/***/ "../../../../rxjs/operators/delay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var isDate_1 = __webpack_require__("../../../../rxjs/util/isDate.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Notification_1 = __webpack_require__("../../../../rxjs/Notification.js");
/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=async] The IScheduler to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    var absoluteDelay = isDate_1.isDate(delay);
    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return function (source) { return source.lift(new DelayOperator(delayFor, scheduler)); };
}
exports.delay = delay;
var DelayOperator = (function () {
    function DelayOperator(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DelaySubscriber = (function (_super) {
    __extends(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
        _super.call(this, destination);
        this.delay = delay;
        this.scheduler = scheduler;
        this.queue = [];
        this.active = false;
        this.errored = false;
    }
    DelaySubscriber.dispatch = function (state) {
        var source = state.source;
        var queue = source.queue;
        var scheduler = state.scheduler;
        var destination = state.destination;
        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
            queue.shift().notification.observe(destination);
        }
        if (queue.length > 0) {
            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay_1);
        }
        else {
            source.active = false;
        }
    };
    DelaySubscriber.prototype._schedule = function (scheduler) {
        this.active = true;
        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this, destination: this.destination, scheduler: scheduler
        }));
    };
    DelaySubscriber.prototype.scheduleNotification = function (notification) {
        if (this.errored === true) {
            return;
        }
        var scheduler = this.scheduler;
        var message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) {
            this._schedule(scheduler);
        }
    };
    DelaySubscriber.prototype._next = function (value) {
        this.scheduleNotification(Notification_1.Notification.createNext(value));
    };
    DelaySubscriber.prototype._error = function (err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
    };
    DelaySubscriber.prototype._complete = function () {
        this.scheduleNotification(Notification_1.Notification.createComplete());
    };
    return DelaySubscriber;
}(Subscriber_1.Subscriber));
var DelayMessage = (function () {
    function DelayMessage(time, notification) {
        this.time = time;
        this.notification = notification;
    }
    return DelayMessage;
}());
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ "../../../../rxjs/operators/delayWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function (source) {
            return new SubscriptionDelayObservable(source, subscriptionDelay)
                .lift(new DelayWhenOperator(delayDurationSelector));
        };
    }
    return function (source) { return source.lift(new DelayWhenOperator(delayDurationSelector)); };
}
exports.delayWhen = delayWhen;
var DelayWhenOperator = (function () {
    function DelayWhenOperator(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DelayWhenSubscriber = (function (_super) {
    __extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
        _super.call(this, destination);
        this.delayDurationSelector = delayDurationSelector;
        this.completed = false;
        this.delayNotifierSubscriptions = [];
        this.values = [];
    }
    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function (value) {
        try {
            var delayNotifier = this.delayDurationSelector(value);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DelayWhenSubscriber.prototype._complete = function () {
        this.completed = true;
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        var value = null;
        if (subscriptionIdx !== -1) {
            value = this.values[subscriptionIdx];
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
            this.values.splice(subscriptionIdx, 1);
        }
        return value;
    };
    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
        var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            this.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
        this.values.push(value);
    };
    DelayWhenSubscriber.prototype.tryComplete = function () {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    };
    return DelayWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelayObservable = (function (_super) {
    __extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
        _super.call(this);
        this.source = source;
        this.subscriptionDelay = subscriptionDelay;
    }
    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
}(Observable_1.Observable));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelaySubscriber = (function (_super) {
    __extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
        _super.call(this);
        this.parent = parent;
        this.source = source;
        this.sourceSubscribed = false;
    }
    SubscriptionDelaySubscriber.prototype._next = function (unused) {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function (err) {
        this.unsubscribe();
        this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function () {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    };
    return SubscriptionDelaySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=delayWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operators/dematerialize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return function dematerializeOperatorFunction(source) {
        return source.lift(new DeMaterializeOperator());
    };
}
exports.dematerialize = dematerialize;
var DeMaterializeOperator = (function () {
    function DeMaterializeOperator() {
    }
    DeMaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DeMaterializeSubscriber = (function (_super) {
    __extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    DeMaterializeSubscriber.prototype._next = function (value) {
        value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=dematerialize.js.map

/***/ }),

/***/ "../../../../rxjs/operators/distinct.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var Set_1 = __webpack_require__("../../../../rxjs/util/Set.js");
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return function (source) { return source.lift(new DistinctOperator(keySelector, flushes)); };
}
exports.distinct = distinct;
var DistinctOperator = (function () {
    function DistinctOperator(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
    }
    DistinctOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
    };
    return DistinctOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctSubscriber = (function (_super) {
    __extends(DistinctSubscriber, _super);
    function DistinctSubscriber(destination, keySelector, flushes) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.values = new Set_1.Set();
        if (flushes) {
            this.add(subscribeToResult_1.subscribeToResult(this, flushes));
        }
    }
    DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values.clear();
    };
    DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DistinctSubscriber.prototype._next = function (value) {
        if (this.keySelector) {
            this._useKeySelector(value);
        }
        else {
            this._finalizeNext(value, value);
        }
    };
    DistinctSubscriber.prototype._useKeySelector = function (value) {
        var key;
        var destination = this.destination;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this._finalizeNext(key, value);
    };
    DistinctSubscriber.prototype._finalizeNext = function (key, value) {
        var values = this.values;
        if (!values.has(key)) {
            values.add(key);
            this.destination.next(value);
        }
    };
    return DistinctSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.DistinctSubscriber = DistinctSubscriber;
//# sourceMappingURL=distinct.js.map

/***/ }),

/***/ "../../../../rxjs/operators/distinctUntilKeyChanged.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var distinctUntilChanged_1 = __webpack_require__("../../../../rxjs/operators/distinctUntilChanged.js");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged(function (x, y) { return compare ? compare(x[key], y[key]) : x[key] === y[key]; });
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),

/***/ "../../../../rxjs/operators/elementAt.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__("../../../../rxjs/util/ArgumentOutOfRangeError.js");
/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return function (source) { return source.lift(new ElementAtOperator(index, defaultValue)); };
}
exports.elementAt = elementAt;
var ElementAtOperator = (function () {
    function ElementAtOperator(index, defaultValue) {
        this.index = index;
        this.defaultValue = defaultValue;
        if (index < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    ElementAtOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ElementAtSubscriber(subscriber, this.index, this.defaultValue));
    };
    return ElementAtOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ElementAtSubscriber = (function (_super) {
    __extends(ElementAtSubscriber, _super);
    function ElementAtSubscriber(destination, index, defaultValue) {
        _super.call(this, destination);
        this.index = index;
        this.defaultValue = defaultValue;
    }
    ElementAtSubscriber.prototype._next = function (x) {
        if (this.index-- === 0) {
            this.destination.next(x);
            this.destination.complete();
        }
    };
    ElementAtSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index >= 0) {
            if (typeof this.defaultValue !== 'undefined') {
                destination.next(this.defaultValue);
            }
            else {
                destination.error(new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError);
            }
        }
        destination.complete();
    };
    return ElementAtSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=elementAt.js.map

/***/ }),

/***/ "../../../../rxjs/operators/exhaust.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return function (source) { return source.lift(new SwitchFirstOperator()); };
}
exports.exhaust = exhaust;
var SwitchFirstOperator = (function () {
    function SwitchFirstOperator() {
    }
    SwitchFirstOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber(subscriber));
    };
    return SwitchFirstOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstSubscriber = (function (_super) {
    __extends(SwitchFirstSubscriber, _super);
    function SwitchFirstSubscriber(destination) {
        _super.call(this, destination);
        this.hasCompleted = false;
        this.hasSubscription = false;
    }
    SwitchFirstSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(subscribeToResult_1.subscribeToResult(this, value));
        }
    };
    SwitchFirstSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=exhaust.js.map

/***/ }),

/***/ "../../../../rxjs/operators/exhaustMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000).take(5));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return function (source) { return source.lift(new SwitchFirstMapOperator(project, resultSelector)); };
}
exports.exhaustMap = exhaustMap;
var SwitchFirstMapOperator = (function () {
    function SwitchFirstMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchFirstMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchFirstMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstMapSubscriber = (function (_super) {
    __extends(SwitchFirstMapSubscriber, _super);
    function SwitchFirstMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.hasSubscription = false;
        this.hasCompleted = false;
        this.index = 0;
    }
    SwitchFirstMapSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    };
    SwitchFirstMapSubscriber.prototype.tryNext = function (value) {
        var index = this.index++;
        var destination = this.destination;
        try {
            var result = this.project(value, index);
            this.hasSubscription = true;
            this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchFirstMapSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        try {
            var result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
            destination.next(result);
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SwitchFirstMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=exhaustMap.js.map

/***/ }),

/***/ "../../../../rxjs/operators/expand.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (scheduler === void 0) { scheduler = undefined; }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return function (source) { return source.lift(new ExpandOperator(project, concurrent, scheduler)); };
}
exports.expand = expand;
var ExpandOperator = (function () {
    function ExpandOperator(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
}());
exports.ExpandOperator = ExpandOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ExpandSubscriber = (function (_super) {
    __extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
        _super.call(this, destination);
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
        this.index = 0;
        this.active = 0;
        this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) {
            this.buffer = [];
        }
    }
    ExpandSubscriber.dispatch = function (arg) {
        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
        subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        var index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            var result = tryCatch_1.tryCatch(this.project)(value, index);
            if (result === errorObject_1.errorObject) {
                destination.error(errorObject_1.errorObject.e);
            }
            else if (!this.scheduler) {
                this.subscribeToProjection(result, value, index);
            }
            else {
                var state = { subscriber: this, result: result, value: value, index: index };
                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
        this.active++;
        this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    ExpandSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer && buffer.length > 0) {
            this._next(buffer.shift());
        }
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    return ExpandSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.ExpandSubscriber = ExpandSubscriber;
//# sourceMappingURL=expand.js.map

/***/ }),

/***/ "../../../../rxjs/operators/find.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate is not a function');
    }
    return function (source) { return source.lift(new FindValueOperator(predicate, source, false, thisArg)); };
}
exports.find = find;
var FindValueOperator = (function () {
    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    FindValueOperator.prototype.call = function (observer, source) {
        return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator;
}());
exports.FindValueOperator = FindValueOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FindValueSubscriber = (function (_super) {
    __extends(FindValueSubscriber, _super);
    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
        this.index = 0;
    }
    FindValueSubscriber.prototype.notifyComplete = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    FindValueSubscriber.prototype._next = function (value) {
        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
        var index = this.index++;
        try {
            var result = predicate.call(thisArg || this, value, index, this.source);
            if (result) {
                this.notifyComplete(this.yieldIndex ? index : value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    FindValueSubscriber.prototype._complete = function () {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber;
}(Subscriber_1.Subscriber));
exports.FindValueSubscriber = FindValueSubscriber;
//# sourceMappingURL=find.js.map

/***/ }),

/***/ "../../../../rxjs/operators/findIndex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var find_1 = __webpack_require__("../../../../rxjs/operators/find.js");
/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return function (source) { return source.lift(new find_1.FindValueOperator(predicate, source, true, thisArg)); };
}
exports.findIndex = findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ }),

/***/ "../../../../rxjs/operators/groupBy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var Map_1 = __webpack_require__("../../../../rxjs/util/Map.js");
var FastMap_1 = __webpack_require__("../../../../rxjs/util/FastMap.js");
/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
exports.groupBy = groupBy;
var GroupByOperator = (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupBySubscriber = (function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
        this.groups = null;
        this.attemptedToUnsubscribe = false;
        this.count = 0;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = this.subjectSelector ? this.subjectSelector() : new Subject_1.Subject();
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(Subscriber_1.Subscriber));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupDurationSubscriber = (function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        _super.call(this, group);
        this.key = key;
        this.group = group;
        this.parent = parent;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(Subscriber_1.Subscriber));
/**
 * An Observable representing values belonging to the same group represented by
 * a common key. The values emitted by a GroupedObservable come from the source
 * Observable. The common key is available as the field `key` on a
 * GroupedObservable instance.
 *
 * @class GroupedObservable<K, T>
 */
var GroupedObservable = (function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        _super.call(this);
        this.key = key;
        this.groupSubject = groupSubject;
        this.refCountSubscription = refCountSubscription;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new Subscription_1.Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(Observable_1.Observable));
exports.GroupedObservable = GroupedObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerRefCountSubscription = (function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        _super.call(this);
        this.parent = parent;
        parent.count++;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(Subscription_1.Subscription));
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "../../../../rxjs/operators/ignoreElements.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var noop_1 = __webpack_require__("../../../../rxjs/util/noop.js");
/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return function ignoreElementsOperatorFunction(source) {
        return source.lift(new IgnoreElementsOperator());
    };
}
exports.ignoreElements = ignoreElements;
var IgnoreElementsOperator = (function () {
    function IgnoreElementsOperator() {
    }
    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IgnoreElementsSubscriber = (function (_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
        _super.apply(this, arguments);
    }
    IgnoreElementsSubscriber.prototype._next = function (unused) {
        noop_1.noop();
    };
    return IgnoreElementsSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ignoreElements.js.map

/***/ }),

/***/ "../../../../rxjs/operators/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var audit_1 = __webpack_require__("../../../../rxjs/operators/audit.js");
exports.audit = audit_1.audit;
var auditTime_1 = __webpack_require__("../../../../rxjs/operators/auditTime.js");
exports.auditTime = auditTime_1.auditTime;
var buffer_1 = __webpack_require__("../../../../rxjs/operators/buffer.js");
exports.buffer = buffer_1.buffer;
var bufferCount_1 = __webpack_require__("../../../../rxjs/operators/bufferCount.js");
exports.bufferCount = bufferCount_1.bufferCount;
var bufferTime_1 = __webpack_require__("../../../../rxjs/operators/bufferTime.js");
exports.bufferTime = bufferTime_1.bufferTime;
var bufferToggle_1 = __webpack_require__("../../../../rxjs/operators/bufferToggle.js");
exports.bufferToggle = bufferToggle_1.bufferToggle;
var bufferWhen_1 = __webpack_require__("../../../../rxjs/operators/bufferWhen.js");
exports.bufferWhen = bufferWhen_1.bufferWhen;
var catchError_1 = __webpack_require__("../../../../rxjs/operators/catchError.js");
exports.catchError = catchError_1.catchError;
var combineAll_1 = __webpack_require__("../../../../rxjs/operators/combineAll.js");
exports.combineAll = combineAll_1.combineAll;
var combineLatest_1 = __webpack_require__("../../../../rxjs/operators/combineLatest.js");
exports.combineLatest = combineLatest_1.combineLatest;
var concat_1 = __webpack_require__("../../../../rxjs/operators/concat.js");
exports.concat = concat_1.concat;
var concatAll_1 = __webpack_require__("../../../../rxjs/operators/concatAll.js");
exports.concatAll = concatAll_1.concatAll;
var concatMap_1 = __webpack_require__("../../../../rxjs/operators/concatMap.js");
exports.concatMap = concatMap_1.concatMap;
var concatMapTo_1 = __webpack_require__("../../../../rxjs/operators/concatMapTo.js");
exports.concatMapTo = concatMapTo_1.concatMapTo;
var count_1 = __webpack_require__("../../../../rxjs/operators/count.js");
exports.count = count_1.count;
var debounce_1 = __webpack_require__("../../../../rxjs/operators/debounce.js");
exports.debounce = debounce_1.debounce;
var debounceTime_1 = __webpack_require__("../../../../rxjs/operators/debounceTime.js");
exports.debounceTime = debounceTime_1.debounceTime;
var defaultIfEmpty_1 = __webpack_require__("../../../../rxjs/operators/defaultIfEmpty.js");
exports.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
var delay_1 = __webpack_require__("../../../../rxjs/operators/delay.js");
exports.delay = delay_1.delay;
var delayWhen_1 = __webpack_require__("../../../../rxjs/operators/delayWhen.js");
exports.delayWhen = delayWhen_1.delayWhen;
var dematerialize_1 = __webpack_require__("../../../../rxjs/operators/dematerialize.js");
exports.dematerialize = dematerialize_1.dematerialize;
var distinct_1 = __webpack_require__("../../../../rxjs/operators/distinct.js");
exports.distinct = distinct_1.distinct;
var distinctUntilChanged_1 = __webpack_require__("../../../../rxjs/operators/distinctUntilChanged.js");
exports.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
var distinctUntilKeyChanged_1 = __webpack_require__("../../../../rxjs/operators/distinctUntilKeyChanged.js");
exports.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
var elementAt_1 = __webpack_require__("../../../../rxjs/operators/elementAt.js");
exports.elementAt = elementAt_1.elementAt;
var every_1 = __webpack_require__("../../../../rxjs/operators/every.js");
exports.every = every_1.every;
var exhaust_1 = __webpack_require__("../../../../rxjs/operators/exhaust.js");
exports.exhaust = exhaust_1.exhaust;
var exhaustMap_1 = __webpack_require__("../../../../rxjs/operators/exhaustMap.js");
exports.exhaustMap = exhaustMap_1.exhaustMap;
var expand_1 = __webpack_require__("../../../../rxjs/operators/expand.js");
exports.expand = expand_1.expand;
var filter_1 = __webpack_require__("../../../../rxjs/operators/filter.js");
exports.filter = filter_1.filter;
var finalize_1 = __webpack_require__("../../../../rxjs/operators/finalize.js");
exports.finalize = finalize_1.finalize;
var find_1 = __webpack_require__("../../../../rxjs/operators/find.js");
exports.find = find_1.find;
var findIndex_1 = __webpack_require__("../../../../rxjs/operators/findIndex.js");
exports.findIndex = findIndex_1.findIndex;
var first_1 = __webpack_require__("../../../../rxjs/operators/first.js");
exports.first = first_1.first;
var groupBy_1 = __webpack_require__("../../../../rxjs/operators/groupBy.js");
exports.groupBy = groupBy_1.groupBy;
var ignoreElements_1 = __webpack_require__("../../../../rxjs/operators/ignoreElements.js");
exports.ignoreElements = ignoreElements_1.ignoreElements;
var isEmpty_1 = __webpack_require__("../../../../rxjs/operators/isEmpty.js");
exports.isEmpty = isEmpty_1.isEmpty;
var last_1 = __webpack_require__("../../../../rxjs/operators/last.js");
exports.last = last_1.last;
var map_1 = __webpack_require__("../../../../rxjs/operators/map.js");
exports.map = map_1.map;
var mapTo_1 = __webpack_require__("../../../../rxjs/operators/mapTo.js");
exports.mapTo = mapTo_1.mapTo;
var materialize_1 = __webpack_require__("../../../../rxjs/operators/materialize.js");
exports.materialize = materialize_1.materialize;
var max_1 = __webpack_require__("../../../../rxjs/operators/max.js");
exports.max = max_1.max;
var merge_1 = __webpack_require__("../../../../rxjs/operators/merge.js");
exports.merge = merge_1.merge;
var mergeAll_1 = __webpack_require__("../../../../rxjs/operators/mergeAll.js");
exports.mergeAll = mergeAll_1.mergeAll;
var mergeMap_1 = __webpack_require__("../../../../rxjs/operators/mergeMap.js");
exports.mergeMap = mergeMap_1.mergeMap;
var mergeMap_2 = __webpack_require__("../../../../rxjs/operators/mergeMap.js");
exports.flatMap = mergeMap_2.mergeMap;
var mergeMapTo_1 = __webpack_require__("../../../../rxjs/operators/mergeMapTo.js");
exports.mergeMapTo = mergeMapTo_1.mergeMapTo;
var mergeScan_1 = __webpack_require__("../../../../rxjs/operators/mergeScan.js");
exports.mergeScan = mergeScan_1.mergeScan;
var min_1 = __webpack_require__("../../../../rxjs/operators/min.js");
exports.min = min_1.min;
var multicast_1 = __webpack_require__("../../../../rxjs/operators/multicast.js");
exports.multicast = multicast_1.multicast;
var observeOn_1 = __webpack_require__("../../../../rxjs/operators/observeOn.js");
exports.observeOn = observeOn_1.observeOn;
var onErrorResumeNext_1 = __webpack_require__("../../../../rxjs/operators/onErrorResumeNext.js");
exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
var pairwise_1 = __webpack_require__("../../../../rxjs/operators/pairwise.js");
exports.pairwise = pairwise_1.pairwise;
var partition_1 = __webpack_require__("../../../../rxjs/operators/partition.js");
exports.partition = partition_1.partition;
var pluck_1 = __webpack_require__("../../../../rxjs/operators/pluck.js");
exports.pluck = pluck_1.pluck;
var publish_1 = __webpack_require__("../../../../rxjs/operators/publish.js");
exports.publish = publish_1.publish;
var publishBehavior_1 = __webpack_require__("../../../../rxjs/operators/publishBehavior.js");
exports.publishBehavior = publishBehavior_1.publishBehavior;
var publishLast_1 = __webpack_require__("../../../../rxjs/operators/publishLast.js");
exports.publishLast = publishLast_1.publishLast;
var publishReplay_1 = __webpack_require__("../../../../rxjs/operators/publishReplay.js");
exports.publishReplay = publishReplay_1.publishReplay;
var race_1 = __webpack_require__("../../../../rxjs/operators/race.js");
exports.race = race_1.race;
var reduce_1 = __webpack_require__("../../../../rxjs/operators/reduce.js");
exports.reduce = reduce_1.reduce;
var repeat_1 = __webpack_require__("../../../../rxjs/operators/repeat.js");
exports.repeat = repeat_1.repeat;
var repeatWhen_1 = __webpack_require__("../../../../rxjs/operators/repeatWhen.js");
exports.repeatWhen = repeatWhen_1.repeatWhen;
var retry_1 = __webpack_require__("../../../../rxjs/operators/retry.js");
exports.retry = retry_1.retry;
var retryWhen_1 = __webpack_require__("../../../../rxjs/operators/retryWhen.js");
exports.retryWhen = retryWhen_1.retryWhen;
var refCount_1 = __webpack_require__("../../../../rxjs/operators/refCount.js");
exports.refCount = refCount_1.refCount;
var sample_1 = __webpack_require__("../../../../rxjs/operators/sample.js");
exports.sample = sample_1.sample;
var sampleTime_1 = __webpack_require__("../../../../rxjs/operators/sampleTime.js");
exports.sampleTime = sampleTime_1.sampleTime;
var scan_1 = __webpack_require__("../../../../rxjs/operators/scan.js");
exports.scan = scan_1.scan;
var sequenceEqual_1 = __webpack_require__("../../../../rxjs/operators/sequenceEqual.js");
exports.sequenceEqual = sequenceEqual_1.sequenceEqual;
var share_1 = __webpack_require__("../../../../rxjs/operators/share.js");
exports.share = share_1.share;
var shareReplay_1 = __webpack_require__("../../../../rxjs/operators/shareReplay.js");
exports.shareReplay = shareReplay_1.shareReplay;
var single_1 = __webpack_require__("../../../../rxjs/operators/single.js");
exports.single = single_1.single;
var skip_1 = __webpack_require__("../../../../rxjs/operators/skip.js");
exports.skip = skip_1.skip;
var skipLast_1 = __webpack_require__("../../../../rxjs/operators/skipLast.js");
exports.skipLast = skipLast_1.skipLast;
var skipUntil_1 = __webpack_require__("../../../../rxjs/operators/skipUntil.js");
exports.skipUntil = skipUntil_1.skipUntil;
var skipWhile_1 = __webpack_require__("../../../../rxjs/operators/skipWhile.js");
exports.skipWhile = skipWhile_1.skipWhile;
var startWith_1 = __webpack_require__("../../../../rxjs/operators/startWith.js");
exports.startWith = startWith_1.startWith;
/**
 * TODO(https://github.com/ReactiveX/rxjs/issues/2900): Add back subscribeOn once it can be
 * treeshaken. Currently if this export is added back, it
 * forces apps to bring in asap scheduler along with
 * Immediate, root, and other supporting code.
 */
// export { subscribeOn } from './subscribeOn';
var switchAll_1 = __webpack_require__("../../../../rxjs/operators/switchAll.js");
exports.switchAll = switchAll_1.switchAll;
var switchMap_1 = __webpack_require__("../../../../rxjs/operators/switchMap.js");
exports.switchMap = switchMap_1.switchMap;
var switchMapTo_1 = __webpack_require__("../../../../rxjs/operators/switchMapTo.js");
exports.switchMapTo = switchMapTo_1.switchMapTo;
var take_1 = __webpack_require__("../../../../rxjs/operators/take.js");
exports.take = take_1.take;
var takeLast_1 = __webpack_require__("../../../../rxjs/operators/takeLast.js");
exports.takeLast = takeLast_1.takeLast;
var takeUntil_1 = __webpack_require__("../../../../rxjs/operators/takeUntil.js");
exports.takeUntil = takeUntil_1.takeUntil;
var takeWhile_1 = __webpack_require__("../../../../rxjs/operators/takeWhile.js");
exports.takeWhile = takeWhile_1.takeWhile;
var tap_1 = __webpack_require__("../../../../rxjs/operators/tap.js");
exports.tap = tap_1.tap;
var throttle_1 = __webpack_require__("../../../../rxjs/operators/throttle.js");
exports.throttle = throttle_1.throttle;
var throttleTime_1 = __webpack_require__("../../../../rxjs/operators/throttleTime.js");
exports.throttleTime = throttleTime_1.throttleTime;
var timeInterval_1 = __webpack_require__("../../../../rxjs/operators/timeInterval.js");
exports.timeInterval = timeInterval_1.timeInterval;
var timeout_1 = __webpack_require__("../../../../rxjs/operators/timeout.js");
exports.timeout = timeout_1.timeout;
var timeoutWith_1 = __webpack_require__("../../../../rxjs/operators/timeoutWith.js");
exports.timeoutWith = timeoutWith_1.timeoutWith;
var timestamp_1 = __webpack_require__("../../../../rxjs/operators/timestamp.js");
exports.timestamp = timestamp_1.timestamp;
var toArray_1 = __webpack_require__("../../../../rxjs/operators/toArray.js");
exports.toArray = toArray_1.toArray;
var window_1 = __webpack_require__("../../../../rxjs/operators/window.js");
exports.window = window_1.window;
var windowCount_1 = __webpack_require__("../../../../rxjs/operators/windowCount.js");
exports.windowCount = windowCount_1.windowCount;
var windowTime_1 = __webpack_require__("../../../../rxjs/operators/windowTime.js");
exports.windowTime = windowTime_1.windowTime;
var windowToggle_1 = __webpack_require__("../../../../rxjs/operators/windowToggle.js");
exports.windowToggle = windowToggle_1.windowToggle;
var windowWhen_1 = __webpack_require__("../../../../rxjs/operators/windowWhen.js");
exports.windowWhen = windowWhen_1.windowWhen;
var withLatestFrom_1 = __webpack_require__("../../../../rxjs/operators/withLatestFrom.js");
exports.withLatestFrom = withLatestFrom_1.withLatestFrom;
var zip_1 = __webpack_require__("../../../../rxjs/operators/zip.js");
exports.zip = zip_1.zip;
var zipAll_1 = __webpack_require__("../../../../rxjs/operators/zipAll.js");
exports.zipAll = zipAll_1.zipAll;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../rxjs/operators/isEmpty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
function isEmpty() {
    return function (source) { return source.lift(new IsEmptyOperator()); };
}
exports.isEmpty = isEmpty;
var IsEmptyOperator = (function () {
    function IsEmptyOperator() {
    }
    IsEmptyOperator.prototype.call = function (observer, source) {
        return source.subscribe(new IsEmptySubscriber(observer));
    };
    return IsEmptyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IsEmptySubscriber = (function (_super) {
    __extends(IsEmptySubscriber, _super);
    function IsEmptySubscriber(destination) {
        _super.call(this, destination);
    }
    IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
        var destination = this.destination;
        destination.next(isEmpty);
        destination.complete();
    };
    IsEmptySubscriber.prototype._next = function (value) {
        this.notifyComplete(false);
    };
    IsEmptySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return IsEmptySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=isEmpty.js.map

/***/ }),

/***/ "../../../../rxjs/operators/mapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return function (source) { return source.lift(new MapToOperator(value)); };
}
exports.mapTo = mapTo;
var MapToOperator = (function () {
    function MapToOperator(value) {
        this.value = value;
    }
    MapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapToSubscriber = (function (_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
        _super.call(this, destination);
        this.value = value;
    }
    MapToSubscriber.prototype._next = function (x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=mapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operators/materialize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Notification_1 = __webpack_require__("../../../../rxjs/Notification.js");
/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return function materializeOperatorFunction(source) {
        return source.lift(new MaterializeOperator());
    };
}
exports.materialize = materialize;
var MaterializeOperator = (function () {
    function MaterializeOperator() {
    }
    MaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MaterializeSubscriber = (function (_super) {
    __extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    MaterializeSubscriber.prototype._next = function (value) {
        this.destination.next(Notification_1.Notification.createNext(value));
    };
    MaterializeSubscriber.prototype._error = function (err) {
        var destination = this.destination;
        destination.next(Notification_1.Notification.createError(err));
        destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function () {
        var destination = this.destination;
        destination.next(Notification_1.Notification.createComplete());
        destination.complete();
    };
    return MaterializeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=materialize.js.map

/***/ }),

/***/ "../../../../rxjs/operators/max.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var reduce_1 = __webpack_require__("../../../../rxjs/operators/reduce.js");
/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    var max = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) > 0 ? x : y; }
        : function (x, y) { return x > y ? x : y; };
    return reduce_1.reduce(max);
}
exports.max = max;
//# sourceMappingURL=max.js.map

/***/ }),

/***/ "../../../../rxjs/operators/mergeMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
        resultSelector = null;
    }
    return function (source) { return source.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent)); };
}
exports.mergeMapTo = mergeMapTo;
// TODO: Figure out correct signature here: an Operator<Observable<T>, R>
//       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>
var MergeMapToOperator = (function () {
    function MergeMapToOperator(ish, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
    }
    MergeMapToOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
    };
    return MergeMapToOperator;
}());
exports.MergeMapToOperator = MergeMapToOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeMapToSubscriber = (function (_super) {
    __extends(MergeMapToSubscriber, _super);
    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        _super.call(this, destination);
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeMapToSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var resultSelector = this.resultSelector;
            var index = this.index++;
            var ish = this.ish;
            var destination = this.destination;
            this.active++;
            this._innerSub(ish, destination, resultSelector, value, index);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapToSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    MergeMapToSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapToSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeMapToSubscriber = MergeMapToSubscriber;
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operators/mergeScan.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return function (source) { return source.lift(new MergeScanOperator(accumulator, seed, concurrent)); };
}
exports.mergeScan = mergeScan;
var MergeScanOperator = (function () {
    function MergeScanOperator(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    MergeScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
    };
    return MergeScanOperator;
}());
exports.MergeScanOperator = MergeScanOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeScanSubscriber = (function (_super) {
    __extends(MergeScanSubscriber, _super);
    function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
        _super.call(this, destination);
        this.accumulator = accumulator;
        this.acc = acc;
        this.concurrent = concurrent;
        this.hasValue = false;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeScanSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var index = this.index++;
            var ish = tryCatch_1.tryCatch(this.accumulator)(this.acc, value);
            var destination = this.destination;
            if (ish === errorObject_1.errorObject) {
                destination.error(errorObject_1.errorObject.e);
            }
            else {
                this.active++;
                this._innerSub(ish, value, index);
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeScanSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var destination = this.destination;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    };
    MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    return MergeScanSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeScanSubscriber = MergeScanSubscriber;
//# sourceMappingURL=mergeScan.js.map

/***/ }),

/***/ "../../../../rxjs/operators/min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var reduce_1 = __webpack_require__("../../../../rxjs/operators/reduce.js");
/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    var min = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) < 0 ? x : y; }
        : function (x, y) { return x < y ? x : y; };
    return reduce_1.reduce(min);
}
exports.min = min;
//# sourceMappingURL=min.js.map

/***/ }),

/***/ "../../../../rxjs/operators/onErrorResumeNext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FromObservable_1 = __webpack_require__("../../../../rxjs/observable/FromObservable.js");
var isArray_1 = __webpack_require__("../../../../rxjs/util/isArray.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
        nextSources = nextSources[0];
    }
    return function (source) { return source.lift(new OnErrorResumeNextOperator(nextSources)); };
}
exports.onErrorResumeNext = onErrorResumeNext;
/* tslint:enable:max-line-length */
function onErrorResumeNextStatic() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    var source = null;
    if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
        nextSources = nextSources[0];
    }
    source = nextSources.shift();
    return new FromObservable_1.FromObservable(source, null).lift(new OnErrorResumeNextOperator(nextSources));
}
exports.onErrorResumeNextStatic = onErrorResumeNextStatic;
var OnErrorResumeNextOperator = (function () {
    function OnErrorResumeNextOperator(nextSources) {
        this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator;
}());
var OnErrorResumeNextSubscriber = (function (_super) {
    __extends(OnErrorResumeNextSubscriber, _super);
    function OnErrorResumeNextSubscriber(destination, nextSources) {
        _super.call(this, destination);
        this.destination = destination;
        this.nextSources = nextSources;
    }
    OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._error = function (err) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._complete = function () {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
        var next = this.nextSources.shift();
        if (next) {
            this.add(subscribeToResult_1.subscribeToResult(this, next));
        }
        else {
            this.destination.complete();
        }
    };
    return OnErrorResumeNextSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "../../../../rxjs/operators/pairwise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return function (source) { return source.lift(new PairwiseOperator()); };
}
exports.pairwise = pairwise;
var PairwiseOperator = (function () {
    function PairwiseOperator() {
    }
    PairwiseOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    };
    return PairwiseOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var PairwiseSubscriber = (function (_super) {
    __extends(PairwiseSubscriber, _super);
    function PairwiseSubscriber(destination) {
        _super.call(this, destination);
        this.hasPrev = false;
    }
    PairwiseSubscriber.prototype._next = function (value) {
        if (this.hasPrev) {
            this.destination.next([this.prev, value]);
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
    };
    return PairwiseSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=pairwise.js.map

/***/ }),

/***/ "../../../../rxjs/operators/partition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var not_1 = __webpack_require__("../../../../rxjs/util/not.js");
var filter_1 = __webpack_require__("../../../../rxjs/operators/filter.js");
/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return function (source) { return [
        filter_1.filter(predicate, thisArg)(source),
        filter_1.filter(not_1.not(predicate, thisArg))(source)
    ]; };
}
exports.partition = partition;
//# sourceMappingURL=partition.js.map

/***/ }),

/***/ "../../../../rxjs/operators/pluck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var map_1 = __webpack_require__("../../../../rxjs/operators/map.js");
/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return function (source) { return map_1.map(plucker(properties, length))(source); };
}
exports.pluck = pluck;
function plucker(props, length) {
    var mapper = function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp[props[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}
//# sourceMappingURL=pluck.js.map

/***/ }),

/***/ "../../../../rxjs/operators/publish.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var multicast_1 = __webpack_require__("../../../../rxjs/operators/multicast.js");
/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return selector ?
        multicast_1.multicast(function () { return new Subject_1.Subject(); }, selector) :
        multicast_1.multicast(new Subject_1.Subject());
}
exports.publish = publish;
//# sourceMappingURL=publish.js.map

/***/ }),

/***/ "../../../../rxjs/operators/publishBehavior.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
var multicast_1 = __webpack_require__("../../../../rxjs/operators/multicast.js");
/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return function (source) { return multicast_1.multicast(new BehaviorSubject_1.BehaviorSubject(value))(source); };
}
exports.publishBehavior = publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ }),

/***/ "../../../../rxjs/operators/publishLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncSubject_1 = __webpack_require__("../../../../rxjs/AsyncSubject.js");
var multicast_1 = __webpack_require__("../../../../rxjs/operators/multicast.js");
function publishLast() {
    return function (source) { return multicast_1.multicast(new AsyncSubject_1.AsyncSubject())(source); };
}
exports.publishLast = publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ }),

/***/ "../../../../rxjs/operators/publishReplay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ReplaySubject_1 = __webpack_require__("../../../../rxjs/ReplaySubject.js");
var multicast_1 = __webpack_require__("../../../../rxjs/operators/multicast.js");
/* tslint:enable:max-line-length */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
        scheduler = selectorOrScheduler;
    }
    var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    var subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
    return function (source) { return multicast_1.multicast(function () { return subject; }, selector)(source); };
}
exports.publishReplay = publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ }),

/***/ "../../../../rxjs/operators/race.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__("../../../../rxjs/util/isArray.js");
var race_1 = __webpack_require__("../../../../rxjs/observable/race.js");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function raceOperatorFunction(source) {
        // if the only argument is an array, it was most likely called with
        // `pair([obs1, obs2, ...])`
        if (observables.length === 1 && isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        return source.lift.call(race_1.race.apply(void 0, [source].concat(observables)));
    };
}
exports.race = race;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "../../../../rxjs/operators/repeat.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var EmptyObservable_1 = __webpack_require__("../../../../rxjs/observable/EmptyObservable.js");
/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) { count = -1; }
    return function (source) {
        if (count === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        else if (count < 0) {
            return source.lift(new RepeatOperator(-1, source));
        }
        else {
            return source.lift(new RepeatOperator(count - 1, source));
        }
    };
}
exports.repeat = repeat;
var RepeatOperator = (function () {
    function RepeatOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RepeatOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatSubscriber = (function (_super) {
    __extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RepeatSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.complete.call(this);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RepeatSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=repeat.js.map

/***/ }),

/***/ "../../../../rxjs/operators/repeatWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return function (source) { return source.lift(new RepeatWhenOperator(notifier)); };
}
exports.repeatWhen = repeatWhen;
var RepeatWhenOperator = (function () {
    function RepeatWhenOperator(notifier) {
        this.notifier = notifier;
    }
    RepeatWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
    };
    return RepeatWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatWhenSubscriber = (function (_super) {
    __extends(RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
        this.sourceIsBeingSubscribedTo = true;
    }
    RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    };
    RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        if (this.sourceIsBeingSubscribedTo === false) {
            return _super.prototype.complete.call(this);
        }
    };
    RepeatWhenSubscriber.prototype.complete = function () {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) {
                this.subscribeToRetries();
            }
            else if (this.retriesSubscription.closed) {
                return _super.prototype.complete.call(this);
            }
            this._unsubscribeAndRecycle();
            this.notifications.next();
        }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, notifications = _a.notifications, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.notifications = null;
        this.retries = null;
        this.retriesSubscription = null;
        _super.prototype._unsubscribeAndRecycle.call(this);
        this.notifications = notifications;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        return this;
    };
    RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
        this.notifications = new Subject_1.Subject();
        var retries = tryCatch_1.tryCatch(this.notifier)(this.notifications);
        if (retries === errorObject_1.errorObject) {
            return _super.prototype.complete.call(this);
        }
        this.retries = retries;
        this.retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
    };
    return RepeatWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=repeatWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operators/retry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) { count = -1; }
    return function (source) { return source.lift(new RetryOperator(count, source)); };
}
exports.retry = retry;
var RetryOperator = (function () {
    function RetryOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RetryOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetrySubscriber = (function (_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RetrySubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.error.call(this, err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RetrySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ "../../../../rxjs/operators/retryWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return function (source) { return source.lift(new RetryWhenOperator(notifier, source)); };
}
exports.retryWhen = retryWhen;
var RetryWhenOperator = (function () {
    function RetryWhenOperator(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetryWhenSubscriber = (function (_super) {
    __extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var errors = this.errors;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new Subject_1.Subject();
                retries = tryCatch_1.tryCatch(this.notifier)(errors);
                if (retries === errorObject_1.errorObject) {
                    return _super.prototype.error.call(this, errorObject_1.errorObject.e);
                }
                retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
            }
            else {
                this.errors = null;
                this.retriesSubscription = null;
            }
            this._unsubscribeAndRecycle();
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
        if (errors) {
            errors.unsubscribe();
            this.errors = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.errors = null;
        this.retries = null;
        this.retriesSubscription = null;
        this._unsubscribeAndRecycle();
        this.errors = errors;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=retryWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operators/sample.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return function (source) { return source.lift(new SampleOperator(notifier)); };
}
exports.sample = sample;
var SampleOperator = (function () {
    function SampleOperator(notifier) {
        this.notifier = notifier;
    }
    SampleOperator.prototype.call = function (subscriber, source) {
        var sampleSubscriber = new SampleSubscriber(subscriber);
        var subscription = source.subscribe(sampleSubscriber);
        subscription.add(subscribeToResult_1.subscribeToResult(sampleSubscriber, this.notifier));
        return subscription;
    };
    return SampleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleSubscriber = (function (_super) {
    __extends(SampleSubscriber, _super);
    function SampleSubscriber() {
        _super.apply(this, arguments);
        this.hasValue = false;
    }
    SampleSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    };
    return SampleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=sample.js.map

/***/ }),

/***/ "../../../../rxjs/operators/sampleTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return function (source) { return source.lift(new SampleTimeOperator(period, scheduler)); };
}
exports.sampleTime = sampleTime;
var SampleTimeOperator = (function () {
    function SampleTimeOperator(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleTimeSubscriber = (function (_super) {
    __extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
        _super.call(this, destination);
        this.period = period;
        this.scheduler = scheduler;
        this.hasValue = false;
        this.add(scheduler.schedule(dispatchNotification, period, { subscriber: this, period: period }));
    }
    SampleTimeSubscriber.prototype._next = function (value) {
        this.lastValue = value;
        this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    };
    return SampleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNotification(state) {
    var subscriber = state.subscriber, period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
}
//# sourceMappingURL=sampleTime.js.map

/***/ }),

/***/ "../../../../rxjs/operators/sequenceEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return function (source) { return source.lift(new SequenceEqualOperator(compareTo, comparor)); };
}
exports.sequenceEqual = sequenceEqual;
var SequenceEqualOperator = (function () {
    function SequenceEqualOperator(compareTo, comparor) {
        this.compareTo = compareTo;
        this.comparor = comparor;
    }
    SequenceEqualOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparor));
    };
    return SequenceEqualOperator;
}());
exports.SequenceEqualOperator = SequenceEqualOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SequenceEqualSubscriber = (function (_super) {
    __extends(SequenceEqualSubscriber, _super);
    function SequenceEqualSubscriber(destination, compareTo, comparor) {
        _super.call(this, destination);
        this.compareTo = compareTo;
        this.comparor = comparor;
        this._a = [];
        this._b = [];
        this._oneComplete = false;
        this.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, this)));
    }
    SequenceEqualSubscriber.prototype._next = function (value) {
        if (this._oneComplete && this._b.length === 0) {
            this.emit(false);
        }
        else {
            this._a.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype._complete = function () {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
    };
    SequenceEqualSubscriber.prototype.checkValues = function () {
        var _c = this, _a = _c._a, _b = _c._b, comparor = _c.comparor;
        while (_a.length > 0 && _b.length > 0) {
            var a = _a.shift();
            var b = _b.shift();
            var areEqual = false;
            if (comparor) {
                areEqual = tryCatch_1.tryCatch(comparor)(a, b);
                if (areEqual === errorObject_1.errorObject) {
                    this.destination.error(errorObject_1.errorObject.e);
                }
            }
            else {
                areEqual = a === b;
            }
            if (!areEqual) {
                this.emit(false);
            }
        }
    };
    SequenceEqualSubscriber.prototype.emit = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    SequenceEqualSubscriber.prototype.nextB = function (value) {
        if (this._oneComplete && this._a.length === 0) {
            this.emit(false);
        }
        else {
            this._b.push(value);
            this.checkValues();
        }
    };
    return SequenceEqualSubscriber;
}(Subscriber_1.Subscriber));
exports.SequenceEqualSubscriber = SequenceEqualSubscriber;
var SequenceEqualCompareToSubscriber = (function (_super) {
    __extends(SequenceEqualCompareToSubscriber, _super);
    function SequenceEqualCompareToSubscriber(destination, parent) {
        _super.call(this, destination);
        this.parent = parent;
    }
    SequenceEqualCompareToSubscriber.prototype._next = function (value) {
        this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber.prototype._error = function (err) {
        this.parent.error(err);
    };
    SequenceEqualCompareToSubscriber.prototype._complete = function () {
        this.parent._complete();
    };
    return SequenceEqualCompareToSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),

/***/ "../../../../rxjs/operators/shareReplay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ReplaySubject_1 = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/**
 * @method shareReplay
 * @owner Observable
 */
function shareReplay(bufferSize, windowTime, scheduler) {
    return function (source) { return source.lift(shareReplayOperator(bufferSize, windowTime, scheduler)); };
}
exports.shareReplay = shareReplay;
function shareReplayOperator(bufferSize, windowTime, scheduler) {
    var subject;
    var refCount = 0;
    var subscription;
    var hasError = false;
    var isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        if (!subject || hasError) {
            hasError = false;
            subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
            subscription = source.subscribe({
                next: function (value) { subject.next(value); },
                error: function (err) {
                    hasError = true;
                    subject.error(err);
                },
                complete: function () {
                    isComplete = true;
                    subject.complete();
                },
            });
        }
        var innerSub = subject.subscribe(this);
        return function () {
            refCount--;
            innerSub.unsubscribe();
            if (subscription && refCount === 0 && isComplete) {
                subscription.unsubscribe();
            }
        };
    };
}
;
//# sourceMappingURL=shareReplay.js.map

/***/ }),

/***/ "../../../../rxjs/operators/single.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var EmptyError_1 = __webpack_require__("../../../../rxjs/util/EmptyError.js");
/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return function (source) { return source.lift(new SingleOperator(predicate, source)); };
}
exports.single = single;
var SingleOperator = (function () {
    function SingleOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    SingleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SingleSubscriber = (function (_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.seenValue = false;
        this.index = 0;
    }
    SingleSubscriber.prototype.applySingleValue = function (value) {
        if (this.seenValue) {
            this.destination.error('Sequence contains more than one element');
        }
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    };
    SingleSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this.tryNext(value, index);
        }
        else {
            this.applySingleValue(value);
        }
    };
    SingleSubscriber.prototype.tryNext = function (value, index) {
        try {
            if (this.predicate(value, index, this.source)) {
                this.applySingleValue(value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    SingleSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        }
        else {
            destination.error(new EmptyError_1.EmptyError);
        }
    };
    return SingleSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=single.js.map

/***/ }),

/***/ "../../../../rxjs/operators/skip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return function (source) { return source.lift(new SkipOperator(count)); };
}
exports.skip = skip;
var SkipOperator = (function () {
    function SkipOperator(total) {
        this.total = total;
    }
    SkipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipSubscriber = (function (_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    SkipSubscriber.prototype._next = function (x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    };
    return SkipSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=skip.js.map

/***/ }),

/***/ "../../../../rxjs/operators/skipLast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var ArgumentOutOfRangeError_1 = __webpack_require__("../../../../rxjs/util/ArgumentOutOfRangeError.js");
/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return function (source) { return source.lift(new SkipLastOperator(count)); };
}
exports.skipLast = skipLast;
var SkipLastOperator = (function () {
    function SkipLastOperator(_skipCount) {
        this._skipCount = _skipCount;
        if (this._skipCount < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    SkipLastOperator.prototype.call = function (subscriber, source) {
        if (this._skipCount === 0) {
            // If we don't want to skip any values then just subscribe
            // to Subscriber without any further logic.
            return source.subscribe(new Subscriber_1.Subscriber(subscriber));
        }
        else {
            return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
        }
    };
    return SkipLastOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipLastSubscriber = (function (_super) {
    __extends(SkipLastSubscriber, _super);
    function SkipLastSubscriber(destination, _skipCount) {
        _super.call(this, destination);
        this._skipCount = _skipCount;
        this._count = 0;
        this._ring = new Array(_skipCount);
    }
    SkipLastSubscriber.prototype._next = function (value) {
        var skipCount = this._skipCount;
        var count = this._count++;
        if (count < skipCount) {
            this._ring[count] = value;
        }
        else {
            var currentIndex = count % skipCount;
            var ring = this._ring;
            var oldValue = ring[currentIndex];
            ring[currentIndex] = value;
            this.destination.next(oldValue);
        }
    };
    return SkipLastSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=skipLast.js.map

/***/ }),

/***/ "../../../../rxjs/operators/skipUntil.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return function (source) { return source.lift(new SkipUntilOperator(notifier)); };
}
exports.skipUntil = skipUntil;
var SkipUntilOperator = (function () {
    function SkipUntilOperator(notifier) {
        this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
    };
    return SkipUntilOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipUntilSubscriber = (function (_super) {
    __extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.hasValue = false;
        this.isInnerStopped = false;
        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SkipUntilSubscriber.prototype._next = function (value) {
        if (this.hasValue) {
            _super.prototype._next.call(this, value);
        }
    };
    SkipUntilSubscriber.prototype._complete = function () {
        if (this.isInnerStopped) {
            _super.prototype._complete.call(this);
        }
        else {
            this.unsubscribe();
        }
    };
    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.hasValue = true;
    };
    SkipUntilSubscriber.prototype.notifyComplete = function () {
        this.isInnerStopped = true;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    return SkipUntilSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=skipUntil.js.map

/***/ }),

/***/ "../../../../rxjs/operators/subscribeOn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SubscribeOnObservable_1 = __webpack_require__("../../../../rxjs/observable/SubscribeOnObservable.js");
/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
exports.subscribeOn = subscribeOn;
var SubscribeOnOperator = (function () {
    function SubscribeOnOperator(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    SubscribeOnOperator.prototype.call = function (subscriber, source) {
        return new SubscribeOnObservable_1.SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator;
}());
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ "../../../../rxjs/operators/switchAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var switchMap_1 = __webpack_require__("../../../../rxjs/operators/switchMap.js");
var identity_1 = __webpack_require__("../../../../rxjs/util/identity.js");
function switchAll() {
    return switchMap_1.switchMap(identity_1.identity);
}
exports.switchAll = switchAll;
//# sourceMappingURL=switchAll.js.map

/***/ }),

/***/ "../../../../rxjs/operators/switchMapTo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return function (source) { return source.lift(new SwitchMapToOperator(innerObservable, resultSelector)); };
}
exports.switchMapTo = switchMapTo;
var SwitchMapToOperator = (function () {
    function SwitchMapToOperator(observable, resultSelector) {
        this.observable = observable;
        this.resultSelector = resultSelector;
    }
    SwitchMapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
    };
    return SwitchMapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapToSubscriber = (function (_super) {
    __extends(SwitchMapToSubscriber, _super);
    function SwitchMapToSubscriber(destination, inner, resultSelector) {
        _super.call(this, destination);
        this.inner = inner;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapToSubscriber.prototype._next = function (value) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
    };
    SwitchMapToSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    return SwitchMapToSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMapTo.js.map

/***/ }),

/***/ "../../../../rxjs/operators/takeWhile.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return function (source) { return source.lift(new TakeWhileOperator(predicate)); };
}
exports.takeWhile = takeWhile;
var TakeWhileOperator = (function () {
    function TakeWhileOperator(predicate) {
        this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
    };
    return TakeWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeWhileSubscriber = (function (_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.index = 0;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeWhile.js.map

/***/ }),

/***/ "../../../../rxjs/operators/throttle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
exports.defaultThrottleConfig = {
    leading: true,
    trailing: false
};
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) { config = exports.defaultThrottleConfig; }
    return function (source) { return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing)); };
}
exports.throttle = throttle;
var ThrottleOperator = (function () {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc
 * @ignore
 * @extends {Ignored}
 */
var ThrottleSubscriber = (function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        _super.call(this, destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
        this._leading = _leading;
        this._trailing = _trailing;
        this._hasTrailingValue = false;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this._trailing) {
                this._hasTrailingValue = true;
                this._trailingValue = value;
            }
        }
        else {
            var duration = this.tryDurationSelector(value);
            if (duration) {
                this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
            }
            if (this._leading) {
                this.destination.next(value);
                if (this._trailing) {
                    this._hasTrailingValue = true;
                    this._trailingValue = value;
                }
            }
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype._unsubscribe = function () {
        var _a = this, throttled = _a.throttled, _trailingValue = _a._trailingValue, _hasTrailingValue = _a._hasTrailingValue, _trailing = _a._trailing;
        this._trailingValue = null;
        this._hasTrailingValue = false;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
    };
    ThrottleSubscriber.prototype._sendTrailing = function () {
        var _a = this, destination = _a.destination, throttled = _a.throttled, _trailing = _a._trailing, _trailingValue = _a._trailingValue, _hasTrailingValue = _a._hasTrailingValue;
        if (throttled && _trailing && _hasTrailingValue) {
            destination.next(_trailingValue);
            this._trailingValue = null;
            this._hasTrailingValue = false;
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._sendTrailing();
        this._unsubscribe();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this._sendTrailing();
        this._unsubscribe();
    };
    return ThrottleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "../../../../rxjs/operators/throttleTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var throttle_1 = __webpack_require__("../../../../rxjs/operators/throttle.js");
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return function (source) { return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
}
exports.throttleTime = throttleTime;
var ThrottleTimeOperator = (function () {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ThrottleTimeSubscriber = (function (_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
        this._hasTrailingValue = false;
        this._trailingValue = null;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ "../../../../rxjs/operators/timeInterval.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
function timeInterval(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return function (source) { return source.lift(new TimeIntervalOperator(scheduler)); };
}
exports.timeInterval = timeInterval;
var TimeInterval = (function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());
exports.TimeInterval = TimeInterval;
;
var TimeIntervalOperator = (function () {
    function TimeIntervalOperator(scheduler) {
        this.scheduler = scheduler;
    }
    TimeIntervalOperator.prototype.call = function (observer, source) {
        return source.subscribe(new TimeIntervalSubscriber(observer, this.scheduler));
    };
    return TimeIntervalOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeIntervalSubscriber = (function (_super) {
    __extends(TimeIntervalSubscriber, _super);
    function TimeIntervalSubscriber(destination, scheduler) {
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.lastTime = 0;
        this.lastTime = scheduler.now();
    }
    TimeIntervalSubscriber.prototype._next = function (value) {
        var now = this.scheduler.now();
        var span = now - this.lastTime;
        this.lastTime = now;
        this.destination.next(new TimeInterval(value, span));
    };
    return TimeIntervalSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=timeInterval.js.map

/***/ }),

/***/ "../../../../rxjs/operators/timeout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var isDate_1 = __webpack_require__("../../../../rxjs/util/isDate.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var TimeoutError_1 = __webpack_require__("../../../../rxjs/util/TimeoutError.js");
/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * <img src="./img/timeout.png" width="100%">
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * @example <caption>Check if ticks are emitted within certain timespan</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(1100) // Let's use bigger timespan to be safe,
 *                       // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err) // Will never be called.
 * );
 *
 * seconds.timeout(900).subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err) // Will emit error before even first value is emitted,
 *                             // since it did not arrive within 900ms period.
 * );
 *
 * @example <caption>Use Date to check if Observable completed</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(new Date("December 17, 2020 03:24:00"))
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
 *                             // since Observable did not complete by then.
 * );
 *
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return function (source) { return source.lift(new TimeoutOperator(waitFor, absoluteTimeout, scheduler, new TimeoutError_1.TimeoutError())); };
}
exports.timeout = timeout;
var TimeoutOperator = (function () {
    function TimeoutOperator(waitFor, absoluteTimeout, scheduler, errorInstance) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.scheduler = scheduler;
        this.errorInstance = errorInstance;
    }
    TimeoutOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.scheduler, this.errorInstance));
    };
    return TimeoutOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutSubscriber = (function (_super) {
    __extends(TimeoutSubscriber, _super);
    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, scheduler, errorInstance) {
        _super.call(this, destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.scheduler = scheduler;
        this.errorInstance = errorInstance;
        this.action = null;
        this.scheduleTimeout();
    }
    TimeoutSubscriber.dispatchTimeout = function (subscriber) {
        subscriber.error(subscriber.errorInstance);
    };
    TimeoutSubscriber.prototype.scheduleTimeout = function () {
        var action = this.action;
        if (action) {
            // Recycle the action if we've already scheduled one. All the production
            // Scheduler Actions mutate their state/delay time and return themeselves.
            // VirtualActions are immutable, so they create and return a clone. In this
            // case, we need to set the action reference to the most recent VirtualAction,
            // to ensure that's the one we clone from next time.
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, this));
        }
    };
    TimeoutSubscriber.prototype._next = function (value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        _super.prototype._next.call(this, value);
    };
    TimeoutSubscriber.prototype._unsubscribe = function () {
        this.action = null;
        this.scheduler = null;
        this.errorInstance = null;
    };
    return TimeoutSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "../../../../rxjs/operators/timeoutWith.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var isDate_1 = __webpack_require__("../../../../rxjs/util/isDate.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * <img src="./img/timeoutWith.png" width="100%">
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * @example <caption>Add fallback observable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const minutes = Rx.Observable.interval(60 * 1000);
 *
 * seconds.timeoutWith(900, minutes)
 *     .subscribe(
 *         value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                      // since first value of `seconds` will not arrive fast enough.
 *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
 *                                 // but here will never be called.
 *     );
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return function (source) {
        var absoluteTimeout = isDate_1.isDate(due);
        var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
        return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
    };
}
exports.timeoutWith = timeoutWith;
var TimeoutWithOperator = (function () {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutWithSubscriber = (function (_super) {
    __extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        _super.call(this, destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
        this.action = null;
        this.scheduleTimeout();
    }
    TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
        var withObservable = subscriber.withObservable;
        subscriber._unsubscribeAndRecycle();
        subscriber.add(subscribeToResult_1.subscribeToResult(subscriber, withObservable));
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
        var action = this.action;
        if (action) {
            // Recycle the action if we've already scheduled one. All the production
            // Scheduler Actions mutate their state/delay time and return themeselves.
            // VirtualActions are immutable, so they create and return a clone. In this
            // case, we need to set the action reference to the most recent VirtualAction,
            // to ensure that's the one we clone from next time.
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
        }
    };
    TimeoutWithSubscriber.prototype._next = function (value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        _super.prototype._next.call(this, value);
    };
    TimeoutWithSubscriber.prototype._unsubscribe = function () {
        this.action = null;
        this.scheduler = null;
        this.withObservable = null;
    };
    return TimeoutWithSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=timeoutWith.js.map

/***/ }),

/***/ "../../../../rxjs/operators/timestamp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var map_1 = __webpack_require__("../../../../rxjs/operators/map.js");
/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return map_1.map(function (value) { return new Timestamp(value, scheduler.now()); });
    // return (source: Observable<T>) => source.lift(new TimestampOperator(scheduler));
}
exports.timestamp = timestamp;
var Timestamp = (function () {
    function Timestamp(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
    return Timestamp;
}());
exports.Timestamp = Timestamp;
;
//# sourceMappingURL=timestamp.js.map

/***/ }),

/***/ "../../../../rxjs/operators/toArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var reduce_1 = __webpack_require__("../../../../rxjs/operators/reduce.js");
function toArrayReducer(arr, item, index) {
    arr.push(item);
    return arr;
}
function toArray() {
    return reduce_1.reduce(toArrayReducer, []);
}
exports.toArray = toArray;
//# sourceMappingURL=toArray.js.map

/***/ }),

/***/ "../../../../rxjs/operators/window.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return function windowOperatorFunction(source) {
        return source.lift(new WindowOperator(windowBoundaries));
    };
}
exports.window = window;
var WindowOperator = (function () {
    function WindowOperator(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        var windowSubscriber = new WindowSubscriber(subscriber);
        var sourceSubscription = source.subscribe(windowSubscriber);
        if (!sourceSubscription.closed) {
            windowSubscriber.add(subscribeToResult_1.subscribeToResult(windowSubscriber, this.windowBoundaries));
        }
        return sourceSubscription;
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = (function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination) {
        _super.call(this, destination);
        this.window = new Subject_1.Subject();
        destination.next(this.window);
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this._complete();
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
    };
    WindowSubscriber.prototype._unsubscribe = function () {
        this.window = null;
    };
    WindowSubscriber.prototype.openWindow = function () {
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var destination = this.destination;
        var newWindow = this.window = new Subject_1.Subject();
        destination.next(newWindow);
    };
    return WindowSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=window.js.map

/***/ }),

/***/ "../../../../rxjs/operators/windowCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) { startWindowEvery = 0; }
    return function windowCountOperatorFunction(source) {
        return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
    };
}
exports.windowCount = windowCount;
var WindowCountOperator = (function () {
    function WindowCountOperator(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowCountSubscriber = (function (_super) {
    __extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
        this.windows = [new Subject_1.Subject()];
        this.count = 0;
        destination.next(this.windows[0]);
    }
    WindowCountSubscriber.prototype._next = function (value) {
        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
        var destination = this.destination;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len && !this.closed; i++) {
            windows[i].next(value);
        }
        var c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
            windows.shift().complete();
        }
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            var window_1 = new Subject_1.Subject();
            windows.push(window_1);
            destination.next(window_1);
        }
    };
    WindowCountSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().error(err);
            }
        }
        this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function () {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().complete();
            }
        }
        this.destination.complete();
    };
    WindowCountSubscriber.prototype._unsubscribe = function () {
        this.count = 0;
        this.windows = null;
    };
    return WindowCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=windowCount.js.map

/***/ }),

/***/ "../../../../rxjs/operators/windowTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var isNumeric_1 = __webpack_require__("../../../../rxjs/util/isNumeric.js");
var isScheduler_1 = __webpack_require__("../../../../rxjs/util/isScheduler.js");
function windowTime(windowTimeSpan) {
    var scheduler = async_1.async;
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (isScheduler_1.isScheduler(arguments[3])) {
        scheduler = arguments[3];
    }
    if (isScheduler_1.isScheduler(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (isNumeric_1.isNumeric(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (isScheduler_1.isScheduler(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (isNumeric_1.isNumeric(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return function windowTimeOperatorFunction(source) {
        return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
    };
}
exports.windowTime = windowTime;
var WindowTimeOperator = (function () {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    };
    return WindowTimeOperator;
}());
var CountedSubject = (function (_super) {
    __extends(CountedSubject, _super);
    function CountedSubject() {
        _super.apply(this, arguments);
        this._numberOfNextedValues = 0;
    }
    CountedSubject.prototype.next = function (value) {
        this._numberOfNextedValues++;
        _super.prototype.next.call(this, value);
    };
    Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
        get: function () {
            return this._numberOfNextedValues;
        },
        enumerable: true,
        configurable: true
    });
    return CountedSubject;
}(Subject_1.Subject));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowTimeSubscriber = (function (_super) {
    __extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
        this.windows = [];
        var window = this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            var closeState = { subscriber: this, window: window, context: null };
            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        }
        else {
            var timeSpanOnlyState = { subscriber: this, window: window, windowTimeSpan: windowTimeSpan };
            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
    }
    WindowTimeSubscriber.prototype._next = function (value) {
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len; i++) {
            var window_1 = windows[i];
            if (!window_1.closed) {
                window_1.next(value);
                if (window_1.numberOfNextedValues >= this.maxWindowSize) {
                    this.closeWindow(window_1);
                }
            }
        }
    };
    WindowTimeSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function () {
        var windows = this.windows;
        while (windows.length > 0) {
            var window_2 = windows.shift();
            if (!window_2.closed) {
                window_2.complete();
            }
        }
        this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function () {
        var window = new CountedSubject();
        this.windows.push(window);
        var destination = this.destination;
        destination.next(window);
        return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function (window) {
        window.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
    if (window) {
        subscriber.closeWindow(window);
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = { action: action, subscription: null };
    var timeSpanState = { subscriber: subscriber, window: window, context: context };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
    var subscriber = state.subscriber, window = state.window, context = state.context;
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
//# sourceMappingURL=windowTime.js.map

/***/ }),

/***/ "../../../../rxjs/operators/windowToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return function (source) { return source.lift(new WindowToggleOperator(openings, closingSelector)); };
}
exports.windowToggle = windowToggle;
var WindowToggleOperator = (function () {
    function WindowToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowToggleSubscriber = (function (_super) {
    __extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
    }
    WindowToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        if (contexts) {
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].window.next(value);
            }
        }
    };
    WindowToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.error(err);
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.complete();
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.unsubscribe();
                context.subscription.unsubscribe();
            }
        }
    };
    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            var closingSelector = this.closingSelector;
            var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
            if (closingNotifier === errorObject_1.errorObject) {
                return this.error(errorObject_1.errorObject.e);
            }
            else {
                var window_1 = new Subject_1.Subject();
                var subscription = new Subscription_1.Subscription();
                var context = { window: window_1, subscription: subscription };
                this.contexts.push(context);
                var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
                if (innerSubscription.closed) {
                    this.closeWindow(this.contexts.length - 1);
                }
                else {
                    innerSubscription.context = context;
                    subscription.add(innerSubscription);
                }
                this.destination.next(window_1);
            }
        }
        else {
            this.closeWindow(this.contexts.indexOf(outerValue));
        }
    };
    WindowToggleSubscriber.prototype.notifyError = function (err) {
        this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
        if (inner !== this.openSubscription) {
            this.closeWindow(this.contexts.indexOf(inner.context));
        }
    };
    WindowToggleSubscriber.prototype.closeWindow = function (index) {
        if (index === -1) {
            return;
        }
        var contexts = this.contexts;
        var context = contexts[index];
        var window = context.window, subscription = context.subscription;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=windowToggle.js.map

/***/ }),

/***/ "../../../../rxjs/operators/windowWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return function windowWhenOperatorFunction(source) {
        return source.lift(new WindowOperator(closingSelector));
    };
}
exports.windowWhen = windowWhen;
var WindowOperator = (function () {
    function WindowOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = (function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.destination = destination;
        this.closingSelector = closingSelector;
        this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
        if (this.closingNotification) {
            this.closingNotification.unsubscribe();
        }
    };
    WindowSubscriber.prototype.openWindow = function (innerSub) {
        if (innerSub === void 0) { innerSub = null; }
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var window = this.window = new Subject_1.Subject();
        this.destination.next(window);
        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject_1.errorObject) {
            var err = errorObject_1.errorObject.e;
            this.destination.error(err);
            this.window.error(err);
        }
        else {
            this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
        }
    };
    return WindowSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=windowWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operators/withLatestFrom.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return function (source) {
        var project;
        if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
        }
        var observables = args;
        return source.lift(new WithLatestFromOperator(observables, project));
    };
}
exports.withLatestFrom = withLatestFrom;
var WithLatestFromOperator = (function () {
    function WithLatestFromOperator(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WithLatestFromSubscriber = (function (_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
        _super.call(this, destination);
        this.observables = observables;
        this.project = project;
        this.toRespond = [];
        var len = observables.length;
        this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            this.toRespond.push(i);
        }
        for (var i = 0; i < len; i++) {
            var observable = observables[i];
            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
        }
    }
    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    WithLatestFromSubscriber.prototype._next = function (value) {
        if (this.toRespond.length === 0) {
            var args = [value].concat(this.values);
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    };
    WithLatestFromSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),

/***/ "../../../../rxjs/operators/zip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArrayObservable_1 = __webpack_require__("../../../../rxjs/observable/ArrayObservable.js");
var isArray_1 = __webpack_require__("../../../../rxjs/util/isArray.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var iterator_1 = __webpack_require__("../../../../rxjs/symbol/iterator.js");
/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function zipOperatorFunction(source) {
        return source.lift.call(zipStatic.apply(void 0, [source].concat(observables)));
    };
}
exports.zip = zip;
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each
 * of its input Observables.
 *
 * If the latest parameter is a function, this function is used to compute the created value from the input values.
 * Otherwise, an array of the input values is returned.
 *
 * @example <caption>Combine age and name from different sources</caption>
 *
 * let age$ = Observable.of<number>(27, 25, 29);
 * let name$ = Observable.of<string>('Foo', 'Bar', 'Beer');
 * let isDev$ = Observable.of<boolean>(true, true, false);
 *
 * Observable
 *     .zip(age$,
 *          name$,
 *          isDev$,
 *          (age: number, name: string, isDev: boolean) => ({ age, name, isDev }))
 *     .subscribe(x => console.log(x));
 *
 * // outputs
 * // { age: 27, name: 'Foo', isDev: true }
 * // { age: 25, name: 'Bar', isDev: true }
 * // { age: 29, name: 'Beer', isDev: false }
 *
 * @param observables
 * @return {Observable<R>}
 * @static true
 * @name zip
 * @owner Observable
 */
function zipStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = observables[observables.length - 1];
    if (typeof project === 'function') {
        observables.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
}
exports.zipStatic = zipStatic;
var ZipOperator = (function () {
    function ZipOperator(project) {
        this.project = project;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.project));
    };
    return ZipOperator;
}());
exports.ZipOperator = ZipOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipSubscriber = (function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, project, values) {
        if (values === void 0) { values = Object.create(null); }
        _super.call(this, destination);
        this.iterators = [];
        this.active = 0;
        this.project = (typeof project === 'function') ? project : null;
        this.values = values;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (isArray_1.isArray(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[iterator_1.iterator] === 'function') {
            iterators.push(new StaticIterator(value[iterator_1.iterator]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                this.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--; // not an observable
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        // abort if not all of them have values
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            // check to see if it's completed now that you've gotten
            // the next value.
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.project) {
            this._tryProject(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(Subscriber_1.Subscriber));
exports.ZipSubscriber = ZipSubscriber;
var StaticIterator = (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipBufferIterator = (function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        _super.call(this, destination);
        this.parent = parent;
        this.observable = observable;
        this.stillUnsubscribed = true;
        this.buffer = [];
        this.isComplete = false;
    }
    ZipBufferIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
    //    this is legit because `next()` will never be called by a subscription in this case.
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "../../../../rxjs/operators/zipAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var zip_1 = __webpack_require__("../../../../rxjs/operators/zip.js");
function zipAll(project) {
    return function (source) { return source.lift(new zip_1.ZipOperator(project)); };
}
exports.zipAll = zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/AnimationFrameAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncAction.js");
var AnimationFrame_1 = __webpack_require__("../../../../rxjs/util/AnimationFrame.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If an animation frame has already been requested, don't request another
        // one. If an animation frame hasn't been requested yet, request one. Return
        // the current animation frame request id.
        return scheduler.scheduled || (scheduler.scheduled = AnimationFrame_1.AnimationFrame.requestAnimationFrame(scheduler.flush.bind(scheduler, null)));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested animation frame and
        // set the scheduled flag to undefined so the next AnimationFrameAction will
        // request its own.
        if (scheduler.actions.length === 0) {
            AnimationFrame_1.AnimationFrame.cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/AnimationFrameScheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncScheduler.js");
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        _super.apply(this, arguments);
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/AsapAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Immediate_1 = __webpack_require__("../../../../rxjs/util/Immediate.js");
var AsyncAction_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncAction.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If a microtask has already been scheduled, don't schedule another
        // one. If a microtask hasn't been scheduled yet, schedule one now. Return
        // the current scheduled microtask id.
        return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested microtask and
        // set the scheduled flag to undefined so the next AsapAction will schedule
        // its own.
        if (scheduler.actions.length === 0) {
            Immediate_1.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction));
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/AsapScheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncScheduler.js");
var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        _super.apply(this, arguments);
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/QueueAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncAction.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/QueueScheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncScheduler.js");
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/VirtualTimeScheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AsyncScheduler.js");
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        var _this = this;
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        _super.call(this, SchedulerAction, function () { return _this.frame; });
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = scheduler.index += 1; }
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.active = true;
        this.index = scheduler.index = index;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        // If an action is rescheduled, we save allocations by mutating its state,
        // pushing it to the end of the scheduler queue, and recycling the action.
        // But since the VirtualTimeScheduler is used for testing, VirtualActions
        // must be immutable so they can be inspected later.
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/animationFrame.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AnimationFrameAction_1 = __webpack_require__("../../../../rxjs/scheduler/AnimationFrameAction.js");
var AnimationFrameScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AnimationFrameScheduler.js");
/**
 *
 * Animation Frame Scheduler
 *
 * <span class="informal">Perform task when `window.requestAnimationFrame` would fire</span>
 *
 * When `animationFrame` scheduler is used with delay, it will fall back to {@link async} scheduler
 * behaviour.
 *
 * Without delay, `animationFrame` scheduler can be used to create smooth browser animations.
 * It makes sure scheduled task will happen just before next browser content repaint,
 * thus performing animations as efficiently as possible.
 *
 * @example <caption>Schedule div height animation</caption>
 * const div = document.querySelector('.some-div');
 *
 * Rx.Scheduler.schedule(function(height) {
 *   div.style.height = height + "px";
 *
 *   this.schedule(height + 1);  // `this` references currently executing Action,
 *                               // which we reschedule with new state
 * }, 0, 0);
 *
 * // You will see .some-div element growing in height
 *
 *
 * @static true
 * @name animationFrame
 * @owner Scheduler
 */
exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/asap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsapAction_1 = __webpack_require__("../../../../rxjs/scheduler/AsapAction.js");
var AsapScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/AsapScheduler.js");
/**
 *
 * Asap Scheduler
 *
 * <span class="informal">Perform task as fast as it can be performed asynchronously</span>
 *
 * `asap` scheduler behaves the same as {@link async} scheduler when you use it to delay task
 * in time. If however you set delay to `0`, `asap` will wait for current synchronously executing
 * code to end and then it will try to execute given task as fast as possible.
 *
 * `asap` scheduler will do its best to minimize time between end of currently executing code
 * and start of scheduled task. This makes it best candidate for performing so called "deferring".
 * Traditionally this was achieved by calling `setTimeout(deferredTask, 0)`, but that technique involves
 * some (although minimal) unwanted delay.
 *
 * Note that using `asap` scheduler does not necessarily mean that your task will be first to process
 * after currently executing code. In particular, if some task was also scheduled with `asap` before,
 * that task will execute first. That being said, if you need to schedule task asynchronously, but
 * as soon as possible, `asap` scheduler is your best bet.
 *
 * @example <caption>Compare async and asap scheduler</caption>
 *
 * Rx.Scheduler.async.schedule(() => console.log('async')); // scheduling 'async' first...
 * Rx.Scheduler.asap.schedule(() => console.log('asap'));
 *
 * // Logs:
 * // "asap"
 * // "async"
 * // ... but 'asap' goes first!
 *
 * @static true
 * @name asap
 * @owner Scheduler
 */
exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ "../../../../rxjs/scheduler/queue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var QueueAction_1 = __webpack_require__("../../../../rxjs/scheduler/QueueAction.js");
var QueueScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/QueueScheduler.js");
/**
 *
 * Queue Scheduler
 *
 * <span class="informal">Put every next task on a queue, instead of executing it immediately</span>
 *
 * `queue` scheduler, when used with delay, behaves the same as {@link async} scheduler.
 *
 * When used without delay, it schedules given task synchronously - executes it right when
 * it is scheduled. However when called recursively, that is when inside the scheduled task,
 * another task is scheduled with queue scheduler, instead of executing immediately as well,
 * that task will be put on a queue and wait for current one to finish.
 *
 * This means that when you execute task with `queue` scheduler, you are sure it will end
 * before any other task scheduled with that scheduler will start.
 *
 * @examples <caption>Schedule recursively first, then do something</caption>
 *
 * Rx.Scheduler.queue.schedule(() => {
 *   Rx.Scheduler.queue.schedule(() => console.log('second')); // will not happen now, but will be put on a queue
 *
 *   console.log('first');
 * });
 *
 * // Logs:
 * // "first"
 * // "second"
 *
 *
 * @example <caption>Reschedule itself recursively</caption>
 *
 * Rx.Scheduler.queue.schedule(function(state) {
 *   if (state !== 0) {
 *     console.log('before', state);
 *     this.schedule(state - 1); // `this` references currently executing Action,
 *                               // which we reschedule with new state
 *     console.log('after', state);
 *   }
 * }, 0, 3);
 *
 * // In scheduler that runs recursively, you would expect:
 * // "before", 3
 * // "before", 2
 * // "before", 1
 * // "after", 1
 * // "after", 2
 * // "after", 3
 *
 * // But with queue it logs:
 * // "before", 3
 * // "after", 3
 * // "before", 2
 * // "after", 2
 * // "before", 1
 * // "after", 1
 *
 *
 * @static true
 * @name queue
 * @owner Scheduler
 */
exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "../../../../rxjs/testing/ColdObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var SubscriptionLoggable_1 = __webpack_require__("../../../../rxjs/testing/SubscriptionLoggable.js");
var applyMixins_1 = __webpack_require__("../../../../rxjs/util/applyMixins.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ColdObservable = (function (_super) {
    __extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
        _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            subscriber.add(new Subscription_1.Subscription(function () {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscriber;
        });
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            var message = this.messages[i];
            subscriber.add(this.scheduler.schedule(function (_a) {
                var message = _a.message, subscriber = _a.subscriber;
                message.notification.observe(subscriber);
            }, message.frame, { message: message, subscriber: subscriber }));
        }
    };
    return ColdObservable;
}(Observable_1.Observable));
exports.ColdObservable = ColdObservable;
applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
//# sourceMappingURL=ColdObservable.js.map

/***/ }),

/***/ "../../../../rxjs/testing/HotObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var SubscriptionLoggable_1 = __webpack_require__("../../../../rxjs/testing/SubscriptionLoggable.js");
var applyMixins_1 = __webpack_require__("../../../../rxjs/util/applyMixins.js");
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var HotObservable = (function (_super) {
    __extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
        _super.call(this);
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    HotObservable.prototype._subscribe = function (subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        subscriber.add(new Subscription_1.Subscription(function () {
            subject.logUnsubscribedFrame(index);
        }));
        return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function () {
        var subject = this;
        var messagesLength = subject.messages.length;
        /* tslint:disable:no-var-keyword */
        for (var i = 0; i < messagesLength; i++) {
            (function () {
                var message = subject.messages[i];
                /* tslint:enable */
                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
            })();
        }
    };
    return HotObservable;
}(Subject_1.Subject));
exports.HotObservable = HotObservable;
applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
//# sourceMappingURL=HotObservable.js.map

/***/ }),

/***/ "../../../../rxjs/testing/SubscriptionLog.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SubscriptionLog = (function () {
    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
        if (unsubscribedFrame === void 0) { unsubscribedFrame = Number.POSITIVE_INFINITY; }
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
    }
    return SubscriptionLog;
}());
exports.SubscriptionLog = SubscriptionLog;
//# sourceMappingURL=SubscriptionLog.js.map

/***/ }),

/***/ "../../../../rxjs/testing/SubscriptionLoggable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SubscriptionLog_1 = __webpack_require__("../../../../rxjs/testing/SubscriptionLog.js");
var SubscriptionLoggable = (function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());
exports.SubscriptionLoggable = SubscriptionLoggable;
//# sourceMappingURL=SubscriptionLoggable.js.map

/***/ }),

/***/ "../../../../rxjs/testing/TestScheduler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var Notification_1 = __webpack_require__("../../../../rxjs/Notification.js");
var ColdObservable_1 = __webpack_require__("../../../../rxjs/testing/ColdObservable.js");
var HotObservable_1 = __webpack_require__("../../../../rxjs/testing/HotObservable.js");
var SubscriptionLog_1 = __webpack_require__("../../../../rxjs/testing/SubscriptionLog.js");
var VirtualTimeScheduler_1 = __webpack_require__("../../../../rxjs/scheduler/VirtualTimeScheduler.js");
var defaultMaxFrame = 750;
var TestScheduler = (function (_super) {
    __extends(TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
        _super.call(this, VirtualTimeScheduler_1.VirtualAction, defaultMaxFrame);
        this.assertDeepEqual = assertDeepEqual;
        this.hotObservables = [];
        this.coldObservables = [];
        this.flushTests = [];
    }
    TestScheduler.prototype.createTime = function (marbles) {
        var indexOf = marbles.indexOf('|');
        if (indexOf === -1) {
            throw new Error('marble diagram for time should have a completion marker "|"');
        }
        return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
        if (marbles.indexOf('^') !== -1) {
            throw new Error('cold observable cannot have subscription offset "^"');
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('cold observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var cold = new ColdObservable_1.ColdObservable(messages, this);
        this.coldObservables.push(cold);
        return cold;
    };
    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
        if (marbles.indexOf('!') !== -1) {
            throw new Error('hot observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var subject = new HotObservable_1.HotObservable(messages, this);
        this.hotObservables.push(subject);
        return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
        var _this = this;
        var messages = [];
        observable.subscribe(function (value) {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createNext(value) });
        }, function (err) {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createError(err) });
        }, function () {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createComplete() });
        });
        return messages;
    };
    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
        var _this = this;
        if (unsubscriptionMarbles === void 0) { unsubscriptionMarbles = null; }
        var actual = [];
        var flushTest = { actual: actual, ready: false };
        var unsubscriptionFrame = TestScheduler
            .parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
        var subscription;
        this.schedule(function () {
            subscription = observable.subscribe(function (x) {
                var value = x;
                // Support Observable-of-Observables
                if (x instanceof Observable_1.Observable) {
                    value = _this.materializeInnerObservable(value, _this.frame);
                }
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createNext(value) });
            }, function (err) {
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createError(err) });
            }, function () {
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createComplete() });
            });
        }, 0);
        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
        }
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
            }
        };
    };
    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
        var flushTest = { actual: actualSubscriptionLogs, ready: false };
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles) {
                var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                flushTest.ready = true;
                flushTest.expected = marblesArray.map(function (marbles) {
                    return TestScheduler.parseMarblesAsSubscriptions(marbles);
                });
            }
        };
    };
    TestScheduler.prototype.flush = function () {
        var hotObservables = this.hotObservables;
        while (hotObservables.length > 0) {
            hotObservables.shift().setup();
        }
        _super.prototype.flush.call(this);
        var readyFlushTests = this.flushTests.filter(function (test) { return test.ready; });
        while (readyFlushTests.length > 0) {
            var test = readyFlushTests.shift();
            this.assertDeepEqual(test.actual, test.expected);
        }
    };
    TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
        if (typeof marbles !== 'string') {
            return new SubscriptionLog_1.SubscriptionLog(Number.POSITIVE_INFINITY);
        }
        var len = marbles.length;
        var groupStart = -1;
        var subscriptionFrame = Number.POSITIVE_INFINITY;
        var unsubscriptionFrame = Number.POSITIVE_INFINITY;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '^':
                    if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    subscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                case '!':
                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                default:
                    throw new Error('there can only be \'^\' and \'!\' markers in a ' +
                        'subscription marble diagram. Found instead \'' + c + '\'.');
            }
        }
        if (unsubscriptionFrame < 0) {
            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame);
        }
        else {
            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
        }
    };
    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
        if (materializeInnerObservables === void 0) { materializeInnerObservables = false; }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('conventional marble diagrams cannot have the ' +
                'unsubscription marker "!"');
        }
        var len = marbles.length;
        var testMessages = [];
        var subIndex = marbles.indexOf('^');
        var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
        var getValue = typeof values !== 'object' ?
            function (x) { return x; } :
            function (x) {
                // Support Observable-of-Observables
                if (materializeInnerObservables && values[x] instanceof ColdObservable_1.ColdObservable) {
                    return values[x].messages;
                }
                return values[x];
            };
        var groupStart = -1;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor + frameOffset;
            var notification = void 0;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '|':
                    notification = Notification_1.Notification.createComplete();
                    break;
                case '^':
                    break;
                case '#':
                    notification = Notification_1.Notification.createError(errorValue || 'error');
                    break;
                default:
                    notification = Notification_1.Notification.createNext(getValue(c));
                    break;
            }
            if (notification) {
                testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
            }
        }
        return testMessages;
    };
    return TestScheduler;
}(VirtualTimeScheduler_1.VirtualTimeScheduler));
exports.TestScheduler = TestScheduler;
//# sourceMappingURL=TestScheduler.js.map

/***/ }),

/***/ "../../../../rxjs/util/AnimationFrame.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
var RequestAnimationFrameDefinition = (function () {
    function RequestAnimationFrameDefinition(root) {
        if (root.requestAnimationFrame) {
            this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
        }
        else if (root.mozRequestAnimationFrame) {
            this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
        }
        else if (root.webkitRequestAnimationFrame) {
            this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
        }
        else if (root.msRequestAnimationFrame) {
            this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
        }
        else if (root.oRequestAnimationFrame) {
            this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
        }
        else {
            this.cancelAnimationFrame = root.clearTimeout.bind(root);
            this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
        }
    }
    return RequestAnimationFrameDefinition;
}());
exports.RequestAnimationFrameDefinition = RequestAnimationFrameDefinition;
exports.AnimationFrame = new RequestAnimationFrameDefinition(root_1.root);
//# sourceMappingURL=AnimationFrame.js.map

/***/ }),

/***/ "../../../../rxjs/util/FastMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FastMap = (function () {
    function FastMap() {
        this.values = {};
    }
    FastMap.prototype.delete = function (key) {
        this.values[key] = null;
        return true;
    };
    FastMap.prototype.set = function (key, value) {
        this.values[key] = value;
        return this;
    };
    FastMap.prototype.get = function (key) {
        return this.values[key];
    };
    FastMap.prototype.forEach = function (cb, thisArg) {
        var values = this.values;
        for (var key in values) {
            if (values.hasOwnProperty(key) && values[key] !== null) {
                cb.call(thisArg, values[key], key);
            }
        }
    };
    FastMap.prototype.clear = function () {
        this.values = {};
    };
    return FastMap;
}());
exports.FastMap = FastMap;
//# sourceMappingURL=FastMap.js.map

/***/ }),

/***/ "../../../../rxjs/util/Immediate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
*/

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
var ImmediateDefinition = (function () {
    function ImmediateDefinition(root) {
        this.root = root;
        if (root.setImmediate && typeof root.setImmediate === 'function') {
            this.setImmediate = root.setImmediate.bind(root);
            this.clearImmediate = root.clearImmediate.bind(root);
        }
        else {
            this.nextHandle = 1;
            this.tasksByHandle = {};
            this.currentlyRunningATask = false;
            // Don't get fooled by e.g. browserify environments.
            if (this.canUseProcessNextTick()) {
                // For Node.js before 0.9
                this.setImmediate = this.createProcessNextTickSetImmediate();
            }
            else if (this.canUsePostMessage()) {
                // For non-IE10 modern browsers
                this.setImmediate = this.createPostMessageSetImmediate();
            }
            else if (this.canUseMessageChannel()) {
                // For web workers, where supported
                this.setImmediate = this.createMessageChannelSetImmediate();
            }
            else if (this.canUseReadyStateChange()) {
                // For IE 6–8
                this.setImmediate = this.createReadyStateChangeSetImmediate();
            }
            else {
                // For older browsers
                this.setImmediate = this.createSetTimeoutSetImmediate();
            }
            var ci = function clearImmediate(handle) {
                delete clearImmediate.instance.tasksByHandle[handle];
            };
            ci.instance = this;
            this.clearImmediate = ci;
        }
    }
    ImmediateDefinition.prototype.identify = function (o) {
        return this.root.Object.prototype.toString.call(o);
    };
    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
        return this.identify(this.root.process) === '[object process]';
    };
    ImmediateDefinition.prototype.canUseMessageChannel = function () {
        return Boolean(this.root.MessageChannel);
    };
    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
        var document = this.root.document;
        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
    };
    ImmediateDefinition.prototype.canUsePostMessage = function () {
        var root = this.root;
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `root.postMessage` means something completely different and can't be used for this purpose.
        if (root.postMessage && !root.importScripts) {
            var postMessageIsAsynchronous_1 = true;
            var oldOnMessage = root.onmessage;
            root.onmessage = function () {
                postMessageIsAsynchronous_1 = false;
            };
            root.postMessage('', '*');
            root.onmessage = oldOnMessage;
            return postMessageIsAsynchronous_1;
        }
        return false;
    };
    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fn = function result() {
            var _a = result, handler = _a.handler, args = _a.args;
            if (typeof handler === 'function') {
                handler.apply(undefined, args);
            }
            else {
                (new Function('' + handler))();
            }
        };
        fn.handler = handler;
        fn.args = args;
        return fn;
    };
    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
        return this.nextHandle++;
    };
    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var root = this.root;
        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
        var onGlobalMessage = function globalMessageHandler(event) {
            var instance = globalMessageHandler.instance;
            if (event.source === root &&
                typeof event.data === 'string' &&
                event.data.indexOf(messagePrefix) === 0) {
                instance.runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };
        onGlobalMessage.instance = this;
        root.addEventListener('message', onGlobalMessage, false);
        var fn = function setImmediate() {
            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.postMessage(messagePrefix + handle, '*');
            return handle;
        };
        fn.instance = this;
        fn.messagePrefix = messagePrefix;
        return fn;
    };
    ImmediateDefinition.prototype.runIfPresent = function (handle) {
        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
        // So if we're currently running a task, we'll need to delay this invocation.
        if (this.currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // 'too much recursion' error.
            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
        }
        else {
            var task = this.tasksByHandle[handle];
            if (task) {
                this.currentlyRunningATask = true;
                try {
                    task();
                }
                finally {
                    this.clearImmediate(handle);
                    this.currentlyRunningATask = false;
                }
            }
        }
    };
    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
        var _this = this;
        var channel = new this.root.MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            _this.runIfPresent(handle);
        };
        var fn = function setImmediate() {
            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
        fn.channel = channel;
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var root = instance.root;
            var doc = root.document;
            var html = doc.documentElement;
            var handle = instance.addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement('script');
            script.onreadystatechange = function () {
                instance.runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    return ImmediateDefinition;
}());
exports.ImmediateDefinition = ImmediateDefinition;
exports.Immediate = new ImmediateDefinition(root_1.root);
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ "../../../../rxjs/util/Map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
var MapPolyfill_1 = __webpack_require__("../../../../rxjs/util/MapPolyfill.js");
exports.Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })();
//# sourceMappingURL=Map.js.map

/***/ }),

/***/ "../../../../rxjs/util/MapPolyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MapPolyfill = (function () {
    function MapPolyfill() {
        this.size = 0;
        this._values = [];
        this._keys = [];
    }
    MapPolyfill.prototype.get = function (key) {
        var i = this._keys.indexOf(key);
        return i === -1 ? undefined : this._values[i];
    };
    MapPolyfill.prototype.set = function (key, value) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            this._keys.push(key);
            this._values.push(value);
            this.size++;
        }
        else {
            this._values[i] = value;
        }
        return this;
    };
    MapPolyfill.prototype.delete = function (key) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            return false;
        }
        this._values.splice(i, 1);
        this._keys.splice(i, 1);
        this.size--;
        return true;
    };
    MapPolyfill.prototype.clear = function () {
        this._keys.length = 0;
        this._values.length = 0;
        this.size = 0;
    };
    MapPolyfill.prototype.forEach = function (cb, thisArg) {
        for (var i = 0; i < this.size; i++) {
            cb.call(thisArg, this._values[i], this._keys[i]);
        }
    };
    return MapPolyfill;
}());
exports.MapPolyfill = MapPolyfill;
//# sourceMappingURL=MapPolyfill.js.map

/***/ }),

/***/ "../../../../rxjs/util/Set.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
function minimalSetImpl() {
    // THIS IS NOT a full impl of Set, this is just the minimum
    // bits of functionality we need for this library.
    return (function () {
        function MinimalSet() {
            this._values = [];
        }
        MinimalSet.prototype.add = function (value) {
            if (!this.has(value)) {
                this._values.push(value);
            }
        };
        MinimalSet.prototype.has = function (value) {
            return this._values.indexOf(value) !== -1;
        };
        Object.defineProperty(MinimalSet.prototype, "size", {
            get: function () {
                return this._values.length;
            },
            enumerable: true,
            configurable: true
        });
        MinimalSet.prototype.clear = function () {
            this._values.length = 0;
        };
        return MinimalSet;
    }());
}
exports.minimalSetImpl = minimalSetImpl;
exports.Set = root_1.root.Set || minimalSetImpl();
//# sourceMappingURL=Set.js.map

/***/ }),

/***/ "../../../../rxjs/util/TimeoutError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when duetime elapses.
 *
 * @see {@link timeout}
 *
 * @class TimeoutError
 */
var TimeoutError = (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError() {
        var err = _super.call(this, 'Timeout has occurred');
        this.name = err.name = 'TimeoutError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return TimeoutError;
}(Error));
exports.TimeoutError = TimeoutError;
//# sourceMappingURL=TimeoutError.js.map

/***/ }),

/***/ "../../../../rxjs/util/applyMixins.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name_1 = propertyKeys[j];
            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
    }
}
exports.applyMixins = applyMixins;
//# sourceMappingURL=applyMixins.js.map

/***/ }),

/***/ "../../../../rxjs/util/assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__("../../../../rxjs/util/root.js");
function assignImpl(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var len = sources.length;
    for (var i = 0; i < len; i++) {
        var source = sources[i];
        for (var k in source) {
            if (source.hasOwnProperty(k)) {
                target[k] = source[k];
            }
        }
    }
    return target;
}
exports.assignImpl = assignImpl;
;
function getAssign(root) {
    return root.Object.assign || assignImpl;
}
exports.getAssign = getAssign;
exports.assign = getAssign(root_1.root);
//# sourceMappingURL=assign.js.map

/***/ }),

/***/ "../../../../rxjs/util/not.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
exports.not = not;
//# sourceMappingURL=not.js.map

/***/ })

});
//# sourceMappingURL=front.module.chunk.js.map
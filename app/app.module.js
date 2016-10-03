"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var home_component_1 = require('./pages/home.component/home.component');
var wid_header_component_1 = require('./widgets/wid_header.component/wid_header.component');
var wid_footer_component_1 = require('./widgets/wid_footer.component/wid_footer.component');
var mod_main_menu_component_1 = require('./modules/mod_main_menu.component/mod_main_menu.component');
var mod_banner_component_1 = require('./modules/mod_banner.component/mod_banner.component');
var mod_online_trip_component_1 = require('./modules/mod_online_trip.component/mod_online_trip.component');
var mod_products_grid_component_1 = require('./modules/mod_products_grid.component/mod_products_grid.component');
var mod_other_products_component_1 = require('./modules/mod_other_products.component/mod_other_products.component');
var mod_news_letter_component_1 = require('./modules/mod_news_letter.component/mod_news_letter.component');
var mod_sidebar_component_1 = require('./modules/mod_sidebar.component/mod_sidebar.component');
var mod_list_products_component_1 = require('./modules/mod_list_products.component/mod_list_products.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent, wid_header_component_1.WidHeaderComponent, home_component_1.HomeComponent, mod_main_menu_component_1.ModMainMenuComponent,
                mod_banner_component_1.ModBannerComponent, mod_online_trip_component_1.ModOnlineTripComponent, mod_products_grid_component_1.ModProductsGridComponent,
                mod_other_products_component_1.ModOtherProductsComponent, mod_news_letter_component_1.ModNewsLetterComponent, wid_footer_component_1.WidFooterComponent,
                mod_sidebar_component_1.ModSidebarComponent, mod_list_products_component_1.ModListProductsComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
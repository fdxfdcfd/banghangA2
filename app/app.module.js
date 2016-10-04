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
var products_component_1 = require('./pages/products.component/products.component');
var account_component_1 = require('./pages/account.component/account.component');
var admin_home_component_1 = require('./pages/admin_home.component/admin_home.component');
var admin_manager_product_component_1 = require('./pages/admin_manager_product.component/admin_manager_product.component');
var admin_manager_customer_component_1 = require('./pages/admin_manager_customer.component/admin_manager_customer.component');
var admin_manager_user_component_1 = require('./pages/admin_manager_user.component/admin_manager_user.component');
var admin_manager_promotion_component_1 = require('./pages/admin_manager_promotion.component/admin_manager_promotion.component');
var admin_manager_partner_component_1 = require('./pages/admin_manager_partner.component/admin_manager_partner.component');
var admin_manager_bill_component_1 = require('./pages/admin_manager_bill.component/admin_manager_bill.component');
var admin_manager_news_component_1 = require('./pages/admin_manager_news.component/admin_manager_news.component');
var wid_header_component_1 = require('./widgets/wid_header.component/wid_header.component');
var wid_footer_component_1 = require('./widgets/wid_footer.component/wid_footer.component');
var wid_admin_header_component_1 = require('./widgets/wid_admin_header.component/wid_admin_header.component');
var wid_admin_footer_component_1 = require('./widgets/wid_admin_footer.component/wid_admin_footer.component');
var mod_main_menu_component_1 = require('./modules/mod_main_menu.component/mod_main_menu.component');
var mod_banner_component_1 = require('./modules/mod_banner.component/mod_banner.component');
var mod_online_trip_component_1 = require('./modules/mod_online_trip.component/mod_online_trip.component');
var mod_products_grid_component_1 = require('./modules/mod_products_grid.component/mod_products_grid.component');
var mod_other_products_component_1 = require('./modules/mod_other_products.component/mod_other_products.component');
var mod_news_letter_component_1 = require('./modules/mod_news_letter.component/mod_news_letter.component');
var mod_sidebar_component_1 = require('./modules/mod_sidebar.component/mod_sidebar.component');
var mod_list_products_component_1 = require('./modules/mod_list_products.component/mod_list_products.component');
var mod_login_component_1 = require('./modules/mod_login.component/mod_login.component');
var mod_cart_component_1 = require('./modules/mod_cart.component/mod_cart.component');
var mod_contact_component_1 = require('./modules/mod_contact.component/mod_contact.component');
var mod_register_component_1 = require('./modules/mod_register.component/mod_register.component');
var mod_admin_left_sidebar_component_1 = require('./modules/mod_admin_left_sidebar.component/mod_admin_left_sidebar.component');
var mod_admin_content_header_component_1 = require('./modules/mod_admin_content_header.component/mod_admin_content_header.component');
var mod_admin_general_info_component_1 = require('./modules/mod_admin_general_info.component/mod_admin_general_info.component');
var mod_admin_chart_component_1 = require('./modules/mod_admin_chart.component/mod_admin_chart.component');
var mod_admin_info_component_1 = require('./modules/mod_admin_info.component/mod_admin_info.component');
var mod_admin_table_manager_product_component_1 = require('./modules/mod_admin_table_manager_product.component/mod_admin_table_manager_product.component');
var mod_admin_table_manager_customer_component_1 = require('./modules/mod_admin_table_manager_customer.component/mod_admin_table_manager_customer.component');
var mod_admin_table_manager_user_component_1 = require('./modules/mod_admin_table_manager_user.component/mod_admin_table_manager_user.component');
var mod_admin_table_manager_promotion_component_1 = require('./modules/mod_admin_table_manager_promotion.component/mod_admin_table_manager_promotion.component');
var mod_admin_table_manager_partner_component_1 = require('./modules/mod_admin_table_manager_partner.component/mod_admin_table_manager_partner.component');
var mod_admin_table_manager_bill_component_1 = require('./modules/mod_admin_table_manager_bill.component/mod_admin_table_manager_bill.component');
var mod_admin_table_manager_news_component_1 = require('./modules/mod_admin_table_manager_news.component/mod_admin_table_manager_news.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent, wid_header_component_1.WidHeaderComponent, home_component_1.HomeComponent, account_component_1.AccountComponent, products_component_1.ProductsComponent, mod_main_menu_component_1.ModMainMenuComponent,
                mod_banner_component_1.ModBannerComponent, mod_online_trip_component_1.ModOnlineTripComponent, mod_products_grid_component_1.ModProductsGridComponent,
                mod_other_products_component_1.ModOtherProductsComponent, mod_news_letter_component_1.ModNewsLetterComponent, wid_footer_component_1.WidFooterComponent,
                mod_sidebar_component_1.ModSidebarComponent, mod_list_products_component_1.ModListProductsComponent, mod_login_component_1.ModLoginComponent, mod_cart_component_1.ModCartComponent, mod_contact_component_1.ModContactComponent,
                mod_register_component_1.ModRegisterComponent, admin_home_component_1.AdminHomeComponent, mod_admin_left_sidebar_component_1.ModAdminLeftSidebarComponent,
                wid_admin_header_component_1.WidAdminHeaderComponent, mod_admin_content_header_component_1.ModAdminContentHeaderComponent, mod_admin_general_info_component_1.ModAdminGeneralInfoComponent,
                mod_admin_chart_component_1.ModAdminChartComponent, mod_admin_info_component_1.ModAdminInfoComponent, wid_admin_footer_component_1.WidAdminFooterComponent, admin_manager_product_component_1.AdminManagerProductComponent,
                mod_admin_table_manager_product_component_1.ModAdminTableManagerProductComponent, admin_manager_customer_component_1.AdminManagerCustomerComponent, mod_admin_table_manager_customer_component_1.ModAdminTableManagerCustomerComponent,
                admin_manager_user_component_1.AdminManagerUserComponent, admin_manager_user_component_1.AdminManagerUserComponent, mod_admin_table_manager_user_component_1.ModAdminTableManagerUserComponent, admin_manager_promotion_component_1.AdminManagerPromotionComponent,
                mod_admin_table_manager_promotion_component_1.ModAdminTableManagerPromotionComponent, admin_manager_partner_component_1.AdminManagerPartnerComponent, mod_admin_table_manager_partner_component_1.ModAdminTableManagerPartnerComponent,
                admin_manager_bill_component_1.AdminManagerBillComponent, mod_admin_table_manager_bill_component_1.ModAdminTableManagerBillComponent, admin_manager_news_component_1.AdminManagerNewsComponent, mod_admin_table_manager_news_component_1.ModAdminTableManagerNewsComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
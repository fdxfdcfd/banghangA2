import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent }   from './app.component';

import { HomeComponent } from './pages/home.component/home.component';
import { ProductsComponent } from './pages/products.component/products.component';
import { AdminHomeComponent } from './pages/admin_home.component/admin_home.component';
import { AdminManagerProductComponent } from './pages/admin_manager_product.component/admin_manager_product.component';
import { AdminManagerCustomerComponent } from './pages/admin_manager_customer.component/admin_manager_customer.component';
import { AdminManagerUserComponent } from './pages/admin_manager_user.component/admin_manager_user.component';
import { AdminManagerPromotionComponent } from './pages/admin_manager_promotion.component/admin_manager_promotion.component';
import { AdminManagerPartnerComponent  } from './pages/admin_manager_partner.component/admin_manager_partner.component';
import { AdminManagerBillComponent } from './pages/admin_manager_bill.component/admin_manager_bill.component';
import { AdminManagerNewsComponent } from './pages/admin_manager_news.component/admin_manager_news.component';

import {  WidHeaderComponent  } from './widgets/wid_header.component/wid_header.component';
import {  WidFooterComponent  } from './widgets/wid_footer.component/wid_footer.component';
import {  WidAdminHeaderComponent } from './widgets/wid_admin_header.component/wid_admin_header.component';
import { WidAdminFooterComponent } from './widgets/wid_admin_footer.component/wid_admin_footer.component';

import { ModMainMenuComponent } from './modules/mod_main_menu.component/mod_main_menu.component';
import { ModBannerComponent } from './modules/mod_banner.component/mod_banner.component';
import { ModOnlineTripComponent } from './modules/mod_online_trip.component/mod_online_trip.component';
import { ModProductsGridComponent } from './modules/mod_products_grid.component/mod_products_grid.component';
import { ModOtherProductsComponent } from './modules/mod_other_products.component/mod_other_products.component';
import { ModNewsLetterComponent } from './modules/mod_news_letter.component/mod_news_letter.component';
import { ModSidebarComponent } from './modules/mod_sidebar.component/mod_sidebar.component';
import { ModListProductsComponent } from './modules/mod_list_products.component/mod_list_products.component';
import { ModAdminLeftSidebarComponent } from './modules/mod_admin_left_sidebar.component/mod_admin_left_sidebar.component';
import { ModAdminContentHeaderComponent } from './modules/mod_admin_content_header.component/mod_admin_content_header.component';
import { ModAdminGeneralInfoComponent } from './modules/mod_admin_general_info.component/mod_admin_general_info.component';
import { ModAdminChartComponent } from './modules/mod_admin_chart.component/mod_admin_chart.component';
import { ModAdminInfoComponent } from './modules/mod_admin_info.component/mod_admin_info.component';
import { ModAdminTableManagerProductComponent } from './modules/mod_admin_table_manager_product.component/mod_admin_table_manager_product.component';
import { ModAdminTableManagerCustomerComponent } from './modules/mod_admin_table_manager_customer.component/mod_admin_table_manager_customer.component';
import { ModAdminTableManagerUserComponent } from './modules/mod_admin_table_manager_user.component/mod_admin_table_manager_user.component';
import { ModAdminTableManagerPromotionComponent } from './modules/mod_admin_table_manager_promotion.component/mod_admin_table_manager_promotion.component';
import { ModAdminTableManagerPartnerComponent } from './modules/mod_admin_table_manager_partner.component/mod_admin_table_manager_partner.component';
import { ModAdminTableManagerBillComponent } from './modules/mod_admin_table_manager_bill.component/mod_admin_table_manager_bill.component';
import { ModAdminTableManagerNewsComponent } from './modules/mod_admin_table_manager_news.component/mod_admin_table_manager_news.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ AppComponent, WidHeaderComponent, HomeComponent, ModMainMenuComponent,
                ModBannerComponent, ModOnlineTripComponent, ModProductsGridComponent, 
                ModOtherProductsComponent, ModNewsLetterComponent, WidFooterComponent,
                ModSidebarComponent, ModListProductsComponent,AdminHomeComponent, ModAdminLeftSidebarComponent,
                WidAdminHeaderComponent, ModAdminContentHeaderComponent, ModAdminGeneralInfoComponent,
                ModAdminChartComponent, ModAdminInfoComponent,WidAdminFooterComponent, AdminManagerProductComponent,
                ModAdminTableManagerProductComponent, AdminManagerCustomerComponent,ModAdminTableManagerCustomerComponent,
                AdminManagerUserComponent,AdminManagerUserComponent, ModAdminTableManagerUserComponent,AdminManagerPromotionComponent,
                ModAdminTableManagerPromotionComponent, AdminManagerPartnerComponent, ModAdminTableManagerPartnerComponent,
                AdminManagerBillComponent, ModAdminTableManagerBillComponent, AdminManagerNewsComponent, ModAdminTableManagerNewsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

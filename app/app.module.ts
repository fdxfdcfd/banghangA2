import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { HomeComponent } from './pages/home.component/home.component';
import { ProductsComponent } from './pages/products.component/products.component';

import {  WidHeaderComponent  } from './widgets/wid_header.component/wid_header.component';
import {  WidFooterComponent  } from './widgets/wid_footer.component/wid_footer.component';

import { ModMainMenuComponent } from './modules/mod_main_menu.component/mod_main_menu.component';
import { ModBannerComponent } from './modules/mod_banner.component/mod_banner.component';
import { ModOnlineTripComponent } from './modules/mod_online_trip.component/mod_online_trip.component';
import { ModProductsGridComponent } from './modules/mod_products_grid.component/mod_products_grid.component';
import { ModOtherProductsComponent } from './modules/mod_other_products.component/mod_other_products.component';
import { ModNewsLetterComponent } from './modules/mod_news_letter.component/mod_news_letter.component';
import { ModSidebarComponent } from './modules/mod_sidebar.component/mod_sidebar.component';
import { ModListProductsComponent } from './modules/mod_list_products.component/mod_list_products.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, WidHeaderComponent, HomeComponent, ModMainMenuComponent,
                ModBannerComponent, ModOnlineTripComponent, ModProductsGridComponent, 
                ModOtherProductsComponent, ModNewsLetterComponent, WidFooterComponent,
                ModSidebarComponent, ModListProductsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

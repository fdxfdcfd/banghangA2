import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { HomeComponent } from './pages/home.component/home.component';
import { ProductsComponent } from './pages/products.component/products.component';
import {AccountComponent} from './pages/account.component/account.component';
import {CheckOutComponent} from './pages/checkout.component/checkout.component';
import {ContactComponent} from './pages/contact.component/contact.component';
import {RegisterComponent} from './pages/register.component/register.component';

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
import {ModLoginComponent} from './modules/mod_login.component/mod_login.component';
import {ModCartComponent} from './modules/mod_cart.component/mod_cart.component';
import {ModContactComponent} from './modules/mod_contact.component/mod_contact.component';
import {ModRegisterComponent} from './modules/mod_register.component/mod_register.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, WidHeaderComponent, HomeComponent,AccountComponent,ProductsComponent, ModMainMenuComponent,
                ModBannerComponent, ModOnlineTripComponent, ModProductsGridComponent, 
                ModOtherProductsComponent, ModNewsLetterComponent, WidFooterComponent,
                ModSidebarComponent, ModListProductsComponent, ModLoginComponent,ModCartComponent,ModContactComponent ,
                ModRegisterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

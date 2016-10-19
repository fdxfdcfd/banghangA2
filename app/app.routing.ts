import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages
import { HomeComponent } from './pages/home.component/home.component';
import { ProductsComponent } from './pages/products.component/products.component';
import { AccountComponent } from './pages/account.component/account.component';
import { CheckOutComponent } from './pages/checkout.component/checkout.component';
import { ContactComponent } from './pages/contact.component/contact.component';
import { RegisterComponent } from './pages/register.component/register.component';
import { SingleComponent } from './pages/single.component/single.component';

import { AdminHomeComponent } from './pages/admin_home.component/admin_home.component';
import { AdminManagerProductComponent } from './pages/admin_manager_product.component/admin_manager_product.component';
import { AdminManagerCustomerComponent } from './pages/admin_manager_customer.component/admin_manager_customer.component';
import { AdminManagerUserComponent } from './pages/admin_manager_user.component/admin_manager_user.component';
import { AdminManagerPromotionComponent } from './pages/admin_manager_promotion.component/admin_manager_promotion.component';
import { AdminManagerPartnerComponent  } from './pages/admin_manager_partner.component/admin_manager_partner.component';
import { AdminManagerBillComponent } from './pages/admin_manager_bill.component/admin_manager_bill.component';
import { AdminManagerNewsComponent } from './pages/admin_manager_news.component/admin_manager_news.component';
import { AdminManagerCategoryProductComponent } from './pages/admin_manager_category_product.component/admin_manager_categoty_product.component';
import { AdminManagerCategoryUserComponent } from './pages/admin_manager_category_user.component/admin_manager_category_user.component';
import { AdminManagerCategoryCustomerComponent } from './pages/admin_manager_category_customer.component/admin_manager_category_customer.component';
import { AdminManagerMenuComponent } from './pages/admin_manager_menu.component/admin_manager_menu.component';
import { AdminProductFormComponent } from './pages/admin_product_form.component/admin_product_form.component';
import { AdminUserFormComponent } from './pages/admin_user_form.component/admin_user_form.component';

const appRoutes: Routes = [
  { path: 'admin/quan-ly-san-pham', component: AdminManagerProductComponent },
  { path: 'admin/quan-ly-khach-hang', component: AdminManagerCustomerComponent },
  { path: 'admin/quan-ly-nhan-vien', component: AdminManagerUserComponent },
  { path: 'admin/quan-ly-khuyen-mai', component: AdminManagerPromotionComponent },
  { path: 'admin/quan-ly-doi-tac', component: AdminManagerPartnerComponent },
  { path: 'admin/quan-ly-hoa-don', component: AdminManagerBillComponent },
  { path: 'admin/quan-ly-tin-tuc', component: AdminManagerNewsComponent },
  { path: 'admin/quan-ly-loai-san-pham', component: AdminManagerCategoryProductComponent },
  { path: 'admin/quan-ly-loai-nhan-vien', component: AdminManagerCategoryUserComponent },
  { path: 'admin/quan-ly-loai-khach-hang', component: AdminManagerCategoryCustomerComponent },
  { path: 'admin/quan-ly-menu', component: AdminManagerMenuComponent },
  { path: 'admin/them-san-pham', component: AdminProductFormComponent },
  { path: 'admin/them-nhan-vien', component: AdminUserFormComponent },
  
  { path: 'admin', component: AdminHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'single', component: SingleComponent },
  { path: 'account', component: AccountComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: 'register', component: RegisterComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

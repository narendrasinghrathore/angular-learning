import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoriesService } from './categories.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LazyloadModule } from './lazyload/lazyload.module';
import { ExmModule } from './exm/exm.module';
import { CrudoperationComponent } from './crudoperation/crudoperation.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    OrdersComponent,
    ProductFormComponent,
    ParentComponent,
    ChildComponent,
    CrudoperationComponent,
  ],
  imports: [
  BrowserModule,
      AppRoutingModule,
      FormsModule,
      NgbModule,
      FormsModule,
      LazyloadModule,
      ExmModule,
      RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckOutComponent},
      {path: 'order-success', component: OrderSuccessComponent},
      {path: 'login', component: LoginComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'admin/products', component: AdminProductsComponent},
      {path: 'admin/products/new', component: ProductFormComponent},
      {path: 'admin/orders', component: AdminOrdersComponent},
      {path: 'crudoperation', component: CrudoperationComponent},


    ])

  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { LoginComponent } from './login/login.component';
import { ProtectedGuard } from './protected.guard';
import { UsersComponent } from './users/users.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home page' },
  { path: 'products', component: ProductsComponent, title: 'products page' },
  { path: 'products/:productId', component: ProductComponent, title: 'product page' },
  { path: 'categories/:category/products', component: CategoryProductsComponent, title: 'products page' },
  { path: 'login', component: LoginComponent, title: 'login page' },
  { path: 'users', component: UsersComponent, title: 'users page' },
  { path: 'cart',canActivate:[ProtectedGuard], component: CartComponent, title: 'cart page' },
  
  { path: '**', component: NotFoundComponent, title: 'notFound page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
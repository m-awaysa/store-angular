import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomTitlePipe } from './custom-title.pipe';
import { ProductComponent } from './product/product.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    CategoriesComponent,
    HomeComponent,
    ProductsComponent,
    NotFoundComponent,
    CustomTitlePipe,
    ProductComponent,
    CategoryProductsComponent,
    SearchPipe,
    LoaderComponent,
    LoginComponent,
    CartComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

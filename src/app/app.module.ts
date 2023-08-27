import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsListComponent } from './view/products-list/products-list.component';
import { CategoriesListComponent } from './view/categories-list/categories-list.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { ProductDetailsComponent } from './view/product-details/product-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './view/login/login.component';
import { ProfileComponent } from './view/profile/profile.component';
import { AddProductComponent } from './view/add-product/add-product.component';
import { EditProductComponent } from './view/edit-product/edit-product.component';
import { ProductFormComponent } from './component/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    CategoriesListComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    LoginComponent,
    ProfileComponent,
    AddProductComponent,
    EditProductComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppProductComponent} from "./components/product/product.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HomePageComponent} from "./components/pages/home-page/home-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppProductImageComponent } from './components/product/product-tile/product-image/app-product-image.component';
import { DeleteButtonComponent } from './components/product/buttons/delete-button/delete-button/delete-button.component';
import { AddToCartButtonComponent } from './components/product/buttons/add-to-cart-button/add-to-cart-button/add-to-cart-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AppProductComponent,
    HomePageComponent,
    AppProductImageComponent,
    AppProductImageComponent,
    DeleteButtonComponent,
    AddToCartButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [
    AppComponent,
    HomePageComponent
  ]
})
export class AppModule {
}

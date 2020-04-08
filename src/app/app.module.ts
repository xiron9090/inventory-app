import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './product-list/products-list.component'
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductDepartmentComponent } from './product-deparment/product-department.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductImageComponent } from './product-image/product-image.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ProductRowComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

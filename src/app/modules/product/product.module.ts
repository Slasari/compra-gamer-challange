import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }

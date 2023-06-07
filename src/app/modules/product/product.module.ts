import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {NgOptimizedImage} from '@angular/common'
import { OrderByPipe } from 'src/app/core/pipes/order-by.pipe';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductCardComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxPaginationModule,
    NgOptimizedImage
  ]
})
export class ProductModule { }

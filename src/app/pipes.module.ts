import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyChangePipe } from './core/pipes/currency-change.pipe';
import { OrderByPipe } from './core/pipes/order-by.pipe';



@NgModule({
  declarations: [
    CurrencyChangePipe,
    OrderByPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CurrencyChangePipe,
    OrderByPipe
  ]
})
export class PipesModule { }

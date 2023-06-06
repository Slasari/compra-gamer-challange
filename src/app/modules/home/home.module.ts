import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {NgOptimizedImage } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
    NgbModule
  ]
})
export class HomeModule { }

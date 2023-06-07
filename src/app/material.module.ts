import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatCheckboxModule} from '@angular/material/checkbox'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }

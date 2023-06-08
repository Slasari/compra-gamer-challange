import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material.module';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PipesModule } from 'src/app/pipes.module';
import { AuthGuard } from 'src/app/core/guards/auth.guard';



@NgModule({
  declarations: [
    UserComponent,
    UserAuthComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MaterialModule,
    PipesModule
  ]
})
export class UserModule { }

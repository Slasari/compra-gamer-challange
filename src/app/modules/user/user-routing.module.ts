import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: 'auth',
    component: UserAuthComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

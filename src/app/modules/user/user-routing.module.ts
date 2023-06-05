import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'auth',
    component: UserAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

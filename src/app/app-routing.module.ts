import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules').then(m => m.HomeModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./modules').then(m => m.ProductModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules').then(m => m.UserModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

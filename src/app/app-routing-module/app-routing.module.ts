import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('../authorized-module/authorized.module').then(mod => mod.AuthorizedModule)
}, {
  path: '',
  loadChildren: () => import('../unauthorized-module/unauthorized.module').then(mod => mod.UnauthorizedModule)
}, {
  path: '**',
  redirectTo: '/home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

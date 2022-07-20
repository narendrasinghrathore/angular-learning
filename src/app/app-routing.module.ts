import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'lazyload', loadChildren: () => import('./lazyload/lazyload.module').then(m => m.LazyloadModule)
  },
 {
  path: 'exm', loadChildren: () => import('./exm/exm.module').then(m => m.ExmModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

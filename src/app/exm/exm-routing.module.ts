import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExmComponent } from './exm.component';

const routes: Routes = [
  { path: '', component: ExmComponent },
  { path: 'loaded', component: ExmComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExmRoutingModule { }

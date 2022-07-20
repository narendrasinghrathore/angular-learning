import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExmRoutingModule } from './exm-routing.module';
import { ExmComponent } from './exm.component';


@NgModule({
  declarations: [
    ExmComponent
  ],
  imports: [
    CommonModule,
    ExmRoutingModule
  ]
})
export class ExmModule { }

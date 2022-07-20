import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadRoutingModule } from './lazyload-routing.module';
import { LazyloadComponent } from './lazyload.component';


@NgModule({
  declarations: [
    LazyloadComponent
  ],
  imports: [
    CommonModule,
    LazyloadRoutingModule
  ]
})
export class LazyloadModule { }

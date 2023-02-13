import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBpiRoutingModule } from './home-bpi-routing.module';
import { HomeBpiComponent } from './home-bpi.component';


@NgModule({
  declarations: [
    HomeBpiComponent
  ],
  imports: [
    CommonModule,
    HomeBpiRoutingModule
  ]
})
export class HomeBpiModule { }

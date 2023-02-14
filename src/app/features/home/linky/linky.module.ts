import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkyRoutingModule } from './linky-routing.module';
import { LinkyComponent } from './linky.component';


@NgModule({
  declarations: [
    LinkyComponent
  ],
  imports: [
    CommonModule,
    LinkyRoutingModule
  ]
})
export class LinkyModule { }

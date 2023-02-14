import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { CountUpDirective } from 'src/app/shared/directives/count-up.directive';
import { HomeBpiRoutingModule } from './home-bpi-routing.module';
import { HomeBpiComponent } from './home-bpi.component';


@NgModule({
  declarations: [
    HomeBpiComponent,
    CountUpDirective
  ],
  imports: [
    CommonModule,
    HomeBpiRoutingModule,
    HttpClientModule,
    AgGridModule
  ]
})
export class HomeBpiModule { }

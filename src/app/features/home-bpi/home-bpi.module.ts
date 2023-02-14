import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgApexchartsModule } from "ng-apexcharts";
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeBpiRoutingModule } from './home-bpi-routing.module';
import { HomeBpiComponent } from './home-bpi.component';

@NgModule({
  declarations: [HomeBpiComponent],
  imports: [
    CommonModule,
    HomeBpiRoutingModule,
    HttpClientModule,
    AgGridModule,
    SharedModule,
    FormsModule,
    NgApexchartsModule
  ],
})
export class HomeBpiModule { }

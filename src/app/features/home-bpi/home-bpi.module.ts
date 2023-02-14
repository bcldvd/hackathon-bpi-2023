import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
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
  ],
})
export class HomeBpiModule {}

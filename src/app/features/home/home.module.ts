import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarbonMetricModule } from '@cdk/carbon-metric/carbon-metric.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CarbonMetricModule],
})
export class HomeModule {}

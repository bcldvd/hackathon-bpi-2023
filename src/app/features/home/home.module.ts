import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarbonMetricModule } from '@cdk/carbon-metric/carbon-metric.module';
import { CountUpDirective } from 'src/app/shared/directives/count-up.directive';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, CountUpDirective],
  imports: [CommonModule, HomeRoutingModule, CarbonMetricModule],
})
export class HomeModule {}

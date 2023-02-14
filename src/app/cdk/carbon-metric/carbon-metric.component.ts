import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carbon-metric',
  templateUrl: './carbon-metric.component.html',
  styleUrls: ['./carbon-metric.component.scss'],
})
export class CarbonMetricComponent {
  @Input() color = 'bg-green-500';
  @Input() title = 'Metric title';
  @Input() description = 'Metric description';
  @Input() route = '';

  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.navigateTo(url);
  }
}

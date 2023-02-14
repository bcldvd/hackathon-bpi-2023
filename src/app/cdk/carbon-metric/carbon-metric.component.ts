import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carbon-metric',
  templateUrl: './carbon-metric.component.html',
  styleUrls: ['./carbon-metric.component.scss'],
})
export class CarbonMetricComponent implements OnInit {
  @Input() color = 'bg-green-500';
  @Input() title = 'Metric title';
  @Input() description = 'Metric description';
  @Input() route = '';

  classNames = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.classNames = {
      [this.color]: true,
      'bg-opacity-60': !this.route,
    };
  }

  navigateTo(url: string) {
    this.navigateTo(url);
  }
}

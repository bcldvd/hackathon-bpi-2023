import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonMetricComponent } from './carbon-metric.component';

describe('CarbonMetricComponent', () => {
  let component: CarbonMetricComponent;
  let fixture: ComponentFixture<CarbonMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbonMetricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

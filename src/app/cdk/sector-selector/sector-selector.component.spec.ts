import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorSelectorComponent } from './sector-selector.component';

describe('SectorSelectorComponent', () => {
  let component: SectorSelectorComponent;
  let fixture: ComponentFixture<SectorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

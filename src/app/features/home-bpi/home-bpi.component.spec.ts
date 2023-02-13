import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBpiComponent } from './home-bpi.component';

describe('HomeBpiComponent', () => {
  let component: HomeBpiComponent;
  let fixture: ComponentFixture<HomeBpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBpiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

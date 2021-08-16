import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAcceptanceComponent } from './risk-acceptance.component';

describe('RiskAcceptanceComponent', () => {
  let component: RiskAcceptanceComponent;
  let fixture: ComponentFixture<RiskAcceptanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskAcceptanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

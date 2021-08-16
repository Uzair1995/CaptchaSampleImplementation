import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentExperienceComponent } from './investment-experience.component';

describe('InvestmentExperienceComponent', () => {
  let component: InvestmentExperienceComponent;
  let fixture: ComponentFixture<InvestmentExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialSituationComponent } from './financial-situation.component';

describe('FinancialSituationComponent', () => {
  let component: FinancialSituationComponent;
  let fixture: ComponentFixture<FinancialSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialSituationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

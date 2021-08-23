import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAccountFundingComponent } from './signup-account-funding.component';

describe('SignupAccountFundingComponent', () => {
  let component: SignupAccountFundingComponent;
  let fixture: ComponentFixture<SignupAccountFundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupAccountFundingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAccountFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

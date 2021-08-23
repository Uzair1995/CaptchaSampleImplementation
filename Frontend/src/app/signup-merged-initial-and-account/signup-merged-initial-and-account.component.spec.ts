import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMergedInitialAndAccountComponent } from './signup-merged-initial-and-account.component';

describe('SignupMergedInitialAndAccountComponent', () => {
  let component: SignupMergedInitialAndAccountComponent;
  let fixture: ComponentFixture<SignupMergedInitialAndAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupMergedInitialAndAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupMergedInitialAndAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupInitialComponent } from './signup-initial.component';

describe('SignupInitialComponent', () => {
  let component: SignupInitialComponent;
  let fixture: ComponentFixture<SignupInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

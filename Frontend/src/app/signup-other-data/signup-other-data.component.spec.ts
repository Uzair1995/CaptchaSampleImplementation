import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOtherDataComponent } from './signup-other-data.component';

describe('SignupOtherDataComponent', () => {
  let component: SignupOtherDataComponent;
  let fixture: ComponentFixture<SignupOtherDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupOtherDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupOtherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationProofComponent } from './identification-proof.component';

describe('IdentificationProofComponent', () => {
  let component: IdentificationProofComponent;
  let fixture: ComponentFixture<IdentificationProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificationProofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

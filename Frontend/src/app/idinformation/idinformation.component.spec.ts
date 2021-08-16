import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDInformationComponent } from './idinformation.component';

describe('IDInformationComponent', () => {
  let component: IDInformationComponent;
  let fixture: ComponentFixture<IDInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IDInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

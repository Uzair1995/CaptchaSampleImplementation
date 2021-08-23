import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrumbs2Component } from './bread-crumbs2.component';

describe('BreadCrumbs2Component', () => {
  let component: BreadCrumbs2Component;
  let fixture: ComponentFixture<BreadCrumbs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadCrumbs2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

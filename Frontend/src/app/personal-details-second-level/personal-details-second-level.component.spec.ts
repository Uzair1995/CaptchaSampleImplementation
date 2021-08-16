import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsSecondLevelComponent } from './personal-details-second-level.component';

describe('PersonalDetailsSecondLevelComponent', () => {
  let component: PersonalDetailsSecondLevelComponent;
  let fixture: ComponentFixture<PersonalDetailsSecondLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsSecondLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsSecondLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

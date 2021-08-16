import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsFirstLevelComponent } from './personal-details-first-level.component';

describe('PersonalDetailsFirstLevelComponent', () => {
  let component: PersonalDetailsFirstLevelComponent;
  let fixture: ComponentFixture<PersonalDetailsFirstLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsFirstLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsFirstLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

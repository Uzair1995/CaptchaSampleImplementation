import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsThirdLevelComponent } from './personal-details-third-level.component';

describe('PersonalDetailsThirdLevelComponent', () => {
  let component: PersonalDetailsThirdLevelComponent;
  let fixture: ComponentFixture<PersonalDetailsThirdLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsThirdLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsThirdLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

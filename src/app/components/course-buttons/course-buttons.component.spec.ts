import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseButtonsComponent } from './course-buttons.component';

describe('CourseButtonsComponent', () => {
  let component: CourseButtonsComponent;
  let fixture: ComponentFixture<CourseButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

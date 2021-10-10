import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDesiredGradeComponent } from './course-desired-grade.component';

describe('CourseDesiredGradeComponent', () => {
  let component: CourseDesiredGradeComponent;
  let fixture: ComponentFixture<CourseDesiredGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDesiredGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDesiredGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

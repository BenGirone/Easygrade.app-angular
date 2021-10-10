import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-desired-grade',
  templateUrl: './course-desired-grade.component.html',
  styleUrls: ['./course-desired-grade.component.css']
})
export class CourseDesiredGradeComponent implements OnInit {
  @Input() desiredGrade = 90;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

  change() {
    const value: number = Number(this.desiredGrade);
    if (!Number.isNaN(value)) {
      this.courseService.setDesiredGrade(value);
    }
  }
}

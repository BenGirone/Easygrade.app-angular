import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-buttons',
  templateUrl: './course-buttons.component.html',
  styleUrls: ['./course-buttons.component.css']
})
export class CourseButtonsComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.courseService.handleAddItem();
  }

  show(): void {
    this.courseService.handleShowExample();
  }

  clear(): void {
    this.courseService.handleClear();
  }
}

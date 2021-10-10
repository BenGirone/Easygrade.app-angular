import { Component, Input, OnInit } from '@angular/core';
import { CourseItem } from '../../CourseItem';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {
  courseItems: CourseItem[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.courseItemsSubject.subscribe((items) => {
      this.courseItems = items;
    });
  }

  onItemChanged(item: CourseItem, index: number): void {
    this.courseService.handleItemChange(item, index);
  }

  onItemAdd(): void {
    this.courseService.handleAddItem();
  }

  onItemRemove(index: number): void {
    this.courseService.handleRemoveItem(index);
  }

  onItemsClear(): void {
    this.courseService.handleClear();
  }

  trackByFn(index: number, item: CourseItem) {
    return item.id;
 }
}

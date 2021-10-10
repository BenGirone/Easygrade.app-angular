import { Component, Input, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseItem } from '../../CourseItem';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit, OnDestroy {
  @Input() item: CourseItem = { id: -1, name: '', points: 0 };
  @Input() index: number = -1;

  @Input() name: string = '';
  @Input() points: string = '';
  @Input() earned: string = '';
  @Input() needed: string = '';

  @Output() itemChanged: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  subscription: Subscription;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.applyItem(this.item);
    this.subscription = this.courseService.courseItemsSubject.subscribe((items) => {
      this.applyItem(items[this.index]);
    });
  }

  applyItem(item: CourseItem): void {
    if (item) {
      this.name = item.name;
      this.points = item.points.toString();

      if (item.earned) {
        this.earned = item.earned.toString();
      } else {
        this.earned = '';
      }

      if (item.needed || item.needed === 0) {
        this.needed = item.needed.toString();
      } else {
        this.needed = '--';
      }
    }
  }

  nameChange(): void {
    if (this.name !== this.item.name) {
      const changedItem: CourseItem = {
        id: this.item.id,
        name: this.name,
        points: this.item.points,
        earned: this.item.earned
      }

      this.itemChanged.emit(changedItem);
    }
  }

  pointsChange(): void {
    const value = Number(this.points);
    if (!Number.isNaN(value) && value !== this.item.points) {
      const changedItem: CourseItem = {
        id: this.item.id,
        name: this.item.name,
        points: value,
        earned: this.item.earned
      }

      this.itemChanged.emit(changedItem);
    }
  }

  earnedChange(): void {
    const value = (this.earned === '') ? undefined : Number(this.earned);
    if (!Number.isNaN(value) && value !== this.item.earned)  {
      const changedItem: CourseItem = {
        id: this.item.id,
        name: this.item.name,
        points: this.item.points,
        earned: value
      }

      this.itemChanged.emit(changedItem);
    }
  }

  remove() {
    this.courseService.handleRemoveItem(this.index);
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }
}

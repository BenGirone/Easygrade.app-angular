import { Injectable } from '@angular/core';
import { CourseItem } from '../CourseItem';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  itemIdGen = -1;
  courseItems: CourseItem[] = [];
  desiredGrade: number = 90;
  courseItemsSubject: Subject<CourseItem[]> = new Subject<CourseItem[]>();

  constructor() { }

  setDesiredGrade(desiredGrade: number) {
    this.desiredGrade = desiredGrade;
    this.calculateNeeds();
    this.courseItemsSubject.next(this.courseItems);
  }

  genId(): number {
    this.itemIdGen++;
    return this.itemIdGen;
  }

  handleAddItem(): void {
    this.courseItems.push({
      id: this.genId(),
      name: 'Assignment',
      points: 100
    });

    this.calculateNeeds();

    this.courseItemsSubject.next(this.courseItems);
  }

  handleItemChange(item: CourseItem, index: number): void {
    this.courseItems[index] = item;

    this.calculateNeeds();

    this.courseItemsSubject.next(this.courseItems);
  }

  handleRemoveItem(index: number): void {
    const filteredItems: CourseItem[] = [];
    for (let i = 0; i < this.courseItems.length; i++) {
      if (i !== index) {
        filteredItems.push({...this.courseItems[i], id: this.genId()});
      }
    }

    this.courseItems = filteredItems;

    this.calculateNeeds();

    // console.log(this.courseItems);
    this.courseItemsSubject.next(this.courseItems);
  }

  handleClear(): void {
    this.courseItems = [];

    this.courseItemsSubject.next(this.courseItems);
  }

  handleShowExample(): void {
    this.courseItems = [
      {id: this.genId(), name: "Test 1", points: 100, earned: 96},
      {id: this.genId(), name: "Test 2", points: 100},
      {id: this.genId(), name: "Essay", points: 50, earned: 89},
      {id: this.genId(), name: "Pop Quiz", points: 10}
    ];

    this.calculateNeeds();

    this.courseItemsSubject.next(this.courseItems);
  }
 
  // Uses some algebra to calculate the average grade required on uncompleted course itens
  calculateNeeds(): void {
    let knownPoints: number = 0.0;
    let unknownMaxPoints: number = 0.0;
    let totalPoints: number = 0.0;

    for (const item of this.courseItems) {
        if (item.earned || item.earned === 0) {
            knownPoints += ((item.earned / 100.0) * item.points);
        } else {
            unknownMaxPoints += item.points;
        }

        totalPoints += item.points;
    }

    const needs = Math.max((((totalPoints * (this.desiredGrade / 100.0)) - knownPoints) * 100.0) / unknownMaxPoints, 0);

    for (const item of this.courseItems) {
      if (item.earned || item.earned === 0) {
        item.needed = undefined;
      } else {
        item.needed = needs;
      }
    }
  }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { FormsModule } from '@angular/forms';
import { CourseDesiredGradeComponent } from './components/course-desired-grade/course-desired-grade.component';
import { CourseButtonsComponent } from './components/course-buttons/course-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    CourseItemComponent,
    CourseDesiredGradeComponent,
    CourseButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

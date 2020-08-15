import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraftsaveRoutingModule } from './draftsave-routing.module';
import { CourseCardListComponent } from './course-card-list/course-card-list.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CourseComponent } from './course/course.component';
import { CourseHomeComponent } from './course-home/course-home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CourseCardListComponent, CourseDialogComponent, CourseComponent, CourseHomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    DraftsaveRoutingModule
  ],
  entryComponents: [CourseDialogComponent]
})
export class DraftsaveModule { }

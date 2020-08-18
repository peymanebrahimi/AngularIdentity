import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from "../../model/course";
import * as moment from 'moment';
import { filter, concatMap, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  private url: string;

  form: FormGroup;

  course: Course;

  @ViewChild('saveButton')
  saveButton: ElementRef;

  @ViewChild('searchInput')
  searchInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: Course,
    @Inject('BASE_URL') baseUrl: string) {

    this.url = `${baseUrl}courses`;

    this.course = course;

    this.form = this.fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [course.longDescription, Validators.required]
    });
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid),
        // switchMap(changes => this.saveCourse(changes))
        switchMap(changes => {
          // changes.id = this.course.id;
          // changes.lessonsCount = this.course.lessonsCount;
          // changes.courseListIcon = this.course.courseListIcon;
          // changes.iconUrl = this.course.iconUrl;

          let theCourse = {
            ...this.course,
            ...changes
          };
          return this.courseService.updateCourse(theCourse)
        })
      )
      .subscribe(console.log)
  }

  saveCourse(changes) {
    changes.id = this.course.id;
    changes.lessonsCount = this.course.lessonsCount;
    changes.courseListIcon = this.course.courseListIcon;
    changes.iconUrl = this.course.iconUrl;
    return from(fetch(`${this.url}/courses/${this.course.id}`, {
      body: JSON.stringify(changes),
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }))
  }

  save() {

  }

  close() {
    this.dialogRef.close();
  }

}
